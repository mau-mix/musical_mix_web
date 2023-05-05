import React from 'react'
import { Container, Wrapp } from './Footer.styles'
import IconWatsapp from '../icons/IconWatsapp'
import IconFacebok from '../icons/IconFacebook'
import IconInstagram from '../icons/IconInstagram'
import Mark from './mark/Mark'
import { Logo } from '../logo'

const Footer = () => {
  return (
    <Wrapp>
      <Logo />
      <Container>
        <Mark />
        <IconFacebok/>
        <IconWatsapp />
        <IconInstagram />
        <Mark />
      </Container>
    </Wrapp>
  )
}

export default Footer
