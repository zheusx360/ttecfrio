import styles  from "./navbar.module.scss"
import Link from "next/link"
import Router from "next/router"


export function NavbarAnimated({marginLeft = 5}){

  return(
    <>
    <div style={{marginLeft: marginLeft}}>
      <ul className={styles.ul}>
	       <li className={styles.li} onClick={()=> Router.push('./')}>Home</li>
	       <li className={styles.li} onClick={()=> Router.push('./servicos')}>Serviços</li>
	       <li className={styles.li} onClick={()=> Router.push('./quemsomos')}>Quem somos</li>
	       <li className={styles.li} onClick={()=> Router.push('./contatos')}>Contatos</li>
      </ul>
    </div>

</>
  )

}
