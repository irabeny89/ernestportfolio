import React from 'react'
import GfxImage from './GfxImage'
import { FaTools } from 'react-icons/fa'
import styles from '../../styles/GfxSection.module.css'

const GfxSection = ({projects, type, tools}) => 
  <div className={styles.gfxSection}>
    <h3>{type}</h3>
    <h4><FaTools /> Tools used: <span>{tools.join(', ')}</span></h4>
    <div className={styles.projects}>
      {projects.map(({id, image, tech}) => 
        <div key={id} className={styles.project}>
          <GfxImage imageProp={image} />
          <p>Tech: {tech}</p>
        </div>
      )}
    </div>
  </div>

export default GfxSection