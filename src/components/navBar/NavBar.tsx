import { AciveLink } from "./ActiveLink"
import {NavBarStyled} from './NavBar.styles'
import { Container } from "./NavBar.styles"
import { Logo } from "../logo"
import NavB from "../navB/NavB"
import { navbar } from "../../../data/menu"



export const NavBar = () => {
    return (
        <Container>
            <Logo/>
            <NavB />
        <NavBarStyled>
              {navbar.map( item => (
                <AciveLink href={item.href} text={item.text} key={item.href}/>
              ))}
            </NavBarStyled>
        </Container>
        
    )
}