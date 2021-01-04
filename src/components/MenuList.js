import React from 'react'
import ListItem from './ListItem'
import { dev, ux, gfx, contact } from '../../data/siteData.json'
import styles from '../../styles/MenuList.module.css'

const MenuList = _ => {
  const types = [dev.type, ux.type, gfx.type]
  return (
    <div className={styles.menuList}>
      <h3>Expertise</h3>
      <ul>
        {types.map((type) => <ListItem key={type} type={type} />)}
      </ul>
      <h3>My Contacts</h3>
      <ul>
        {contact.map(({ id, type }) => <ListItem key={id} type={type} />)}
      </ul>
    </div>
  )
}

export default MenuList