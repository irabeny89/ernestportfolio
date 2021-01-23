import React, { useContext } from 'react'
import DevSection from './DevSection'
import GfxSection from './GfxSection'
import { NavMenuContext } from './NavMenuProvider'
import UxSection from './UxSection'

const NavSections = _ => {
  const { isDevClicked, isUxClicked,
    isGfxClicked } = useContext(NavMenuContext)
  return isDevClicked && <DevSection /> ||
    isUxClicked && <UxSection /> ||
    isGfxClicked && <GfxSection />
}

export default NavSections