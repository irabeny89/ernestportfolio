import Image from 'next/image'
import React from 'react'

const UxImage = ({imageProp}) => 
  <div>
    <Image src={imageProp.src} alt={imageProp.alt} width="400" height="250" />
  </div>

export default UxImage