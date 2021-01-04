import React from 'react'
import { CgMail } from 'react-icons/cg'
import {
  FaCogs, FaGithub, FaLinkedin, FaPaintBrush, FaPencilRuler, FaPhone
} from 'react-icons/fa'

const MenuItem = ({ type }) => {
  if (type === "Development") return (
    <li><FaCogs size={25} /> {type}</li>
  )
  if (type === "UX Design") return (
    <li><FaPencilRuler size={25} /> {type}</li>
  )
  if (type === "Graphics Design") return (
    <li><FaPaintBrush size={25} /> {type}</li>
  )
  if (type === "Phone & Whatsapp") return (
    <li><FaPhone size={25} /> {type}</li>
  )
  if (type === "Email") return (
    <li><CgMail size={25} /> {type}</li>
  )
  if (type === "Linkedin") return (
    <li><FaLinkedin size={25} /> {type}</li>
  )
  if (type === "Github") return (
    <li><FaGithub size={25} /> {type}</li>
  )
}

export default MenuItem