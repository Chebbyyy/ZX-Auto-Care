import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const SRC = fileURLToPath(new URL('../src/assets/booking-car.png', import.meta.url))
const OUT = fileURLToPath(new URL('../src/assets/booking-car-alpha.png', import.meta.url))

const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
const { width, height, channels } = info

const idx = (x, y) => (y * width + x) * channels

// Sample the four corners as background reference colors
const corners = [
  [0, 0],
  [width - 1, 0],
  [0, height - 1],
  [width - 1, height - 1],
].map(([x, y]) => data.slice(idx(x, y), idx(x, y) + 3))

const TOL = 26
const matchesBg = (x, y) => {
  const o = idx(x, y)
  const r = data[o]
  const g = data[o + 1]
  const b = data[o + 2]
  return corners.some(
    (c) => Math.abs(r - c[0]) <= TOL && Math.abs(g - c[1]) <= TOL && Math.abs(b - c[2]) <= TOL,
  )
}

// BFS flood fill from every border pixel that matches the background color
const visited = new Uint8Array(width * height)
const queue = []
for (let x = 0; x < width; x++) {
  for (const y of [0, height - 1]) {
    if (!visited[y * width + x] && matchesBg(x, y)) {
      visited[y * width + x] = 1
      queue.push(x, y)
    }
  }
}
for (let y = 0; y < height; y++) {
  for (const x of [0, width - 1]) {
    if (!visited[y * width + x] && matchesBg(x, y)) {
      visited[y * width + x] = 1
      queue.push(x, y)
    }
  }
}

while (queue.length) {
  const y = queue.pop()
  const x = queue.pop()
  data[idx(x, y) + 3] = 0
  const neighbors = [
    [x + 1, y],
    [x - 1, y],
    [x, y + 1],
    [x, y - 1],
  ]
  for (const [nx, ny] of neighbors) {
    if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue
    const key = ny * width + nx
    if (visited[key]) continue
    if (matchesBg(nx, ny)) {
      visited[key] = 1
      queue.push(nx, ny)
    }
  }
}

// Soften the cut edge: any opaque pixel adjacent to a transparent one gets partial alpha
const alphaCopy = Buffer.from(data)
for (let y = 1; y < height - 1; y++) {
  for (let x = 1; x < width - 1; x++) {
    const o = idx(x, y)
    if (alphaCopy[o + 3] === 0) continue
    let clearNeighbors = 0
    for (const [nx, ny] of [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
    ]) {
      if (alphaCopy[idx(nx, ny) + 3] === 0) clearNeighbors++
    }
    if (clearNeighbors > 0) data[o + 3] = Math.max(0, 255 - clearNeighbors * 70)
  }
}

await sharp(data, { raw: { width, height, channels } })
  .png()
  .trim()
  .toFile(OUT)

console.log('Wrote', OUT)
