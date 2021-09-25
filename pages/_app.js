/* pages/_app.js */
import '../styles/globals.css'
import NavBar from '../components/navbar'

function Marketplace({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <NavBar>{page}</NavBar>)

  return getLayout(<Component {...pageProps} />)
}

export default Marketplace