import styled from "styled-components";
import { breakpoints } from "../../../ui";

export const Container = styled.div`
   background-color:${({ theme }) => theme.colors.dark};
   height: 18rem;
  @media(min-width: ${breakpoints.md}px) {
    height: 13rem;
  }
 
`
export const TitleContacto = styled.h1`
   background-color: black;
   padding: 1rem;
   text-align: center;
   font-size: ${({theme}) => theme.font.size.subtitle};
   font-family: ${({theme}) => theme.font.family};
   color: ${({ theme }) => theme.colors.primary};
   letter-spacing: 2px;
   @media(min-width: ${breakpoints.md}px) {
    font-size: ${({theme}) => theme.font.size.title};
  }
`
export const ContIcons = styled.div`
     display: flex;
     flex-direction: column;

   @media(min-width: ${breakpoints.md}px) {
     flex-direction: row;
     justify-content: space-around;
  }
`
export const ContDescription = styled.div`
  display: flex;
   @media(min-width: ${breakpoints.md}px) {
     margin-left: 1rem;  
  }
`
export const Description = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({theme}) => theme.font.size.normal};
  font-family: ${({theme}) => theme.font.family};
  
  @media(min-width: ${breakpoints.md}px) {
    letter-spacing: 2px;
    font-size: ${({theme}) => theme.font.size.subtitle};
  }
`


