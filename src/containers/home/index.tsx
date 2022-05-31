import { Carossel, Header } from '../../components'
import styles from './home.module.scss'
import Image from 'next/image'
import { Button } from '../../components/buttons/animatedButton'
import Router from "next/router"

export function Home() {
  return (
    <body>
      <Carossel />
      <div className={styles.section}>

        <div className={styles.column}>
          <div className={styles.row}>
            <div className={styles.content}>
              <Image src="/images/ImagesCarousel/satisfacao.jpg" alt="Satisfação" width={500} height={500} />
            </div>
            <section className={styles.contentText}>
              <h1>Excelência no Atendimento</h1><br />
              <p>A ttec frio tem como uma de suas maiores prioridades a excelência no atendimento e esse é um dos motivos para sua permanência por mais de duas décadas no mercado.</p>
              <p>&bull; Atendimento extremamente rápido</p>
              <p>&bull; Equipe especializada</p>
              <p>&bull; Preços abaixo do mercado</p>
              <p>&bull; Suporte técnico 24 horas</p>
            </section>
          </div>
          <div className={styles.row2}>
            <div className={styles.contentText}>
              <h1>Equipe técnica especializada</h1><br />
              <p>Contamos com uma equipe altamente especializada, estamos sempre buscando o que existe de melhor e mais técnologico no mercado, para oferecer sempre um serviço de ponta e atualizado.</p>
              <p>&bull; Equipe altamente treinada</p>
              <p>&bull; Técnologia de ponta</p>
              <p>&bull; Equipamentos modernos</p>
            </div>
            <section className={styles.content}>
              <Image src="/images/ImagesCarousel/freezer6.jpg" alt="Técnologia" width={500} height={500} />
            </section>
          </div>
        </div>

      </div>
      <section className={styles.sectionContainer}>
        <section className={styles.sectionTop}>
          <div className={styles.imageSection}>
            <span>
              <Image src="/images/ImagesCarousel/qualidade.jpg" alt="Eficiencia" width={420} height={350} />
            </span>
            <div className={styles.imageText}>
              <header>Qualidade e agilidade</header>
              <section>
                <span>
                  Estamos preparados com o que há de melhor no mercado para entregar o serviço desejado com muita qualidade e agilidade, garantindo assim a melhor entrega no menor prazo. solicite um orçamento e se surpreenda com o que temos para te oferecer.
                  <div>
                    <Button type={5} text={"SOLICITAR ORÇAMENTO"} onClick={() => Router.push('/orcamento')}/>
                  </div>
                </span>
              </section>
            </div>
          </div>
        </section>
        <section className={styles.sectionSub}>
        </section>
      </section>
    </body>
  )
}
