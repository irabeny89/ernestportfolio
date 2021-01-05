import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Footer.module.css'
import { FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { CgMail } from 'react-icons/cg'
import { contact } from '../../data/siteData.json'
import FooterContact from './FooterContact'

const Footer = () =>
  <div className={styles.footer}>
    <div className={styles.copyright}>&copy; 2021</div>
    <div className={styles.contacts}>
      {contact.map(item => <FooterContact key={item.id} {...item} />)}
    </div>
  </div>

export default Footer