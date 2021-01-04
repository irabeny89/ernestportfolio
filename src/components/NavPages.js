import React from 'react'
import {images} from '../../data/siteData.json'
import NavPage from './NavPage'
import styles from '../../styles/NavPages.module.css'
import { FaTools } from 'react-icons/fa'
import { dev, ux, gfx } from '../../data/siteData.json'

const NavPages = _ => 
  <div className={styles.navpages}>
    <h4><FaTools /> Tools used: <span>{dev.tools}</span></h4>
    <div className={styles.navpage}>
      {dev.images.map(({id, src}) => <NavPage key={id} src={src} />)}
    </div>
  </div>

export default NavPages