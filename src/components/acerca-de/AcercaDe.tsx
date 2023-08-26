import React from 'react'
import { Container, Description, Title, Wrapp, Images } from './AcercaDe.styles'
import {data} from '../../../data/acercaDe'
import Image from 'next/image'

const AcercaDe = () => {
  
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
            <Images>
              <Image 
                key={item.url}
                src={item.url}
                fill 
                alt='images-group'
                style={{borderRadius: '.5rem'}}
                />
            </Images>
             
                
             )
          }
        )}
      </Wrapp>
  </Container>
  )
}

export default AcercaDe
