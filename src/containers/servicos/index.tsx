import Image from 'next/image'
import IconsAnimated from '../../components/IconsAnimated'

import styles from './servicos.module.scss'
export function Servicos() {
  return (
    <div className={styles.container}>
      <div className={styles.iconContent}><IconsAnimated imagem='certificado' loop={false}/></div>
      <div className={styles.titulo}>
        <header>NOSSOS SERVIÇOS</header>
      </div>
      <div className={styles.content}>
        <div className={styles.circle}>
          <Image src="/images/ImagesCarousel/freezer4.jpg" alt="Satisfação" width={500} height={500} />
        </div>
        <div className={styles.square}>
          <h1>Manutencao de câmaras frias</h1>
          <span>A manutenção preventiva câmaras frigoríficas oferece uma série de vantagens, entre elas: garantir a característica dos produtos armazenados. Pois uma quebra ou falha no funcionamento do sistema pode danificar e até impossibilitar o uso ou venda dos produtos, gerando grandes pejuízos em sua receita.</span>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.circle}>
          <Image src="/images/ImagesCarousel/monitorar.jpg" alt="Satisfação" width={500} height={500} />
        </div>
        <div className={styles.square}>
          <h2>Sitema de alarmes</h2>
          <span>A segurança de seus equipamentos é fundamental, com isso é imprescindível ter uma segurança mesmo quando sua empresa está fechada. Fazemos instalação de alarmes que monitoram 24 horas seus equipamentos, dando a segurança de que tudo estará 100% funcional 24 horas por dia.</span>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.circle}>
          <Image src="/images/ImagesCarousel/freezer3.jpg" alt="Satisfação" width={500} height={500} />
        </div>
        <div className={styles.square}>
          <h2>Montagem e desmontagem de câmaras frias</h2>
          <span>Somos especializados em montagem e desmontagem de câmaras frias, seja para um pequeno, médio ou grande negócio nós temos a solução necessária para atender a demanda que você precisa, com a ttec frio você tem a garantia de instalação ou desmontagem com 100% de eficiência.</span>
        </div>
      </div>
    </div>
  )
}
