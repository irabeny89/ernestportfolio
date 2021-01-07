import Image from 'next/image'
import React from 'react'

const DevImage = ({imageProp}) => 
  <div>
    <Image src={imageProp.src} alt={imageProp.alt} width="180" height="300" />
  </div>

export default DevImage