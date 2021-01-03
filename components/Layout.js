import React, { useContext } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { MenuContext } from './MenuProvider'

const Layout = ({ children }) => {
  const { isShowing } = useContext(MenuContext)
  console.log(isShowing)
  return (
    <>
      <NavBar />
      {isShowing && <div>menu list</div>}
      {children}
      <Footer />
    </>
  );
}

export default Layout