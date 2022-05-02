import { AppProps } from 'next/app'
import '../styles/global.scss'
import { Header, Carossel } from '../components'
import { Button } from '../components/buttons/animatedButton'
import { NavbarAnimated } from '../components/navBarAnimated/navbar'


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
