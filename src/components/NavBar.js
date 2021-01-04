import React from 'react'
import { FaCogs, FaPaintBrush, FaPencilRuler } from 'react-icons/fa'
import styles from '../../styles/NavBar.module.css'
import NavPages from './NavPages'

const NavBar = _ => 
  <>
    <div className={styles.navbar}>
      <h4><FaCogs /> Dev</h4>
      <h4><FaPencilRuler /> UI/UX</h4>
      <h4><FaPaintBrush /> Gfx</h4>
    </div>
    <NavPages />
  </>

export default NavBar