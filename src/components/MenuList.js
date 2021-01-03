import React from 'react'
import ListItem from './ListItem'
import { expertise, contact } from '../../data/siteData.json'
import styles from '../../styles/MenuList.module.css'

const MenuList = _ => {
  return (
    <div className={styles.menuList}>
      <h3>Expertise</h3>
      <ul>
        {expertise.map(({id, type}) => <ListItem key={id} type={type} />)}
      </ul>
      <h3>My Contacts</h3>
      <ul>
        {contact.map(({id, type}) => <ListItem key={id} type={type} />)}
      </ul>
    </div>
  )
}

export default MenuList