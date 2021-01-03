import React from 'react'
import Menu from './Menu'
import styles from '../styles/NavBar.module.css'

const NavBar = () => 
  <div className={styles.navbar}>
    <h1>Ernest Irabor Portfolio</h1>
    <Menu />
  </div>

export default NavBar