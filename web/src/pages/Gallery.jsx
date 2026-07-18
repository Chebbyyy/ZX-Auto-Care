import PageHero from '../components/PageHero/PageHero'
import Gallery from '../components/Gallery/Gallery'
import galleryHero from '../assets/gallery/mw20.jpeg'

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Proven Work"
        title="Our Work Gallery"
        titleHighlight="Gallery"
        description="A closer look at real repairs, careful workmanship, and vehicles returned to the road with confidence."
        image={galleryHero}
      />
      <Gallery />
    </>
  )
}

export default GalleryPage
