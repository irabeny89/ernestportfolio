import React from 'react'
import Field from './Field'
import { expertise } from '../../data/siteData.json'

const Expertise = () =>
  <ol>
    {expertise.map(field => <li key={field.id}><Field {...field} /></li>)}
  </ol>

export default Expertise