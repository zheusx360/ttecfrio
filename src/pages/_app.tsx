import { AppProps } from 'next/app'
import '../styles/global.scss'
import { Header, Carossel } from '../components'


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Header/>
    <Carossel/>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
