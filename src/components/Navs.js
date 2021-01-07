import React, { useContext } from 'react'
import NavBar from './NavBar'
import NavSections from './NavSections'
import { NavMenuContext } from '../components/NavMenuProvider'

const Navs = _ => {
  const { pageFlags, clickHandler } = useContext(NavMenuContext)
  return (
    <>
      <NavBar clickCallback={clickHandler} {...pageFlags} />
      <NavSections {...pageFlags} />
    </>
  )
}

export default Navs