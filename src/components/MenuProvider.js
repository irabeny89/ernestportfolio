import React, { createContext, useState, useRef } from 'react'

export const MenuContext = createContext()

const MenuProvider = ({ children }) => {
  const _devRef = useRef()
  const _uxRef = useRef()
  const _gfxRef = useRef()
  const [isShowing, setShowMenu] = useState(false)
  const toggleMenu = _ => setShowMenu(!isShowing)
  const menuBtnProps = { isShowing, setShowMenu, toggleMenu }
  const menuListProps = { _devRef, _uxRef, _gfxRef }
  return (
    <MenuContext.Provider value={{ menuBtnProps, menuListProps }}>
      { children}
    </MenuContext.Provider>
  )
}

export default MenuProvider