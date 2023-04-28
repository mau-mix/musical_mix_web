import styled from "styled-components";

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
`
export const Img1 = styled.div`
  position: relative;
  opacity: 0.70;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url('/img1.jpeg');
  min-height: 400px;
`
export const Img2 = styled.div`
  position: relative;
  opacity: 0.70;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url('/img2.jpg');
  min-height: 400px;
`
export const Img3 = styled.div`
  position: relative;
  opacity: 0.8;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url('/img3.jpg');
  min-height: 400px;
`
export const Title = styled.div`
  position: absolute;
    top: 50%;
    width: 100%;
    text-align: center;
    font-size: 27px;
    letter-spacing: 8px;
    text-transform: uppercase;
    background-color: rgb(148, 148, 148);
    color: rgb(143, 33, 19);
    padding: 20px;
    background-color: transparent;
`
export const Span1 = styled.span`
  position: relative;
  background-color: rgb(148, 148, 148);
  color: rgb(143, 33, 19);
  padding: 1rem;
  top:200px;   
`
export const  Section1 = styled.section`
  text-align: center;
  padding: 50px 80px;
  background-color: ${({ theme }) => theme.colors.dark};
  color: rgb(255, 254, 254);
  
`
export const  Section2 = styled.section`
  text-align: center;
  padding: 50px 80px;
  background-color: ${({ theme }) => theme.colors.dark};
  color: #ddd;
  
`
export const  Section3 = styled.section`
  text-align: center;
  padding: 50px 80px;
  background-color: ${({ theme }) => theme.colors.dark};
  color: #ddd;
  
`
//colors
//537FE7 primary
//C0EEF2  secundary
//E9F8F9  gris
//181823  dark