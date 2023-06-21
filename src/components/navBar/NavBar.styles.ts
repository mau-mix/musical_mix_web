import styled from 'styled-components'
import Link from 'next/link'

interface IActive {
  active: boolean
}

export const Container = styled.div`
 background-color: black;
 padding: 1rem 1rem 1rem 1rem;
 display: flex;
 justify-content: space-between;
`

export const NavBarStyled = styled.nav`
  padding: .2rem;
  margin-top: 1rem;
`
export const LinkStyled = styled(Link)`
font-size: ${({theme}) => theme.font.size.normal};
text-decoration: none;
margin: 10px 0px;
padding: 5px;

`
export const RedLink = styled.a`
  margin: 2rem 1rem;
  font-size: ${({theme}) => theme.font.size.normal};
  font-family: ${({theme}) => theme.font.family};
  letter-spacing: 1px;
  position: relative;
  padding: .2rem 1rem;
  z-index: 99;
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