import styled from "styled-components";
import { breakpoints } from "../../../../ui";

export const Container = styled.div`
  display: flex;
  width: 98%;
  padding: 1%;
`
export const ContainerImage = styled.div`
  width: 38%;
  margin-right: 1rem;
`
export const ContainerInfo = styled.div`
background-color: white;
  width: 60%;
  padding: 1rem;
`
export const Title = styled.h2`
  color: white;
  text-align: center;
`
export const Text = styled.p`
  font-size: 14px;
`
export const ContLink = styled.div`
  width: 10rem;
  margin: 2rem;
  text-align: center;
  padding: .5rem 1rem;
  border-radius: 5px;
  margin: auto;
  :hover{
    border-bottom: solid 1px white;
  }
`
export const ContainerCards = styled.div`
background-color: red;
padding: 5px;
  @media (min-width: ${breakpoints.lg}px ) {
    
}
`