import React from 'react'
import Field from './Field'

const Expertise = ({ expertise }) =>
  <ol>
    {expertise.map(field => <li key={field.id}><Field {...field} /></li>)}
  </ol>

export default Expertise