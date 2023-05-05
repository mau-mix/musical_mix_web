import React from 'react'
import { CardProp, Title, Text, Ima } from './StyleCard.styles'


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
   <div><Ima src={url}/></div>
      <Text>{text}</Text>
    </CardProp>
  )
}

export default Card