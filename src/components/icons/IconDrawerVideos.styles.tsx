import styled from 'styled-components'
import { FaPlayCircle } from "react-icons/fa";

export const IconVideos = styled(FaPlayCircle)`
  color: ${({ theme }) => theme.colors.primary};
  height: 1rem;
  width: 1rem;
  margin-left: 1rem;
`