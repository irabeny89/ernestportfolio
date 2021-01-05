import React, { useState } from 'react'
import { FaCogs, FaPaintBrush, FaPencilRuler } from 'react-icons/fa'
import styles from '../../styles/NavBar.module.css'
import NavPages from './NavPages'

const NavBar = _ => {
  const [isDevClicked, setIsDevClicked] = useState(true)
  const [isUxClicked, setIsUxClicked] = useState(false)
  const [isGfxClicked, setIsGfxClicked] = useState(false)
  const pageFlags = { isDevClicked, isUxClicked, isGfxClicked }

  const clickHandler = e => {
    if (e.target.id === "dev") {
      setIsDevClicked(true)
      setIsUxClicked(false)
      setIsGfxClicked(false)
    }
    if (e.target.id === "ux") {
      setIsDevClicked(false)
      setIsUxClicked(true)
      setIsGfxClicked(false)
    }
    if (e.target.id === "gfx") {
      setIsDevClicked(false)
      setIsUxClicked(false)
      setIsGfxClicked(true)
    }
  }

  return (
    <>
      <div className={styles.navbar}>
        <h4 id="dev" className={isDevClicked ? styles.active : undefined}
          onClick={clickHandler}>
          <FaCogs /> Dev
        </h4>
        <h4 id="ux" className={isUxClicked ? styles.active : undefined}
          onClick={clickHandler}>
          <FaPencilRuler /> UI/UX
        </h4>
        <h4 id="gfx" className={isGfxClicked ? styles.active : undefined}
          onClick={clickHandler}>
          <FaPaintBrush /> Gfx
        </h4>
      </div>
      <NavPages {...pageFlags} />
    </>
  )
}

export default NavBar