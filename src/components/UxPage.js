import Image from 'next/image'
import React from 'react'
import styles from '../../styles/NavPage.module.css'

const UxPage = ({src="/favicon.ico"}) => 
  <div className={styles.navpage}>
    <Image src={src} width="400" height="250" />
  </div>

export default UxPage