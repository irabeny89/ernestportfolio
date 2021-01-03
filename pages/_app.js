import '../styles/globals.css'
import Layout from '../src/components/Layout'
import MenuProvider from '../src/components/MenuProvider'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MenuProvider><Layout><Component {...pageProps} /></Layout></MenuProvider>
    </>
  )
}

export default MyApp