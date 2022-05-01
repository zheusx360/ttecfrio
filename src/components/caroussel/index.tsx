import { CCarousel, CCarouselItem, CImage, CCarouselCaption } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { Header } from '../header'


export function Carossel(){

  return(
    <CCarousel controls transition="crossfade" indicators>
    <CCarouselItem>
      <CImage className="d-block w-100" src="/images/ImagesCarousel/React.jpg" alt="slide 1" />
      <CCarouselCaption className="d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </CCarouselCaption>
    </CCarouselItem>
    <CCarouselItem>
      <CImage className="d-block w-100" src="/images/ImagesCarousel/Vue.jpg" alt="slide 2" />
      <CCarouselCaption className="d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </CCarouselCaption>
    </CCarouselItem>
    <CCarouselItem>
      <CImage className="d-block w-100" src="/images/ImagesCarousel/Angular.jpg" alt="slide 3" />
      <CCarouselCaption className="d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </CCarouselCaption>
    </CCarouselItem>
  </CCarousel>
  )

}
