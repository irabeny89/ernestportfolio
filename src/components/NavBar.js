import React from 'react'
import styles from '../../styles/NavBar.module.css'
import { FaCogs, FaPencilRuler, FaPaintBrush } from 'react-icons/fa'

const NavBar = ({ clickCallback, isDevClicked, isGfxClicked, isUxClicked }) => {

  return (
    <div className={styles.navbar}>
      <h4 id="dev" className={isDevClicked ? styles.active : undefined}
        onClick={clickCallback}>
        <FaCogs /> Dev
      </h4>
      <h4 id="ux" className={isUxClicked ? styles.active : undefined}
        onClick={clickCallback}>
        <FaPencilRuler /> UI/UX
      </h4>
      <h4 id="gfx" className={isGfxClicked ? styles.active : undefined}
        onClick={clickCallback}>
        <FaPaintBrush /> Gfx
      </h4>
    </div>
  )
}
export default NavBar