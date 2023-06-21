import React from 'react'
import { Container, Description, Title, Wrapp, Images } from './AcercaDe.styles'
import {data} from '../../../data/acercaDe'

const AcercaDe = () => {
  console.log(data)
  return (
    <Container>
      <Title>{data.title}</Title>
      <Description>{data.description}
         <br/><br/>
         {data.description2}
    </Description>
      <Wrapp>
        {data.images.map(item => {
          return (
             <Images src={item.url} />
             )
          }
        )}
      </Wrapp>
  </Container>
  )
}

export default AcercaDe
