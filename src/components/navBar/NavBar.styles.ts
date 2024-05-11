import styled from 'styled-components'
import { breakpoints } from '../../../ui'
import Link from 'next/link'


export const Container = styled.div`
  background-color:  black;
  width: 95%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  @media (min-width: ${breakpoints.md}px) {
      width: 98%;
  }
`

export const NavBarStyled = styled.nav`
    display: none;
    @media (min-width: ${breakpoints.md}px) {
      display: inherit;
  }
`
export const LinkStyled = styled(Link)`
font-size: ${({theme}) => theme.font.size.normal};
text-decoration: none;
margin: 10px 0px;
padding: 5px;

`
export const RedLink = styled.a`
  font-size: 1.2rem;
  font-family: ${({theme}) => theme.font.family};
  letter-spacing: 1px;
  position: relative;
  padding: .5rem;
  z-index: 99;
  @media (min-width: ${breakpoints.md}px) {
      margin: 1rem;
  }
  &:before {
    content: " ";
    position: absolute;
    border-radius: 10px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #292929;
    transform: scaleX(0);
    transition: 0.5s;
    opacity: 0;
    z-index: -1;
   
  }

  :hover {
    
    transition: 0.8s;
    &:before {
      opacity: 1;
      transform:scaleX(1);
      transition: 0.5s;
       border-bottom: red 1px solid;
    }
  
  }
`