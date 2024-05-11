import styled from "styled-components";
import { breakpoints } from "../../../ui";

export const Container = styled.div`
    background-color: ${({theme}) => theme.colors.dark};
    padding: 2%;
    width: 96%;
`
export const Title = styled.h1`
    color: ${({theme}) => theme.colors.primary};
    text-align: center;
    font-size: ${({theme}) => theme.font.size.subtitle};
    text-transform: uppercase;
    font-family: sans-serif;
    letter-spacing: 8px;
    @media(min-width: ${breakpoints.md}px) {
        font-size: ${({theme}) => theme.font.size.title};  
  }
`
export const Description = styled.p`
    color: white;
    text-align: center;
    letter-spacing: 1px;
    font-family: sans-serif;
    font-size: ${({theme}) => theme.font.size.normal}; 
    @media(min-width: ${breakpoints.md}px) {
        font-size: ${({theme}) => theme.font.size.subtitle};  
  }

`
export const Wrapp = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 96%;
    padding: 2%;
    margin: auto;
    gap: 1%;
    background-color: black;
    @media(min-width: ${breakpoints.mm}px) {
        grid-template-columns: repeat(2, 1fr);
  }
    @media(min-width: ${breakpoints.md}px) {
        grid-template-columns: repeat(3, 1fr);
  }
    @media(min-width: ${breakpoints.lg}px) {
        grid-template-columns: repeat(4, 1fr);
       
  }
    `
export const Images = styled.div`
    height: 14rem;
    width: 100%;
    position: relative;
    margin: 0 auto;
`
