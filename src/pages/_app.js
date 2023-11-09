import Navbar from "../components/Navbar/Navbar.component"
import '../styles/globals.scss'
import Footer from "@/components/Footer/Footer.component"
import { SessionProvider } from "next-auth/react"
function MyApp({ Component,  pageProps: { session, ...pageProps } }) {
  return (
    <>
    <SessionProvider>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </SessionProvider>
    </>
  )
}

export default MyApp