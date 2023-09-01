// Este archivo define las interfaces con las que
// debe cumplir un tema, de esa forma se podrán
// crear diversos temas del sitio siempre y cuando
// se respeten los tipos definidos aquí.
//
// NOTA: Es posible cambiar/añadir/eliminar interfaces
// solo debemos justificar el cambio y comentarlo con el equipo
export interface ISize {
  title: string
  subtitle: string
  small: string
  normal: string
  normalSmall: string
  large: string
}

export interface IWeight {
  bold: number
  light: number
  regular: number
}

export interface IFontColors {
  blue: string
  green: string
  orange: string
  purple: string
  quote: string
  text: string
  white: string
  red: string
}

export interface IFont {
  family: string
  size: ISize
  weight: IWeight
  colors: IFontColors
}
export interface IColors {
  primary: string
  secondary: string
  primaryBold: string
  background: string
  white: string
  dark: string
  gray: string
  lightGray: string
  superLightGray: string
  contrast: string
  brown: string;
}

export interface ILayout {
  padding: number
  margin: number
}

export default interface ITheme {
  font: IFont
  colors: IColors
  layout: ILayout
}
