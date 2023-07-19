import React from 'react'
import { ContainerCard, ImageCard, TitleHeader, DescriptionCard, FooterCard, Enlaces} from './Blog.styles'

interface IProps {
  id: number
  title: string
  url: string
  description: string
  enlace: string
  goBack: string
}

const CardBlog = (props: IProps) => {
  const {title, url, description, enlace, goBack} = props
  return (
    <ContainerCard>
      <TitleHeader>{title}</TitleHeader>
      <ImageCard src={url} />
      <DescriptionCard>{description}</DescriptionCard>
      <FooterCard>
        <Enlaces href={goBack}>Volver</Enlaces>
        <Enlaces href={enlace}>Leer mas</Enlaces>
      </FooterCard>
     
    </ContainerCard>
  )
}

export default CardBlog
