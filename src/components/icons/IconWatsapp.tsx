import React from 'react'

import { IconWatss } from './IconWatssapp.styles'
import { FaWhatsapp } from 'react-icons/fa'

const IconWatsapp = () => {
  return (
    <IconWatss target="_blank" rel="noopener" href='https://wa.me/525536543265?text=Hola+gracias+por+comunicarte+a+Musical+mix+a+la+brevedad+me+comunicare+contigo+para+brindarte+la+informacion+detallada+de+nuestros+paquetes+de+ambientacion'>
        <FaWhatsapp size={25}/>
    </IconWatss>
  )
}

export default IconWatsapp
