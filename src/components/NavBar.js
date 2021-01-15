import React, { useContext } from 'react'
import styles from '../../styles/NavBar.module.css'
import { FaCogs, FaPencilRuler, FaPaintBrush } from 'react-icons/fa'
import { NavMenuContext } from './NavMenuProvider'

const NavBar = _ => {
  const { devRef, uxRef, gfxRef, clickHandler,
    isDevClicked, isUxClicked, isGfxClicked } = useContext(NavMenuContext)
  return (
    <div className={styles.navbar}>
      <div ref={devRef} id="dev"
        className={isDevClicked ? styles.active : undefined}
        onClick={_ => clickHandler(devRef)}>
        <FaCogs /><h4>Dev</h4>
      </div>
      <div ref={uxRef} id="ux"
        className={isUxClicked ? styles.active : undefined}
        onClick={_ => clickHandler(uxRef)}>
        <FaPencilRuler /><h4>UI/UX</h4>
      </div>
      <div ref={gfxRef} id="gfx"
        className={isGfxClicked ? styles.active : undefined}
        onClick={_ => clickHandler(gfxRef)}>
        <FaPaintBrush /><h4>Gfx</h4>
      </div>
    </div>
  )
}

export default NavBar