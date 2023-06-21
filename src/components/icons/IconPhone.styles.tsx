import styled from "styled-components";
export const ContIconPhone = styled.a`
    
    margin: 1rem;
   position: relative;
   z-index: 99;
    &:before {
      content: " ";
      position: absolute;
      border-radius: 50%;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: #292929;
      transform: scaleX(0);
      transition: 0.5s;
      opacity: 0;
      z-index: -1;
    
    }
    &:hover {
        cursor: pointer;
        color: white;
        transition: 0.8s;
      &:before {
        opacity: 1;
        transform:scaleX(2);
        transition: 0.5s;
        border-bottom: gray 1px solid;
      }
    }
`