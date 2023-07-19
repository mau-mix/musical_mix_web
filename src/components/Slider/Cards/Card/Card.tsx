'use client'
import React from 'react'
import { CardProp, Title, Text, ContainerImage } from './StyleCard.styles'
import Image from 'next/image'


interface IProps {
  url: string
  text: string
  title: string
}

const Card = (props: IProps) => {
  const {title, text,url }=props
  return (
    <CardProp>
      <Title>{title}</Title>
   <ContainerImage><Image 
            alt="" 
            src={url}
            width={300}
            height={200}
            sizes="100vw"
            style={{
              width: '100%',
              height: '200px',
            }}
      
            />
            

   </ContainerImage>
      <Text>{text}</Text>
    </CardProp>
  )
}

export default Card