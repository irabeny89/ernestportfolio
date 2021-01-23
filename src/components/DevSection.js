import React from 'react'
import DevImage from './DevImage'
import { FaTools } from 'react-icons/fa'
import styles from '../../styles/DevSection.module.css'
import { dev } from '../../data/siteData.json'

const DevSection = () => {
  const { projects, type, tools } = dev
  return (
    <div className={styles.devSection}>
      <h3>{type}</h3>
      <h4>
        <FaTools /> Tools used: <span>{tools.join(', ')}</span>
      </h4>
      {projects.map(({
        id, image, title, website, tech, description: { p1, p2 }
      }) =>
        <div key={id}>
          <h4>{title}</h4>
          <p>{p1}</p>
          <p>Tech: {tech}</p>
          <a href={`${website}`}><DevImage imageProp={image} /></a>
          <p><a href={`${website}`}>{website}</a></p>
          <p>{p2}</p>
        </div>
      )}
    </div>
  )
}

export default DevSection