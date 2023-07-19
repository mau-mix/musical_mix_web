import styled from "styled-components";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { breakpoints } from "../../../ui";
export const IconRight = styled(FaArrowAltCircleRight)`
  color: gray;
  width: 2rem;
  height: 2rem;
  margin: 0px -10px 0px 5px;
  transition: background-color .5s ease-in-out;
  border-radius: 50%;
  :hover{
    cursor: pointer;
    background-color: white;
  }
  @media(min-width: ${breakpoints.md}px) {
    margin-left: 2rem;
  }
`