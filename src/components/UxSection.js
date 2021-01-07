import React from 'react'
import UxImage from './UxImage'
import { FaTools } from 'react-icons/fa'
import styles from '../../styles/UxSection.module.css'

const UxSection = ({projects, type, tools}) => 
  <div className={styles.uxSection}>
    <h3>{type}</h3>
    <h4><FaTools /> Tools used: <span>{tools.join(', ')}</span></h4>
    <div className={styles.projects}>
      {projects.map(({id, image, description, tech}) => 
        <div key={id} className={styles.project}>
          <h4>{description}</h4>
          <UxImage imageProp={image} />
          <p>Tool: {tech}</p>
        </div>
      )}
    </div>
  </div>

export default UxSection