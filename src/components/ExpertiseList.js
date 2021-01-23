import React from 'react'
import ExpertiseType from './ExpertiseType'
import { dev, ux, gfx, contact, cv } from '../../data/siteData.json'

const ExpertiseList = () => {
  const types = [dev.type, ux.type, gfx.type]
  return(
    <ul>
      {types.map(type => 
        <li key={type}><ExpertiseType type={type} /></li>)}
    </ul>
  )
}

export default ExpertiseList