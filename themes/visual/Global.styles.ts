import { createGlobalStyle } from 'styled-components'
import type { ITheme } from '../../themes/index'

export const GlobalStyle = createGlobalStyle<ITheme>`
  body {
    font-family: ${(theme: ITheme) => theme.font.family};
   
    font-weight: 400;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: visible;
    animation: fadein 2s;
    color: ${(theme: ITheme) => theme.colors.dark};
    background-color: ${(theme: ITheme) => theme.colors.background};
    margin: ${(theme: ITheme) => theme.layout.margin};
    padding: ${(theme: ITheme) => theme.layout.padding};
  }
  ::selection {
    color: ${(theme: ITheme) => theme.colors.white};
    background: ${(theme: ITheme) => theme.colors.primary};
    text-shadow: none;
  }
  a {
    &:link, &:visited {
      text-decoration: none;
      color: ${(theme: ITheme) => theme.colors.primary};
    }
  }

  blockquote {
    border: 5px solid ${(theme: ITheme) => theme.colors.dark};
    margin: 2.5em 0;
    padding: 1em 1.1em 1em 1.3em;
    position: relative;
    font-style: italic;
    &::before {
      top: -5px;
      left: 50%;
      width: 94%;
      height: 5px;
      content: "";
      position: absolute;
      background: ${(theme: ITheme) => theme.colors.background};
      margin-left: -47%;
    }
    &::after {
      top: -5px;
      left: 50%;
      width: 94%;
      height: 5px;
      content: "";
      position: absolute;
      background: ${(theme: ITheme) => theme.colors.background};
      margin-left: -47%;
      bottom: -5px;
    }
    p {
      margin: 0;
      
    }
  }
`