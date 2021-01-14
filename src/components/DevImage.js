import Image from 'next/image'
import React from 'react'

const DevImage = ({imageProp}) => 
  <>
    <Image src={imageProp.src} alt={imageProp.alt} width="180" height="300" />
  </>

export default DevImage