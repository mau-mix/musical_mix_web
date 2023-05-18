import { AciveLink } from "./ActiveLink"
import {NavBarStyled} from './NavBar.styles'
import { Container } from "./NavBar.styles"
import { Logo } from "../logo"



export const NavBar = () => {
    return (
        <Container>
            <Logo/>
        <NavBarStyled>
                <AciveLink href="/" text="Inicio"/>
                <AciveLink href="/contact" text="contacto"/>
                <AciveLink href="/acerca-de" text="Acerca de"/>
                <AciveLink href="/blog" text="Blog"/>
                <AciveLink href="/videos" text="Videos"/>
            </NavBarStyled>
        </Container>
        
    )
}