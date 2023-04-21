import React from 'react'
import { ThemeProvider } from 'styled-components'
import VisualStyles from './Visual.styles'
import { GlobalStyle } from './Global.styles'

interface IProps {
  children: React.ReactNode
}

const VisualTheme = (props: IProps) => {
  const { children } = props
  return (
    <ThemeProvider theme={VisualStyles}>
      <GlobalStyle {...VisualStyles} />
      {children}
    </ThemeProvider>
  )
}
export default VisualTheme
