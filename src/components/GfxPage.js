import React from 'react'
import GfxImage from './GfxImage'
import { FaTools } from 'react-icons/fa'
import styles from '../../styles/NavPages.module.css'

const GfxPage = ({projects, type, tools}) => 
  <>
    <h3>{type}</h3>
    <h4><FaTools /> Tools used: <span>{tools}</span></h4>
    <div className={styles.navpage}>
      {projects.map(({id, imgSrc, tech}) => 
        <>
          <GfxImage key={id} src={imgSrc} />
          <p>Tech: {tech}</p>
        </>
      )}
    </div>
  </>

export default GfxPage