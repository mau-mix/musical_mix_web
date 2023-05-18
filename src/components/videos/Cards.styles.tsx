import styled from "styled-components";

interface IProps{
    url: string
}

export const Wrapp = styled.div`
    background-color:${({ theme }) => theme.colors.dark};
   width: 100%;
   
`
export const ContainerCards = styled.div`
   margin: auto;
   background-color: black;
   max-width: 70%;
   padding: 4rem;
   display: grid;
   grid-template-columns:repeat(2, 1fr);
   gap: 6rem;
   
`
export const StyleCard = styled.div<IProps>`
   background-color: blue;
   background-image: url(${({url}) => url });
   height: 15rem;
   border-radius: 1rem;
`
export const TitleVideos = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`
export const Enlace = styled.div`
  width: 7rem;
  background-color:${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.primary};
  height: 2rem;
  padding: .4rem;
  border-radius: 4px;
  opacity:.7;
  margin: 7rem 1rem 1rem 1rem;
  text-align: center;
  cursor: pointer;
`
export const EnlaceA = styled.a`
  background-color:black
`

