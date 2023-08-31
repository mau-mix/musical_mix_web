import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Container,
        ContainerImage,
        ContLink,
        ContainerInfo,
        Title,
        Text

} from './CardPublication.styles'
interface IProps {
  title: string
  url: string
  a: string
  b: string
  c: string
  d: string
  e: string
  f: string
  g: string
  h: string
  i: string
  j: string
  enlace: string
  go: string
}


const styleImage= {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
   
  }


const CardPublication = (props: IProps) => {
  const {title,url,a,b,c,d,e,f,g,h,i,j, enlace, go} = props
  
  return (
    <Container>
      <ContainerImage>
         <Title>{title}</Title>
         <Image src={url} alt='image-page' width={500} height={500} style={styleImage}/>
         <ContLink>
            <Link href={enlace}>{go}</Link>
        </ContLink>
      </ContainerImage>

      <ContainerInfo>
        <Text>{a}</Text>
        <Text>{b}</Text>
        <Text>{c}</Text>
        <Text>{d}</Text>
        <Text>{e}</Text>
        <Text>{f}</Text>
        <Text>{g}</Text>
        <Text>{h}</Text>
        <Text>{i}</Text>
        <Text>{j}</Text>
      </ContainerInfo>
    </Container>
  )
}

export default CardPublication
