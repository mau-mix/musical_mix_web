import React from 'react'
import { IBlog } from './types'
import CardBlog from './CardBlog'
import { Container } from './Blog.styles'

interface IProps {
  InfoItems: IBlog[] 
 
}

const Blog = (props: IProps) => {

  const { InfoItems } = props
 

  return (

    <Container>
        {InfoItems.map(item => {
          return(
            <CardBlog 
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              enlace={item.enlace}
              url={item.url}
              goBack={item.goBack}
            />
          )
        })}
        
    </Container>
  )
}

export default Blog
