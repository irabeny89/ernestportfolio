import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Footer.module.css'
import { FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { CgMail } from 'react-icons/cg'

const Footer = () =>
  <div className={styles.footer}>
    <div className={styles.copyright}>&copy; 2021</div>
    <div className={styles.contacts}>
      <FaPhone size="20" />
      <FaWhatsapp size="20" />
      <CgMail size="20" />
      <FaLinkedin size="20" />
      <FaGithub size="20" />
    </div>
  </div>

export default Footer