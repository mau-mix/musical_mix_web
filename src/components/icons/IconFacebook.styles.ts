import styled from "styled-components";

export const IconFace = styled.a`
  background-color: ${({ theme }) => theme.font.colors.primary};
  margin: 0rem 1rem; 
  &:hover {
      cursor: pointer;
      color:white};
    
`