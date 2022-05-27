import Head from 'next/head'
import Image from 'next/image'
import Icon from '../../../public/images/IconIgluCircle.svg'
import style from './servicos.module.scss'

export function Servicos() {
  return (
    <div className={style.container}>
      <div className={style.leftContent}>
        <div className={style.iconContent}>
          <Image src={Icon} width={145} height={145} alt="TTECFRIO"/>
        </div>
        <span>SOLICITE UM ORÇAMENTO CONOSCO</span>
        <p>Preencha os dados do formulário e receba um super desconto em nossos serviços para sua casa ou empresa, com a TTEC FRIO você sempre ganha!</p>
      </div>
      <div className={style.rightContent}></div>
    </div>
  )
}
