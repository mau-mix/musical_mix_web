/*import React from 'react'
import {IDescription, IDescArray} from '../types'
import { Container, ContainerCards, ContainerDescription, Description, Card, Title, Enlace} from './Publications.styles'
import Image from 'next/image'


interface IProps {
  description: IDescription[]
  item: IDescArray
    
 }
const  styleImage={
  width: '100%',
  height:'auto',
  borderRadius: '5px',
  margin: '3rem 0rem'
}


const Publication3 = (props: IProps) => {

    const {item, description} = props
    
  return (
    <Container>
      <ContainerCards>
        <Card>
        <Title>78</Title>
            <Image src={item.url} width={500} height={500} alt='' style={styleImage}/>
            <Enlace href={item.goBack}>Volver al inicio</Enlace>
        </Card>
        <ContainerDescription>
          <Description>
              {description.map(num => (
                <li>
                {num.a}
                {num.b}
                {num.c}
                {num.d}
                {num.e}
                {num.f}
                {num.g}
                {num.h}
                {num.i}
                {num.j}<br/>
             
              </li>
            ))}
          </Description>
       </ContainerDescription>
      </ContainerCards>  
    </Container>
  )
}

export default Publication3
