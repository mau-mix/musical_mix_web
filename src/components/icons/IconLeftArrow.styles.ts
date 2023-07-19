import styled from "styled-components";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { breakpoints } from "../../../ui";
export const IconLeft = styled(FaArrowAltCircleLeft)`
 color: gray;
 width: 2rem;
 height: 2rem;
 transition: background-color .5s ease-in-out;
 border-radius: 50%;
 margin: 0px 5px 0px -10px;
  :hover{
    cursor: pointer;
    background-color: white;
}
@media(min-width: ${breakpoints.md}px) {
    margin-right: 2rem;
  }

`