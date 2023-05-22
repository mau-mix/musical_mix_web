import styled from "styled-components";

export const Wrapp = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
 `
export const Container = styled.div`
  background-color:${({ theme }) => theme.colors.dark};
  display: flex;
  justify-content: center;
  padding: 1rem;
 `

