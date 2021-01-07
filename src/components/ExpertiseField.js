import React from 'react'
import { FaCogs, FaPaintBrush } from 'react-icons/fa'
import { FaPencilRuler } from 'react-icons/fa'

const ExpertiseField = ({ field }) => 
  field === "Frontend" &&
  <><FaCogs size="25" /> {field}</>
  || field === "Backend" &&
  <><FaPencilRuler size="25" /> {field}</>
  || field === "Graphics Design" &&
  <><FaPaintBrush size="25" /> {field}</>

export default ExpertiseField
// <li><FaCogs size={25} /> {type}</li>