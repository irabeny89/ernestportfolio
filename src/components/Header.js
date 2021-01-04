import React from 'react'
import MenuBtn from './MenuBtn'
import styles from '../../styles/Header.module.css'

const Header = () => 
  <div className={styles.header}>
    <h1>Ernest Irabor Portfolio</h1>
    <MenuBtn />
  </div>

export default Header