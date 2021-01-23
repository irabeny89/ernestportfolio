import React from 'react'
import ExpertiseType from './ExpertiseType'
import { dev, ux, gfx, contact, cv } from '../../data/siteData.json'

const ExpertiseList = () => {
  const types = [dev.type, ux.type, gfx.type]
  const modTypes = types.map(type => type.slice(0,type.indexOf("Projects")-1))
  return(
    <ul>
      {modTypes.map(type => 
        <li key={type}><ExpertiseType type={type} /></li>)}
    </ul>
  )
}

export default ExpertiseList