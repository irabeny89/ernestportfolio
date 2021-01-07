import React, { useContext } from 'react'
import { FaCogs, FaPaintBrush } from 'react-icons/fa'
import { FaPencilRuler } from 'react-icons/fa'
import { NavMenuContext } from '../components/NavMenuProvider'

const ExpertiseField = ({ type }) => {
  const { clickHandler } = useContext(NavMenuContext)
  return (
    type === "UI Development" &&
    <a href="#dev"><div onClick={clickHandler} id="dev2"><FaCogs size="25" /> {type}</div></a>
    || type === "UI\/UX Design" &&
    <a href="#ux"><div onClick={clickHandler} id="ux2"><FaPencilRuler size="25" /> {type}</div></a>
    || type === "Graphics Design" &&
    <a href="#gfx"><div onClick={clickHandler} id="gfx2"><FaPaintBrush size="25" /> {type}</div></a>
  )
}

export default ExpertiseField