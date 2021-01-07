import '../styles/globals.css'
import Layout from '../src/components/Layout'
import MenuProvider from '../src/components/MenuProvider'
import NavMenuProvider from '../src/components/NavMenuProvider'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavMenuProvider>
        <MenuProvider>
          <Layout><Component {...pageProps} /></Layout>
        </MenuProvider>
      </NavMenuProvider>
    </>
  )
}

export default MyApp