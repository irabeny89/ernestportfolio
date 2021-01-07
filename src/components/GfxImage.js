import Image from 'next/image'
import React from 'react'

const GfxImage = ({imageProp}) => 
  <div>
    <Image src={imageProp.src} alt={imageProp.alt} width="200" height="300" />
  </div>

export default GfxImage