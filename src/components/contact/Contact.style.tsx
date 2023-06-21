import styled from "styled-components";

export const Container = styled.div`
   background-color:${({ theme }) => theme.colors.dark};
   height: 20rem;
   padding: 10%;
`
export const TitleContacto = styled.h1`
   background-color: black;
   text-align: center;
   font-size: ${({theme}) => theme.font.size.title};
   font-family: ${({theme}) => theme.font.family};
   color: ${({ theme }) => theme.colors.primary};
   letter-spacing: 5px;
`
export const ContInfo = styled.div`
   padding: .5rem;
   
`
export const ContIcons = styled.div`
   display: flex;
   justify-content: space-around;
`
export const ContDescription = styled.div`
  display: flex;
  padding: .2rem;
 
  margin-left: 1rem;
`
export const Description = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({theme}) => theme.font.size.subtitle};
  font-family: ${({theme}) => theme.font.family};
  letter-spacing:2px;
`


