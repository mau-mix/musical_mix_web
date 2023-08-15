import styled from 'styled-components'
import { FaPager } from "react-icons/fa";

export const IconBlog = styled(FaPager)`
  color: ${({ theme }) => theme.colors.primary};
  height: 1rem;
  width: 1rem;
  margin-left: 1rem;
`