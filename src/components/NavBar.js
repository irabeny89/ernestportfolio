import React from 'react'
import MenuBtn from './MenuBtn'
import styles from '../../styles/NavBar.module.css'

const NavBar = () => 
  <div className={styles.navbar}>
    <h1>Ernest Irabor Portfolio</h1>
    <MenuBtn />
  </div>

export default NavBar