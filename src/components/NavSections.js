import React, { useContext } from 'react'
import { dev, ux, gfx } from '../../data/siteData.json'
import DevSection from './DevSection'
import GfxSection from './GfxSection'
import { NavMenuContext } from './NavMenuProvider'
import UxSection from './UxSection'

const NavSections = _ => {
  const { isDevClicked, isUxClicked,
    isGfxClicked } = useContext(NavMenuContext)
  return isDevClicked && <DevSection /> ||
    isUxClicked && <UxSection {...ux} /> ||
    isGfxClicked && <GfxSection {...gfx} />
}

export default NavSections