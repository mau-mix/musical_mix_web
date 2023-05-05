import React from 'react'
import { DescriptionContainer, DescriptionTerapiaText } from './Description.styles'

interface IProps {
  description: string
}

const DescriptionTerapia = (props: IProps) => {
  const { description } = props

  return (
    <DescriptionContainer>
      <DescriptionTerapiaText>{description}</DescriptionTerapiaText>
    </DescriptionContainer>
  )
}

export default DescriptionTerapia