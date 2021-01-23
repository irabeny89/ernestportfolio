import React from 'react'
import ExpertiseList from './ExpertiseList'
import { cv } from '../../data/siteData.json'
import styles from '../../styles/MenuList.module.css'
import ContactList from './ContactList'
import { FaRegFilePdf } from 'react-icons/fa'

const MenuList = _ => 
  <div className={styles.menuList}>
    <h3>Expertise</h3>
    <ExpertiseList />
    <h3>My Contacts</h3>
    <ContactList />
    <p><a href={cv.url}><FaRegFilePdf size="25" /> Resume/CV</a></p>
  </div>

export default MenuList