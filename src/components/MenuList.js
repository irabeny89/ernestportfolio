import React from 'react'
import MenuItem from './MenuItem'
const menulist = ['first', 'second']
const MenuList = _ => {
  return(
    <div>
      <h3>My Works</h3>
      <ul>
        {menulist.map(item => <MenuItem item={item} />)}
      </ul>
      <h3>My Contacts</h3>
      <ul>

      </ul>
    </div>
  )
}
  
export default MenuList