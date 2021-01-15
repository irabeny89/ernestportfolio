import React, { useState, createContext, useRef } from 'react'

export const NavMenuContext = createContext()

const NavMenuProvider = ({ children }) => {
  const devRef = useRef()
  const uxRef = useRef()
  const gfxRef = useRef()
  const [isDevClicked, setIsDevClicked] = useState(true)
  const [isUxClicked, setIsUxClicked] = useState(false)
  const [isGfxClicked, setIsGfxClicked] = useState(false)

  const clickHandler = ref => {
    if (ref.current.id === "dev" || ref.current.id === "_dev") {
      setIsDevClicked(true)
      setIsUxClicked(false)
      setIsGfxClicked(false)
    }
    else if (ref.current.id === "ux" || ref.current.id === "_ux") {
      setIsDevClicked(false)
      setIsUxClicked(true)
      setIsGfxClicked(false)
    }
    else {
      setIsDevClicked(false)
      setIsUxClicked(false)
      setIsGfxClicked(true)
    }
  }
  const navBarProps = {
    devRef, uxRef, gfxRef, clickHandler, isDevClicked, isUxClicked, isGfxClicked
  }

  return (
    <NavMenuContext.Provider value={navBarProps}>
      {children}
    </NavMenuContext.Provider>
  )
}

export default NavMenuProvider