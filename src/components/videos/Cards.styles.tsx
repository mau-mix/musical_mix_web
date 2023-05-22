import styled from "styled-components";

interface IProps{
    url: string
}

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
export const StyleCard = styled.div<IProps>`
  background-image: url(${({url}) => url });
  height: 19rem;
  border-radius: 1rem;
  `
export const TitleVideos = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`
export const Enlace = styled.div`
  display: flex;
  width: 9rem;
  background-color:${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.primary};
  height: 2rem;
  padding: .4rem 0rem .4rem 1rem;
  border-radius: 8px;
  opacity:.7;
  margin: 10rem 1rem 1rem 3rem;
  
  cursor: pointer;
 `
export const EnlaceA = styled.a`
  background-color:black
`

