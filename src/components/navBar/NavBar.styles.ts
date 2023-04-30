import styled from 'styled-components'
import Link from 'next/link'

interface IActive {
  active: boolean
}

export const Container = styled.div`
 background-color:${({ theme }) => theme.colors.dark};
 padding: 2rem;
 display: flex;
 justify-content: space-between;
`

export const NavBarStyled = styled.nav`
  padding: .2rem;
`
export const LinkStyled = styled(Link)`
font-size: 15px;
text-decoration: none;
margin: 10px 0px;
padding: 5px;
`
export const RedLink = styled.a`
  margin: .2rem 1rem;
  font-size: 1rem;
  
`