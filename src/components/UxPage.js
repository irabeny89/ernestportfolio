import React from 'react'
import UxImage from './UxImage'
import { FaTools } from 'react-icons/fa'
import styles from '../../styles/NavPages.module.css'

const UxPage = ({projects, type, tools}) => 
  <>
    <h3>{type}</h3>
    <h4><FaTools /> Tools used: <span>{tools}</span></h4>
    <div className={styles.navpage}>
      {projects.map(({id, imgSrc, description, tech}) => 
        <div key={id}>
          <h3>{description}</h3>
          <UxImage src={imgSrc} />
          <p>Tool: {tech}</p>
        </div>
      )}
    </div>
  </>

export default UxPage