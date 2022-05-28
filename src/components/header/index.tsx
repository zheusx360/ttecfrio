import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import title from '../../../public/images/LogoMenu.svg'
import { NavbarAnimated } from '../navBarAnimated/navbar'
import Router from "next/router"

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
            <Image onClick={() => Router.push('/')} src={title} width={310} alt="TTECFRIO"/>
          </a>
          <a>
            <NavbarAnimated closeVisible={() => {}} marginLeft={40}/>
          </a>
       </div>
       </div>
    </header>
   )
}
