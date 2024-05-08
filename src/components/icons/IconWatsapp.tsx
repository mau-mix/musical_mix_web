import React from 'react'

import { IconWatss } from './IconWatssapp.styles'
import { FaWhatsapp } from 'react-icons/fa'

const IconWatsapp = () => {
  return (
    <IconWatss target="_blank" rel="noopener" href='https://wa.me/525536543265?text=¡Hola!+¿me+puedes+dar+información+sobre+los+costos+y+paquetes+de+ambientación+del+grupo+musical?'>
        <FaWhatsapp size={25}/>
    </IconWatss>
  )
}

export default IconWatsapp
