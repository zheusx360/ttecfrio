import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import logo from '../../../public/images/IgluLogo.svg'
import title from '../../../public/images/LogoMenu.svg'
import Link from 'next/link'

export function Header(){
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
      <header id="navbar" className={`${theme === 2 ? styles.headerContainerB : styles.headerContainer}`}>
        <div className="nav-scrolled">
         <div className={styles.headerContent}>
            <a>
              <Image src={title} width={310} alt="TTECFRIO"/>
            </a>
            <nav>
              <Link href='/'>
                <a>Home</a>
              </Link>
              <Link href='/servicos'>
                <a>Serviços</a>
              </Link>
              <Link href='/quemsomos'>
                <a>Quem somos</a>
              </Link>
              <Link href='/constatos'>
                <a>Contatos</a>
              </Link>
            </nav>
         </div>
         </div>
      </header>
   )
}
