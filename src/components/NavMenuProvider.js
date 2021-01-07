import React, { useState, createContext } from 'react'

export const NavMenuContext = createContext()

const NavMenuProvider = ({ children }) => {
  const [isDevClicked, setIsDevClicked] = useState(true)
  const [isUxClicked, setIsUxClicked] = useState(false)
  const [isGfxClicked, setIsGfxClicked] = useState(false)
  const pageFlags = { isDevClicked, isUxClicked, isGfxClicked }

  const clickHandler = e => {
    if (e.target.id === "dev" || e.target.id === "dev2") {
      setIsDevClicked(true)
      setIsUxClicked(false)
      setIsGfxClicked(false)
    }
    if (e.target.id === "ux" || e.target.id === "ux2") {
      setIsDevClicked(false)
      setIsUxClicked(true)
      setIsGfxClicked(false)
    }
    if (e.target.id === "gfx" || e.target.id === "gfx2") {
      setIsDevClicked(false)
      setIsUxClicked(false)
      setIsGfxClicked(true)
    }
  }
  return (
    <NavMenuContext.Provider value={{ clickHandler, pageFlags }}>
      {children}
    </NavMenuContext.Provider>
  )
}

export default NavMenuProvider