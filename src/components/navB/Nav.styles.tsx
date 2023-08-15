import styled from "styled-components";

import { breakpoints } from "../../../ui";

export const NavResponsive = styled.nav`
   display: none;
`
export const ContainerNavResponsive = styled.nav`

@media (min-width: ${breakpoints.md}px) {
    display: inherit;
}
`
export const ButtonBar = styled.button`
background-color: black;

@media (min-width: ${breakpoints.md}px) {
    display: none;
}
`

