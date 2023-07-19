import styled from 'styled-components'
import { breakpoints } from '../../../../../ui'



export const CardProp = styled.div`
  background-color: ${({ theme }) => theme.colors.secundary};
  min-width: 100%;
  max-height: 23rem;
  border: solid 1px gray;
  border-radius: 10px;
  transition: background-color .5s ease;
    @media(min-width: ${breakpoints.md}px) {
      min-width: 50%;
      min-height: 20rem;
      
  }
  @media(min-width: ${breakpoints.lg}px) {
      min-width: 30%;
        
  }
      :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    box-shadow: 0  5px 10px 2px #000000;
    & div {
      background-color: ${({ theme }) => theme.colors.white};
    }
}
`
export const Title = styled.h1`
  text-align: center;
  font-family: ${({theme}) => theme.font.family};
  font-size: ${({theme}) => theme.font.size.normal};
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  @media(min-width: ${breakpoints.xl}px) {
    font-size: ${({theme}) => theme.font.size.subtitle};
  }
`
export const Text = styled.p`
  text-align: center;
  font-size: ${({theme}) => theme.font.size.small};
  font-family: ${({theme}) => theme.font.family};
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  @media(min-width: ${breakpoints.md}px) {
    font-size: ${({theme}) => theme.font.size.normal};
  }
`
export const ContainerImage = styled.div`
 border: solid 1px gray;
 
`


