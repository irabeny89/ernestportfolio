import React, { useState } from 'react'
import NavBar from './NavBar'
import NavSections from './NavSections'

const Navs = _ => {
  const [isDevClicked, setIsDevClicked] = useState(true)
  const [isUxClicked, setIsUxClicked] = useState(false)
  const [isGfxClicked, setIsGfxClicked] = useState(false)
  const pageFlags = { isDevClicked, isUxClicked, isGfxClicked }

  const clickHandler = e => {
    if (e.target.id === "dev") {
      setIsDevClicked(true)
      setIsUxClicked(false)
      setIsGfxClicked(false)
    }
    if (e.target.id === "ux") {
      setIsDevClicked(false)
      setIsUxClicked(true)
      setIsGfxClicked(false)
    }
    if (e.target.id === "gfx") {
      setIsDevClicked(false)
      setIsUxClicked(false)
      setIsGfxClicked(true)
    }
  }

  return (
    <>
      <NavBar clickCallback={clickHandler} {...pageFlags} />
      <NavSections {...pageFlags} />
    </>
  )
}

export default Navs