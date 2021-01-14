import React, { useContext } from 'react'
import NavBar from './NavBar'
import NavSections from './NavSections'
import { NavMenuContext } from '../components/NavMenuProvider'

const Navs = _ => {
  const { pageFlags, clickHandler } = useContext(NavMenuContext)
  return (
    <div>
      <NavBar clickCallback={clickHandler} {...pageFlags} />
      <NavSections {...pageFlags} />
    </div>
  )
}

export default Navs