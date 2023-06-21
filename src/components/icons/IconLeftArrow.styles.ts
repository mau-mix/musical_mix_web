import styled from "styled-components";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export const IconLeft = styled(FaArrowAltCircleLeft)`
 color: ${({ theme }) => theme.colors.primary};
 width: 2.5rem;
 height: 2.5rem;
 transition: background-color .5s ease-in-out;
 border-radius: 50%;
  :hover{
    cursor: pointer;
    background-color: white;
    
  }

`