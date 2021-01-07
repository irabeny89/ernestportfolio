import React from 'react'
import { FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { CgMail } from 'react-icons/cg'

const FooterContact = ({ type, line }) => 
  type.toLowerCase().includes("phone") &&
    <a href={`tel:${line}`}><FaPhone size="25" /></a> ||
  type.toLowerCase().includes("whatsapp") &&
    <a href={`tel:${line}`}><FaWhatsapp size="25" /></a> ||
  type.toLowerCase().includes("email") &&
    <a href={`mailto:${line}`}><CgMail size="25" /></a> ||
  type.toLowerCase().includes("linkedin") &&
    <a href={line}><FaLinkedin size="25" /></a> ||
  type.toLowerCase().includes("github") &&
    <a href={line}><FaGithub size="25" /></a>

export default FooterContact