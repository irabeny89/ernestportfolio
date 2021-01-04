import Image from 'next/image'
import React from 'react'
import styles from '../../styles/NavPage.module.css'

const GfxPage = ({src="/favicon.ico"}) => 
  <div className={styles.navpage}>
    <Image src={src} width="200" height="300" />
  </div>

export default GfxPage