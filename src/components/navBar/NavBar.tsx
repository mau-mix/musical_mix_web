import { AciveLink } from "./ActiveLink"
import {NavBarStyled} from './NavBar.styles'

export const NavBar = () => {
    return (
        <NavBarStyled>
            <AciveLink href="/" text="Inicio"/>
            <AciveLink href="/contact" text="contacto"/>
            <AciveLink href="/acerca-de" text="Acerca de"/>
        </NavBarStyled>
    )
}