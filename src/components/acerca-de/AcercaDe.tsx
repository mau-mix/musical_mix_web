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
             <Image 
                sizes="100vw"
                key={item.url}
                src={item.url}
                width={350} 
                height={200} 
                alt=''
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  marginTop: '8px'
                }}
                />
                
             )
          }
        )}
      </Wrapp>
  </Container>
  )
}

export default AcercaDe
