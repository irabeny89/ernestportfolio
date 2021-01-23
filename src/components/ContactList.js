import React from 'react'
import Contact from './Contact'
import { contact } from '../../data/siteData.json'

const ContactList = () => 
  <ul>
    {contact.map(item => <li key={item.id}><Contact {...item} /></li>)}
  </ul>

export default ContactList