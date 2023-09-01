import styled,{keyframes} from "styled-components";
import { breakpoints } from "../../../ui";

const fadein = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`; 

const animatePosition1 = keyframes`
 0% {
    rotate: 0deg;
  }
  25% {
    rotate: y 90deg;
    scale: 0.5;
  }
  50% {
    rotate: 180deg;
  }
  75% {
    rotate: x 270deg;
    border-radius: 50%;
  }
  100% {
    rotate: 360deg;
  }
`
 const animatePosition2 = keyframes`
  0%, 80% {
    transform: scale(1.5);
  }
  50% {
    transform: translate(0, 150px);
  }
`
const animatePosition3 = keyframes`
  0%, 100% {
    rotate: 0deg;
  }
  50% {
    transform: translate(0, 150px);
  }
`
const animatePosition4 = keyframes`
  0%, 100% {
    transform: translateX(-200px);
  }
  50% {
    transform: translateX(200px);
  }
`

export const Container = styled.div`
  height: 100%;
  margin: 0;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  line-height: 1.8em;
  color: #666;
`
export const ContTitleHome = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  letter-spacing: 8px;
  text-transform: uppercase;

`
export const Img1 = styled.div`
  position: relative;
  background-position: 20% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/img1a.jpg');
  height: 25rem;
    @media (min-width: ${breakpoints.md}px) {
      height: 40rem; 
      background-position: 50% 100%;
      background-attachment: fixed;
  }
`
export const Img2 = styled.div`
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url('/img2a.jpg');
  height: 25rem;
  @media (min-width: ${breakpoints.md}px) {
      height: 40rem; 
 }
`
export const Img3 = styled.div`
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url('/img3b.jpg');
  min-height: 500px;
`
export const Img4 = styled.div`
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url('/img4b.jpg');
  min-height: 500px;
`
export const TitleImage1 = styled.p`
  position: absolute;
  top: 30%;
  width: 100%;
  text-align: center;
  font-size: ${({theme}) => theme.font.size.subtitle};
  font-family: ${({theme}) => theme.font.family};
  letter-spacing: 6px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  animation: 5s ${animatePosition1}  infinite;
    @media (min-width: ${breakpoints.md}px) {
      font-size: ${({theme}) => theme.font.size.title};
      top: 50%;
  }
`
export const TitleImage2 = styled.p`
  position: absolute;
    width: 100%;
    text-align: center;
    font-size: ${({theme}) => theme.font.size.subtitle};
    font-family: ${({theme}) => theme.font.family};
    letter-spacing: 8px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
    background-color: transparent;
    animation: 10s ${animatePosition1} infinite, 10s ${fadein} infinite;
    @media (min-width: ${breakpoints.md}px) {
      font-size: ${({theme}) => theme.font.size.title};
      letter-spacing: 8px;
  } 
`
export const TitleImage3 = styled.p`
  position: absolute;
    top: 50%;
    width: 100%;
    text-align: center;
    font-size: ${({theme}) => theme.font.size.subtitle};
    font-family: ${({theme}) => theme.font.family};
    letter-spacing: 8px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
    background-color: transparent;
    animation: 8s ${animatePosition1} infinite;
    @media (min-width: ${breakpoints.md}px) {
      font-size: ${({theme}) => theme.font.size.title};
    } 
 `
export const TitleImage4 = styled.p`
  position: absolute;
    top: 50%;
    width: 100%;
    text-align: center;
    font-size: ${({theme}) => theme.font.size.subtitle};
    font-family: ${({theme}) => theme.font.family};
    letter-spacing: 8px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
    background-color: transparent;
    animation: 5s ${animatePosition1} infinite;
    @media (min-width: ${breakpoints.md}px) {
      font-size: ${({theme}) => theme.font.size.title};
    } 
   
`
export const Span1 = styled.span`
  position: relative;
  background-color: rgb(148, 148, 148);
  color: rgb(143, 33, 19);
  padding: 1rem;
  top:200px;   
`
export const  TitleSection = styled.div`
  text-align: center;
  font-size: ${({theme}) => theme.font.size.subtitle};
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  margin: 4rem 0rem 4rem 0rem;
    @media(min-width: ${breakpoints.md}px) {
      font-size: ${({theme}) => theme.font.size.title};
      letter-spacing: 6px;
  }
 `
 export const  TextSectection = styled.p`
 text-align: center;
 color: ${({ theme }) => theme.colors.white};
 font-size: 1.5rem;
 font-family: sans-serif;
 letter-spacing: 1px;
`
export const  Section = styled.section`
  text-align: center;
  padding: 1rem 3rem;
  background-color: ${({ theme }) => theme.colors.dark};
  color: rgb(255, 254, 254);
  border: solid .5rem ${({ theme }) => theme.colors.secondary}
`


//https://colorhunt.co/palette/eeeeee32e0c40d7377212121 paleta
//colors
//537FE7 primary
//C0EEF2  secundary
//E9F8F9  gris
//181823  dark