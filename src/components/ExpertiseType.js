import React, { useContext } from 'react'
import { FaCogs, FaPaintBrush } from 'react-icons/fa'
import { FaPencilRuler } from 'react-icons/fa'
import { NavMenuContext } from '../components/NavMenuProvider'
import { MenuContext } from './MenuProvider'

const ExpertiseField = ({ type }) => {
  const { setShowMenu } = useContext(MenuContext)
  const { devRef, uxRef, gfxRef,
    clickHandler: navBarClick } = useContext(NavMenuContext)
  const clickHandler = ref => {navBarClick(ref); setShowMenu(false)}
  return type === "UI Development" &&
    <a href="#dev">
      <div onClick={_ => clickHandler(devRef)} id="dev" ref={devRef}>
        <FaCogs size="25" /> {type}
      </div>
    </a> || type === "UI\/UX Design" &&
    <a href="#ux">
      <div onClick={_ => clickHandler(uxRef)} id="ux" ref={uxRef}>
        <FaPencilRuler size="25" /> {type}
      </div>
    </a> || type === "Graphics Design" &&
    <a href="#gfx">
      <div onClick={_ => clickHandler(gfxRef)} id="gfx" ref={gfxRef}>
        <FaPaintBrush size="25" /> {type}
      </div>
    </a>
}

export default ExpertiseField