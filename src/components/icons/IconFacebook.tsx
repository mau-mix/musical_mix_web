import React from 'react'
import { IconFace } from './IconFacebook.styles'
import { FaFacebook } from 'react-icons/fa'

const IconFacebok = () => {
  return (
    <IconFace target="_blank" rel="noopener" href='https://www.facebook.com/a.musicalmix'>
      <FaFacebook size={25}/>
    </IconFace >
  )
}

export default IconFacebok
