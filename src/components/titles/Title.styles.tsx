import styled,{ keyframes } from "styled-components";

const fadein = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`; 
const animatePosition = keyframes`
  0%, 100% {
    transform: translateX(-300px);
  }
  50% {
    transform: translateX(300px);
  }
  
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-size: ${({theme}) => theme.font.title};
  letter-spacing: 8px;
  text-transform: uppercase;
  font-family: sans-serif;
  animation: 10s ${fadein} infinite, 4s ${animatePosition} infinite;

`


