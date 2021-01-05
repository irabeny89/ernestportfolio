import React from 'react'
import styles from '../../styles/NavPages.module.css'
import { dev, ux, gfx } from '../../data/siteData.json'
import DevPage from './DevPage'
import UxPage from './UxPage'
import GfxPage from './GfxPage'

const NavPages = ({isDevClicked, isUxClicked, isGfxClicked}) => {
  return (
    isDevClicked && 
    <div className={styles.navpages}>
      <DevPage {...dev} />
    </div>
    || 
    isUxClicked && 
    <div className={styles.navpages}>
      <UxPage {...ux} />
    </div>
    ||
    isGfxClicked && 
    <div className={styles.navpages}>
      <GfxPage {...gfx} />
    </div>
  )
}
export default NavPages