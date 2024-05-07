import React from 'react'

import { IconWatss } from './IconWatssapp.styles'
import { FaWhatsapp } from 'react-icons/fa'

const IconWatsapp = () => {
  return (
    <IconWatss target="_blank" rel="noopener" href='https://wa.me/525536543265?text=Hola+me+puedes+dar+informacion+sobre+los+costos+y+paquetes+de+ambientacion+del+grupo+musical'>
        <FaWhatsapp size={25}/>
    </IconWatss>
  )
}

export default IconWatsapp
