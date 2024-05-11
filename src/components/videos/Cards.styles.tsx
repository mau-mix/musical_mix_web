import styled,{ keyframes } from "styled-components";
import { breakpoints } from "../../../ui";
import Link from "next/link";

const fadein = keyframes`
    0%, 100% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
`


export const ContainerCards = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  width: 95%;
  padding: 2%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: .5rem;

  @media(min-width: ${breakpoints.mm}px) {
      grid-template-columns: repeat(2, 1fr);
      width: 98%;
}
 
    @media(min-width: ${breakpoints.md}px) {
      grid-template-columns: repeat(3, 1fr);
      width: 98%;
}
  @media(min-width: ${breakpoints.lg}px) {
      grid-template-columns: repeat(4, 1fr);
      padding: 1rem;
  }
`
export const StyleCard = styled.div`
  background-color: black;
  height: 22rem;
  border-radius: 1rem;
  border: solid .1px  gray;

  @media(min-width: ${breakpoints.lg}px) {
    height: 25rem; 
  }
`
export const TitleVideos = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({theme}) => theme.font.size.subtitle};
  text-align: center;
  @media(min-width: ${breakpoints.lg}px) {
    font-size: ${({theme}) => theme.font.size.title};
  }
`
export const SubTitleVideos = styled.p`
  color: white;
  font-size: 2.5rem;
  text-align: center;
  letter-spacing: 3px;
`
export const ContEnlace = styled.div`
  display: flex;
  width: 9rem;
  background-color:${({ theme }) => theme.colors.dark};
  padding: 0rem 1rem 1rem;
  border-radius: 8px;
  margin: auto;
  margin-top: 2rem;
  
  :hover {
    cursor: pointer;
  }
    
`
export const Enlace = styled(Link)`
  margin-top: 1rem;
  font-size: ${({theme}) => theme.font.size.normal};
  color: ${({ theme }) => theme.colors.primary};
  :hover {
  color: white;
  animation: 1s ${fadein} ease-in;
  }
`
export const TitleEnlace = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-left: 2rem;
  

`

