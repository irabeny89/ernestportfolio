import React from 'react'
import { CgMail } from 'react-icons/cg'
import {
  FaCogs, FaGithub, FaLinkedin, FaPaintBrush, FaPencilRuler, FaPhone
} from 'react-icons/fa'

const MenuItem = ({ type, line }) => {
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
    <li>
      <a href={`tel:${line}`}><FaPhone size={25} /> {type}<div>{line}</div></a>
    </li>
  )
  if (type === "Email") return (
    <li>
      <a href={`mailto:${line}`}>
        <CgMail size={25} /> {type}<div>{line}</div>
      </a>
    </li>
  )
  if (type === "Linkedin") return (
    <li><a href={line}><FaLinkedin size={25} /> {type}<div>{line}</div></a></li>
  )
  if (type === "Github") return (
    <li><a href={line}><FaGithub size={25} /> {type}<div>{line}</div></a></li>
  )
}

export default MenuItem