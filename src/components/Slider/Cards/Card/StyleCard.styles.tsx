import styled from 'styled-components'

export const CardProp = styled.div`
  background-color: ${({ theme }) => theme.colors.secundary};
  min-width: 30%;
  height: auto;
  border: solid 1px gray;
  border-radius: 10px;
  padding: .2rem ;
  transition: background-color .5s ease;
      :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.font.colors.green};
    color: white;
    box-shadow: 0  5px 10px 2px #000000;
    & div {
      background-color: ${({ theme }) => theme.font.colors.white};
    }
}
`
export const Title = styled.h1`
  text-align: center;
  font-family: ${({theme}) => theme.font.family};
  font-size: 1.1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
`
export const Text = styled.p`
  text-align: center;
  font-size: 16px;
  font-family: ${({theme}) => theme.font.family};
  font-size: .8rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
`
export const Ima = styled.img`
  width: 100%;
  max-height: 12rem;
`
