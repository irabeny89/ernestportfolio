import React, { useContext } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { MenuContext } from './MenuProvider'
import MenuList from './MenuList'

const Layout = ({ children }) => {
  const { isShowing } = useContext(MenuContext)
  return (
    <>
      <NavBar />
      {isShowing && <MenuList />}
      {children}
      <Footer />
    </>
  );
}

export default Layout