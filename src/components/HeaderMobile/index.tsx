import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import icon from '../../../public/images/imagesPng/IgluIcon.png'
import texto from '../../../public/images/imagesPng/TextoTTEC.png'

export function HeaderMobile(){

  const [theme, setTheme] = useState(1)
  useEffect(()=>{
    const handleScroll = () =>{
      const show = window.scrollY > 100
      if(show){
        setTheme(2)
      }else{
        setTheme(1)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll',handleScroll)
    }
  }, [])

  return(
    <div className={`${theme === 2 ? styles.headerContainerB : styles.headerContainer}`}>
      <div className={styles.content}>
        <div className={styles.icone}>
          <Image src={icon} width={55} height={50} alt="Icon"/>
        </div>
        <div className={styles.center}>
          <Image src={texto} width={140} height={58} alt="Icon"/>
        </div>
        <div className={styles.toggle}>
          <span>Tog</span>
        </div>
      </div>
    </div>
  )

}
