import React from 'react'
import DevImage from './DevImage'
import { FaTools } from 'react-icons/fa'
import styles from '../../styles/DevSection.module.css'

const DevSection = ({ projects, type, tools }) =>
  <div className={styles.devSection}>
    <h3>{type}</h3>
    <h4>
      <FaTools /> Tools used: <span>{tools.join(', ')}</span>
    </h4>
    {projects.map(({ id, image, description, website, tech }) =>
      <div key={id}>
        <h4>{description}</h4>
        <p>Tech: {tech}</p>
        <a href={`${website}`}><DevImage imageProp={image} /></a>
        <p><a href={`${website}`}>{website}</a></p>
      </div>
    )}
  </div>

export default DevSection