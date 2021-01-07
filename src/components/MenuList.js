import React from 'react'
import ExpertiseList from './ExpertiseList'
import { dev, ux, gfx, contact } from '../../data/siteData.json'
import styles from '../../styles/MenuList.module.css'

const MenuList = _ => {
  const types = [dev.type, ux.type, gfx.type]
  return (
    <div className={styles.menuList}>
      <h3>Expertise</h3>
      <ExpertiseList types={types} />
      <h3>My Contacts</h3>
    </div>
  )
}

export default MenuList