import React from 'react'
import Field from './Field'

const Expertise = ({ expertise }) =>
  <div>
    {expertise.map(field => <div key={field.id}><Field {...field} /></div>)}
  </div>

export default Expertise