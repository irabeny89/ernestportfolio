import React from 'react'
import { dev, ux, gfx } from '../../data/siteData.json'
import DevSection from './DevSection'
import GfxSection from './GfxSection'
import UxSection from './UxSection'

const NavSections = ({isDevClicked, isUxClicked, isGfxClicked}) => 
  isDevClicked && <DevSection {...dev} /> || 
  isUxClicked && <UxSection {...ux} /> ||
  isGfxClicked && <GfxSection {...gfx} />

export default NavSections