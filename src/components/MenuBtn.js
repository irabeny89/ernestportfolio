import React, { useContext } from 'react'
import { CgMenuHotdog } from 'react-icons/cg'
import { MenuContext } from './MenuProvider'

const MenuBtn = _ => {
  const { toggleMenu } = useContext(MenuContext)
  return (
    <div onClick={toggleMenu}><CgMenuHotdog size="4rem" /></div>
  )
}

export default MenuBtn