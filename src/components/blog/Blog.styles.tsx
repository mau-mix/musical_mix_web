import styled from "styled-components";
import Link from "next/link";
import { breakpoints } from "../../../ui";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.dark};
    width: 96%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    padding: 2rem;
    @media (min-width: ${breakpoints.md}px){
        grid-template-columns: repeat(2, 1fr);  
    }
    @media (min-width: ${breakpoints.lg}px){
        grid-template-columns: repeat(3, 1fr);  
    }
`
export const ContainerCard = styled.div`
    background-color: white;
    height: auto;
   
`
export const HeaderCard = styled.div`
   
`
export const TitleHeader = styled.p`
        color: ${({theme}) => theme.colors.primary};
        font-size: ${({theme}) => theme.font.size.subtitle};
        text-align: center;
`
export const ImageCard = styled.img`
    width: 100%;
    height: 20rem;
    border: solid 1px gray;
`
export const DescriptionCard = styled.div`
    padding: 1rem;
    color: black;
`
export const FooterCard = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
`
export const Enlaces = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 1rem;
  font-size: ${({theme}) => theme.font.size.normal};
  :hover {
    cursor: pointer;
    background-color:${({ theme }) => theme.colors.dark};
    opacity: .7;
    border-radius: 5px;
    padding: 0px 10px;
  }
`

      

