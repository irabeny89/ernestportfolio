import Image from 'next/image'
import React from 'react'
import { FaTools } from 'react-icons/fa'
import styles from '../../styles/NavPage.module.css'

const NavPage = ({src="/favicon.ico"}) => 
  <div className={styles.navpage}>
    <Image src={src} width="200" height="400" layout="intrinsic" />
  </div>

export default NavPage