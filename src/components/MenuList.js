import React from 'react'
import MenuItem from './MenuItem'
import { myWork } from '../../data/siteData.json'
console.log(myWork)
const MenuList = _ => {
  return(
    <div>
      <h3>My Works</h3>
      <ul>
        {myWork.map(item => <MenuItem item={item} />)}
      </ul>
      <h3>My Contacts</h3>
      <ul>

      </ul>
    </div>
  )
}
  
export default MenuList