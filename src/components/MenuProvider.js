import React, { createContext, useState } from 'react'

export const MenuContext = createContext()

const MenuProvider = ({ children }) => {
  const [isShowing, setShowMenu] = useState(false)
  const toggleMenu = _ => setShowMenu(!isShowing)
  const menuBtnProps = { isShowing, setShowMenu, toggleMenu }
  return (
    <MenuContext.Provider value={menuBtnProps}>
      { children}
    </MenuContext.Provider>
  )
}

export default MenuProvider