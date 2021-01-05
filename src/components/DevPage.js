import React from 'react'
import DevImage from './DevImage'
import { FaTools } from 'react-icons/fa'
import styles from '../../styles/NavPages.module.css'

const DevPage = ({projects, type, tools}) => 
  <>
    <h3>{type}</h3>
    <h4><FaTools /> Tools used: <span>{tools}</span></h4>
    <div className={styles.navpage}>
      {projects.map(({id, imgSrc, description, website, tech}) => 
        <div key={id}>
          <h3>{description}</h3>
          <p>Tech: {tech}</p>
          <a href={`${website}`}><DevImage key={id} src={imgSrc} /></a>
          <p><a href={`${website}`}>{website}</a></p>
        </div>
      )}
    </div>
  </>

export default DevPage