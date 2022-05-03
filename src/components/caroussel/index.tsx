import React, { useState, useEffect } from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'next/image'
import styles from './carousel.module.scss'
import feather from 'feather-icons'


export function Carossel(){
  const [theme, setTheme] = useState(styles.customImage)
  const [indice, setIndice] = useState(true)

  const nextIcon = <span aria-hidden="true" className="carousel-control-next-icon" />

  const prevIcon = <span className={styles.spanStyle}>Anterior</span>

  useEffect(()=>{
    setIndice(!indice)
    ResetValues()
  },[])

  const ResetValues = () =>{
      let i = !indice
      setIndice(i)
      setTimeout(() => {
        if(i){
          setTheme(styles.imageBack)
        }else{
          setTheme(styles.customImage)
        }
      }, 190);
  }


  return(
    <>

    <Carousel fade interval={6000} nextIcon={nextIcon} prevIcon={prevIcon} pause={false} indicators={false} onSelect={() => ResetValues()}>
  <Carousel.Item className={theme}>
    <div className="unset-img full-bleed">
    <Image
      src="/images/ImagesCarousel/imagem1.jpg"
      layout='fill'
      alt="First slide"
    />
    </div>
    <Carousel.Caption>
      <h3>Câmaras frigorificas</h3>
      <p>Não sofra com problemas causados por falta de manuteção</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className={theme}>
    <div className="unset-img full-bleed">
    <Image
      src="/images/ImagesCarousel/imagem2.jpg"
      layout='fill'
      alt="Second slide"
    />
    </div>

    <Carousel.Caption>
      <h3>Atendimento em toda grande São Paulo</h3>
      <p>Atendimento personalizado e com garantia de satisfação.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className={theme}>
    <div className="unset-img full-bleed">
    <Image
      src="/images/ImagesCarousel/imagem3.jpg"
      layout='fill'
      alt="Second slide"
    />
    </div>

    <Carousel.Caption>
      <h3>A mais de 10 anos no mercado</h3>
      <p>Confie em quem está a mais de 10 anos no mercado sempre oferecendo o melhor para seus clientes.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className={theme}>
    <div className="unset-img full-bleed">
    <Image
      src="/images/ImagesCarousel/imagem4.jpg"
      layout='fill'
      alt="Second slide"
    />
    </div>

    <Carousel.Caption>
      <h3>A saúde do seu negócio sempre em segurança</h3>
      <p>Uma equipe a disposição sempre que seu negócio precisar de um socorro.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<div className={styles.spanStyle}>
  <span aria-hidden="true" className="carousel-control-next-icon" />
</div>
</>
  )


}




