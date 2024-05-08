import React from 'react'

import { ContIconPhone } from './IconPhone.styles'
import {FaPhone} from 'react-icons/fa'

const IconPhone = () => {
  return (
    <ContIconPhone href='tel:+5536543265'>
      <FaPhone size={25}/>
    </ContIconPhone>
  )
}

export default IconPhone
