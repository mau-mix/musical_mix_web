import styled from 'styled-components'
import { FaWhatsapp } from "react-icons/fa";

export const IconContact = styled(FaWhatsapp)`
  color: ${({ theme }) => theme.colors.primary};
  height: 1rem;
  width: 1rem;
  margin-left: 1rem;
`