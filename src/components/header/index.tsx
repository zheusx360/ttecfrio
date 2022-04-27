import styles from './styles.module.scss'
import Image from 'next/image'
import logo from '../../../public/images/IgluLogo.svg'
import title from '../../../public/images/LogoMenu.svg'
import Link from 'next/link'

export function Header(){
   return(
      <header className={styles.headerContainer}>
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
      </header>
   )
}
