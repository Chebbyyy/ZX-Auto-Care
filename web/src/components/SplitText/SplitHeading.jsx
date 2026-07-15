import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import './SplitHeading.css'

gsap.registerPlugin(SplitText, ScrollTrigger)

/**
 * Split-text reveal heading with animated underline.
 */
function SplitHeading({
  as: Tag = 'h2',
  children,
  className = '',
  underline = true,
}) {
  const rootRef = useRef(null)
  const textRef = useRef(null)
  const lineRef = useRef(null)

  useGSAP(
    () => {
      const reduce =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (!textRef.current) return

      if (reduce) {
        gsap.set(textRef.current, { opacity: 1 })
        if (lineRef.current) gsap.set(lineRef.current, { scaleX: 1, opacity: 1 })
        return
      }

      const split = SplitText.create(textRef.current, {
        type: 'chars,words',
        charsClass: 'split-char',
        wordsClass: 'split-word',
      })

      gsap.set(textRef.current, { opacity: 1 })
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 82%',
          once: true,
        },
      })

      tl.from(split.chars, {
        yPercent: 45,
        opacity: 0,
        duration: 0.55,
        stagger: 0.022,
        ease: 'power2.out',
      })

      if (lineRef.current) {
        tl.fromTo(
          lineRef.current,
          { scaleX: 0, opacity: 0.4 },
          { scaleX: 1, opacity: 1, duration: 0.85, ease: 'power3.out' },
          '-=0.35',
        )
      }

      return () => {
        split.revert()
      }
    },
    { scope: rootRef },
  )

  return (
    <div ref={rootRef} className={`split-heading ${className}`.trim()}>
      <Tag className="split-heading__title">
        <span ref={textRef} className="split-heading__text">
          {children}
        </span>
      </Tag>
      {underline ? (
        <div className="split-heading__underline-wrap" aria-hidden="true">
          <span ref={lineRef} className="split-heading__underline" />
        </div>
      ) : null}
    </div>
  )
}

export default SplitHeading
