import { AppProps } from 'next/app'
import '../styles/global.scss'
import { Header} from '../components'
import Footer from '../components/footer/footer'
import { WhatsAppButton } from '../components/buttons/whatsappButton'


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <WhatsAppButton/>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
  )
}

export default MyApp
