import styled from "styled-components";
import { breakpoints } from "../../../ui";

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
  background-color:blue;
  @media (max-width: ${breakpoints.sm}px) {
    
  }
`
export const Img1 = styled.div`
  position: relative;
  opacity: 0.70;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url('/img1.jpeg');
  min-height: 500px;
`
export const Img2 = styled.div`
  position: relative;
  opacity: 0.70;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url('/img2.jpg');
  min-height: 500px;
`
export const Img3 = styled.div`
  position: relative;
  opacity: 0.8;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url('/img3.jpg');
  min-height: 500px;
`
export const TitleImage = styled.div`
  position: absolute;
    top: 50%;
    width: 100%;
    text-align: center;
    font-size: 1.8rem;
    letter-spacing: 8px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
    background-color: transparent;
    @media (min-width: ${breakpoints.lg}px) {
    font-size: 2.5rem;
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
  font-size: 4rem;
  letter-spacing: 6px;
  color: ${({ theme }) => theme.colors.primary};
  margin: 4rem 0rem 4rem 0rem;
 `
 export const  TSectextion = styled.p`
 text-align: center;
 color: ${({ theme }) => theme.colors.primaryBold};
`
export const  Section = styled.section`
  text-align: center;
  padding: 2rem 3rem;
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