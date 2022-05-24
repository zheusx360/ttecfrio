import { AppProps } from 'next/app'
import '../styles/global.scss'
import { Header, HeaderMobile } from '../components'
import Footer from '../components/footer/footer'
import { WhatsAppButton } from '../components/buttons/whatsappButton'


function MyApp({ Component, pageProps }: AppProps) {

  return (
  <>
    <WhatsAppButton/>
    <Header/>
    <HeaderMobile/>
    <Component {...pageProps} />
    <Footer/>
  </>
  )

}

export default MyApp

