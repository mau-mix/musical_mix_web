import styled from 'styled-components'
import { breakpoints } from '../../../../ui'

export const ContainerCards = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  margin: auto;
  padding: .5rem 0rem;
`
export const ContainerCard = styled.div`
background-color:${({ theme }) => theme.colors.dark};
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  overflow: hidden;
  `
export const BtnLeft = styled.button`
  all: unset;
`
export const BtnRight = styled.button`
  all: unset;
`
export const Pixeles = styled.script`
   margin-left: 40px;
`

