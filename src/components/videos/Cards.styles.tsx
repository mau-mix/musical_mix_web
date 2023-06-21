import styled,{ keyframes } from "styled-components";


const fadein = keyframes`
    0%, 100% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
`

export const Wrapp = styled.div`
  background-color: black;
  width: 100%;
`
export const ContainerCards = styled.div`
  background-color:${({ theme }) => theme.colors.dark};
  margin: auto;
  max-width: 70%;
  padding: 4rem 6rem 4rem 6rem;
  display: grid;
  grid-template-columns:repeat(2, 1fr);
  gap: 4rem;
`
export const StyleCard = styled.div`
  background-image: url('logo2.png');
  background-position: 50%;
  height: 30rem;
  border-radius: 1rem;
 
  `
export const TitleVideos = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`
export const ContEnlace = styled.div`
  display: flex;
  width: 9rem;
  background-color:${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.primary};
  height: 2rem;
  padding: 0rem 0rem 1.5rem 1.5rem;
  border-radius: 8px;
  opacity:.7;
  margin: 21.5rem 1rem 1rem 12rem;
  
  cursor: pointer;
 `
export const Enlace = styled.a`
  margin-top: 1rem;
  font-size: 16px;
  :hover {
  color: white;
  animation: 1s ${fadein} ease-in;
  }
`

