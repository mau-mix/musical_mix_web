import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { breakpoints } from '../../../ui'

export const Bars = styled(FaBars)`
  color: ${({ theme }) => theme.colors.primary};
  height: 1.5rem;
  width: 1.5rem;
  margin: 1.5rem;
  &:hover {
      cursor: pointer;
      box-shadow:
      0.3em 1em 2em rgba(0,0,0,0.3);
      color: white;
    }
    @media (min-width: ${breakpoints.md}px) {
     display: none;
  }
`