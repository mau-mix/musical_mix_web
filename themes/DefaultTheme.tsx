import * as React from 'react'
import { useEffect } from 'react'
import { Theme } from './visual'
// Addressed to: Mi yo del futuro.
// No olvides añadir en esta parte la lógica para
// manejar la selección del tema
interface IProps {
  children: React.ReactNode
}
function DefaultTheme(props: IProps) {
  const params = { google: { families: ['Open Sans:300,400,700'] } }
  useEffect(() => {
    const WebFontLoader = require('webfontloader')
    WebFontLoader.load(params)
  }, [])
  const { children } = props
  return <Theme>{children}</Theme>
}

export default DefaultTheme

