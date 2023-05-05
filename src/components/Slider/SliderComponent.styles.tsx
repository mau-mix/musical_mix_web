import styled from 'styled-components'

export const SliderContainer = styled.div`
  width: 100% ;
  max-height: 20rem;
  background-color:${({ theme }) => theme.colors.dark};
  border: solid .5rem ${({ theme }) => theme.colors.secondary}
`