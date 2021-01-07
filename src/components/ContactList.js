import React from 'react'
import Contact from './Contact'

const ContactList = ({ contact }) => 
  <ul>
    {contact.map(item => <li key={item.id}><Contact {...item} /></li>)}
  </ul>

export default ContactList