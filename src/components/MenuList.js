import React from 'react'
import ExpertiseList from './ExpertiseList'
import { dev, ux, gfx, contact, cv } from '../../data/siteData.json'
import styles from '../../styles/MenuList.module.css'
import ContactList from './ContactList'
import { FaRegFilePdf } from 'react-icons/fa'

const MenuList = _ => {
  const types = [dev.type, ux.type, gfx.type]
  return (
    <div className={styles.menuList}>
      <h3>Expertise</h3>
      <ExpertiseList types={types} />
      <h3>My Contacts</h3>
      <ContactList contact={contact} />
      <p><a href={cv}><FaRegFilePdf size="25" /> Resume/CV</a></p>
    </div>
  )
}

export default MenuList