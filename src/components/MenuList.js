import React from 'react'
import MenuItem from './MenuItem'
import ExpertiseFields from './ExpertiseFields'
import { dev, ux, gfx, contact, expertise } from '../../data/siteData.json'
import styles from '../../styles/MenuList.module.css'

const MenuList = _ => {
  return (
    <div className={styles.menuList}>
      <h3>Expertise</h3>
      <ExpertiseFields expertise={expertise} />
      <h3>My Contacts</h3>
      </div>
      )
    }
    
    export default MenuList
    // <ul>
    //   {contact.map(item => <MenuItem key={item.id} {...item} />)}
    // </ul>