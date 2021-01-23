import React, { useContext } from 'react'
import { FaCogs, FaPaintBrush } from 'react-icons/fa'
import { FaPencilRuler } from 'react-icons/fa'
import { NavMenuContext } from '../components/NavMenuProvider'
import { MenuContext } from './MenuProvider'

const ExpertiseField = ({ type }) => {
  const { menuBtnProps: { setShowMenu },
    menuListProps: { _devRef, _uxRef, _gfxRef } } = useContext(MenuContext)
  const { devRef, uxRef, gfxRef,
    clickHandler: navBarClick } = useContext(NavMenuContext)
  const clickHandler = ref => {navBarClick(ref); setShowMenu(false)}
  return type === "UI Development Projects" &&
    <a href="#dev">
      <div onClick={_ => clickHandler(devRef)} id="_dev" ref={_devRef}>
        <FaCogs size="25" /> {type}
      </div>
    </a> || type === "UI\/UX Design Projects" &&
    <a href="#ux">
      <div onClick={_ => clickHandler(uxRef)} id="_ux" ref={_uxRef}>
        <FaPencilRuler size="25" /> {type}
      </div>
    </a> || type === "Graphics Design Projects" &&
    <a href="#gfx">
      <div onClick={_ => clickHandler(gfxRef)} id="_gfx" ref={_gfxRef}>
        <FaPaintBrush size="25" /> {type}
      </div>
    </a>
}

export default ExpertiseField