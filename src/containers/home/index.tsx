import { Carossel } from '../../components'
import styles from './home.module.scss'

export function Home() {
  return (
    <div>
      <Carossel/>
      <div className={styles.section}>
        <p>Conteudo página HOME</p>
      </div>
    </div>
  )
}
