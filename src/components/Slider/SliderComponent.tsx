import React from 'react'
import { SliderContainer } from './SliderComponent.styles'
import CardContainer from './Cards/CardContainer'
import { Info } from '../../../data/contacto'

interface IProps {
  id: string
}

const SliderComponent = (props:IProps) => {
  const { id } = props

  return (
    <SliderContainer id={id}>
      <CardContainer size={3} items={Info.items}/>
    </SliderContainer>
  )
}

export default SliderComponent