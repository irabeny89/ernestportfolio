import React from 'react'
import styles from '../../styles/Footer.module.css'
import { contact, cv } from '../../data/siteData.json'
import FooterContact from './FooterContact'
import { FaRegFilePdf } from 'react-icons/fa'

const Footer = () =>
  <div className={styles.footer}>
    <div className={styles.copyright}>&copy; 2021</div>
    <div className={styles.contacts}>
      <a href={cv.url}><FaRegFilePdf size="25" /></a>
      {contact.map(item => <FooterContact key={item.id} {...item} />)}
    </div>
  </div>

export default Footer