import styled from "styled-components";

export const Container = styled.div`
    background-color: black;
`
export const Title = styled.h1`
    color: ${({theme}) => theme.colors.primary};
    text-align: center;
    margin: 2rem;
    font-size: ${({theme}) => theme.font.size.title};
    text-transform: uppercase;
    font-family: sans-serif;
    letter-spacing: 8px;
`
export const Description = styled.p`
    color: white;
    text-align: center;
    letter-spacing: 1px;
    font-family: sans-serif;
    font-size: 1.4rem;

`
export const Wrapp = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    padding: 5%;
    background-color: black;
    `
export const Images = styled.img`
    height: 18rem;
    width: 90%;
    margin-bottom: 10%;
    border-radius:.5rem;
    border: solid gray 1px;
`
