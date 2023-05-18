import React from 'react'
import { SliderContainer } from './SliderComponent.styles'
import CardContainer from './Cards/CardContainer'
import { Info } from '../../../data/contacto'



const SliderComponent = () => {
 
  return (
    <SliderContainer>
      <CardContainer size={3} items={Info.items}/>
    </SliderContainer>
  )
}

export default SliderComponent