import Navbar from "../components/Navbar/Navbar.component"
import '../styles/globals.scss'
import Footer from "@/components/Footer/Footer.component"
function MyApp({ Component,  pageProps: { session, ...pageProps } }) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}

export default MyApp