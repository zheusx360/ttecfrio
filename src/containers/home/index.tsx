import { Carossel } from '../../components'
import styles from './home.module.scss'
import Image from 'next/image'
import { Button } from '../../components/buttons/animatedButton'
import Router from "next/router"

export function Home() {
  return (
    <div>
      <Carossel />
      <div className={styles.section}>

        <div className={styles.column}>
          <div className={styles.row}>
            <div className={styles.content}>
              <Image src="/images/ImagesCarousel/satisfacao.jpg" alt="Satisfação" width={500} height={500} />
            </div>
            <div className={styles.contentText}>
              <span>Excelência no Atendimento</span><br />
              <p>A ttec frio tem como uma de suas maiores prioridades a excelência no atendimento e esse é um dos motivos para sua permanência por mais de duas décadas no mercado.</p>
              <p>&bull; Atendimento extremamente rápido</p>
              <p>&bull; Equipe especializada</p>
              <p>&bull; Preços abaixo do mercado</p>
              <p>&bull; Suporte técnico 24 horas</p>
            </div>
          </div>
          <div className={styles.row2}>
            <div className={styles.contentText}>
              <span>Equipe técnica especializada</span><br />
              <p>Contamos com uma equipe altamente especializada, estamos sempre buscando o que existe de melhor e mais técnologico no mercado, para oferecer sempre um serviço de ponta e atualizado.</p>
              <p>&bull; Equipe altamente treinada</p>
              <p>&bull; Técnologia de ponta</p>
              <p>&bull; Equipamentos modernos</p>
            </div>
            <div className={styles.content}>
              <Image src="/images/ImagesCarousel/freezer6.jpg" alt="Técnologia" width={500} height={500} />
            </div>
          </div>
        </div>

      </div>
      <div className={styles.sectionContainer}>
        <section className={styles.sectionTop}>
          <div className={styles.imageSection}>
            <span>
              <Image src="/images/ImagesCarousel/qualidade.jpg" alt="Eficiencia" width={420} height={350} />
            </span>
            <div className={styles.imageText}>
              <p>Qualidade e agilidade</p>
              <div>
                <span>
                  Estamos preparados com o que há de melhor no mercado para entregar o serviço desejado com muita qualidade e agilidade, garantindo assim a melhor entrega no menor prazo. solicite um orçamento e se surpreenda com o que temos para te oferecer.
                  <div>
                    <Button type={5} text={"SOLICITAR ORÇAMENTO"} onClick={() => Router.push('/orcamento')}/>
                  </div>
                </span>
              </div>
            </div>
            <div></div>
          </div>
        </section>
        <section className={styles.sectionSub}>
        </section>
      </div>
    </div>
  )
}
