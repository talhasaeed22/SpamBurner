import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../Components/Footer'
import Navbar from '../Components/Nav/Navbar'
import '../styles/globals.css'
import MobileNav from "../Components/Nav/MobileNav";

function MyApp({ Component, pageProps }) {

  return <><div className="d-xl-none"><MobileNav /></div> <div className=" d-xl-block d-none"><Navbar /></div> <Component {...pageProps} /> <Footer /> </>
}

export default MyApp
