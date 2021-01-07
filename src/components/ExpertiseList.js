import React from 'react'
import ExpertiseType from './ExpertiseType'

const ExpertiseList = ({ types }) =>
  <ul>
    {types.map(type => 
      <li key={type}><ExpertiseType type={type} /></li>)}
  </ul>

export default ExpertiseList