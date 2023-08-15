import React from 'react'

import { ContIconEmail } from './IconEmail.styles'
import { FaFacebookMessenger } from 'react-icons/fa'

const IconEmail = () => {
  return (
    <ContIconEmail target="_blank" rel="noopener" href='https://www.facebook.com/a.musicalmix'>
       <FaFacebookMessenger size={25}/>
    </ContIconEmail>
  )
}

export default IconEmail
