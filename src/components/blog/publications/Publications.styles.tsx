import styled from "styled-components";
import { breakpoints } from "../../../../ui";

export const Container = styled.div`
  background-color: black;
  
`
export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: ${breakpoints.lg}px ) {
    flex-direction: row;
  }
  `
export const Card = styled.div`
  background-color: ${({theme}) => theme.colors.dark};
  display: flex; 
  
  width: 100%;
   @media (min-width: ${breakpoints.lg}px ) {
    width: 35%;
    padding: 1rem;
  }
`
export const Title = styled.p`
        color: ${({theme}) => theme.colors.primary};
        font-size: ${({theme}) => theme.font.size.subtitle};
        text-align: center;
`
export const Enlace = styled.a`
text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  padding: 5px;
  font-size: ${({theme}) => theme.font.size.normal};
  margin-bottom: 2rem;
  :hover {
    cursor: pointer;
    background-color:${({ theme }) => theme.colors.dark};
    opacity: .7;
  }
`
export const ContainerDescription = styled.div`
  background-color: white;
  width: 98%;
  padding: .5rem;
  @media (min-width: ${breakpoints.lg}px ) {
    width: 65%; 
    padding: 2rem;
  }
`
export const Description = styled.ul`
  font-size: ${({theme}) => theme.font.size.normal};
`