import React from 'react'
import DevPage from './DevPage'
import UxPage from './UxPage'
import GfxPage from './GfxPage'
import styles from '../../styles/NavPages.module.css'
import { FaTools } from 'react-icons/fa'
import { dev, ux, gfx } from '../../data/siteData.json'

const NavPages = ({isDevClicked, isUxClicked, isGfxClicked}) => {
  console.log(isDevClicked, isUxClicked, isGfxClicked)
  return (
    isDevClicked && 
    <div className={styles.navpages}>
      <h3>{dev.type}</h3>
      <h4><FaTools /> Tools used: <span>{dev.tools}</span></h4>
      <div className={styles.navpage}>
        {dev.images.map(({id, src}) => <DevPage key={id} src={src} />)}
      </div>
    </div>
    || 
    isUxClicked && 
    <div className={styles.navpages}>
      <h3>{ux.type}</h3>
      <h4><FaTools /> Tools used: <span>{ux.tools}</span></h4>
      <div className={styles.navpage}>
        {ux.images.map(({id, src}) => <UxPage key={id} src={src} />)}
      </div>
    </div>
    ||
    isGfxClicked && 
    <div className={styles.navpages}>
      <h3>{gfx.type}</h3>
      <h4><FaTools /> Tools used: <span>{gfx.tools}</span></h4>
      <div className={styles.navpage}>
        {gfx.images.map(({id, src}) => <GfxPage key={id} src={src} />)}
      </div>
    </div>
  )
}
export default NavPages