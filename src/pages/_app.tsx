import { AppProps } from 'next/app'
import '../styles/global.scss'
import { Header} from '../components'
import Footer from '../components/footer/footer'


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
  )
}

export default MyApp
