import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  return <><Navbar/> <Component {...pageProps} /> <Footer/> </>
}

export default MyApp
