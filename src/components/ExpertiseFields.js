import React from 'react'
import ExpertiseField from './ExpertiseField'

const ExpertiseFields = ({ expertise }) =>
  <div>
    <ul>
      {expertise.map(field => 
        <li key={field.id}><ExpertiseField field={field.field} /></li>)}
    </ul>
  </div>

export default ExpertiseFields