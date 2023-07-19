import styled from "styled-components";

export const Wrapp = styled.div`
width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
 `
export const Container = styled.div`
  width: 100%;
  background-color:${({ theme }) => theme.colors.dark};
  display: flex;
  justify-content: center;
  
 `

