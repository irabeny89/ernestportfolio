import React, { createContext, useState } from 'react'

export const MenuContext = createContext()

const MenuProvider = ({ children }) => {
  const [isShowing, setShowMenu] = useState(false)
  const toggleMenu = _ => setShowMenu(!isShowing)
  return (
    <MenuContext.Provider value={{ isShowing, toggleMenu }}>
      { children}
    </MenuContext.Provider>
  )
}

export default MenuProvider