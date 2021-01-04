import React, { useState } from 'react'
import { FaCogs, FaPaintBrush, FaPencilRuler } from 'react-icons/fa'
import styles from '../../styles/NavBar.module.css'
import NavPages from './NavPages'

const NavBar = _ => {
  const [isDevClicked, setIsDevClicked] = useState("dev")
  const [isUxClicked, setIsUxClicked] = useState("")
  const [isGfxClicked, setIsGfxClicked] = useState("")
  const clickHandler = _ => { }
  return (
    <>
      <div className={styles.navbar}>
        <h4 className={isDevClicked && styles.active} onClick={clickHandler}>
          <FaCogs /> Dev
        </h4>
        <h4 className={isUxClicked && styles.active} onClick={clickHandler}>
          <FaPencilRuler /> UI/UX
        </h4>
        <h4 className={isGfxClicked && styles.active} onClick={clickHandler}>
          <FaPaintBrush /> Gfx
        </h4>
      </div>
      <NavPages />
    </>
  )
}

export default NavBar