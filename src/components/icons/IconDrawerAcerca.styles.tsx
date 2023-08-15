import styled from 'styled-components'
import { FaUser } from "react-icons/fa";

export const IconAcerca = styled(FaUser)`
  color: ${({ theme }) => theme.colors.primary};
  height: 1rem;
  width: 1rem;
  margin-left: 1rem;
`