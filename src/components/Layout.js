import React, { useContext } from 'react'
import Header from './header'
import Footer from './Footer'
import { MenuContext } from './MenuProvider'
import MenuList from './MenuList'

const Layout = ({ children }) => {
  const { isShowing } = useContext(MenuContext)
  return (
    <>
      <Header />
      {isShowing && <MenuList />}
      {children}
      <Footer />
    </>
  );
}

export default Layout