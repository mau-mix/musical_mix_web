import React from 'react'
import {IDescription} from '../types'
/*import { Container, Card, Title, Enlace, ContainerCards, ContainerDescription, Description} from './Publications.styles'
import Image from 'next/image'
import CardPublication from './CardPublication'


interface IProps {
 indice : IDescription[]
}

const  styleImage={
  width: '100%',
  height:'auto',
  borderRadius: '5px',
  margin: '3rem 0rem'
}


const Publication1 = (props: IProps) => {

    const {indice} = props
   
  return (
    <Container>
      <ContainerCards>
        {indice.map(item => {
          return(
            <CardPublication
            key={item.url}
              title={item.title}
              url={item.url}
              a={item.a}
              b={item.b}
              c={item.c}
              d={item.d}
              e={item.e}
              f={item.f}
              g={item.g}
              h={item.h}
              i={item.i}
              j={item.j}
              enlace={item.goBack}
              go={item.endbackward}
            />
          )
        })}
        

     
      </ContainerCards>
    </Container>
  )
}

export default Publication1
