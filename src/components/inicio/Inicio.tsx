import React from 'react'
import { ContTitleHome } from './Inicio.styles'
import {Container,
        Img1, 
        Img2, 
        Img3, 
        Title, 
        Span1, 
        Section1, 
        Section2, 
        Section3
        } from './Inicio.styles'

const Inicio = () => {
  return (
   
    <Container> 
       <Section1>
            <h2>Somos</h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries
            , but also the leap into electronic typesetting, remaining
             essentially unchanged. It was popularised in
            </p>
        </Section1>

        <Img1>
        <ContTitleHome>
            <Title>
                El mejor ambiente
            </Title>
        </ContTitleHome>
        </Img1>
        

       <Section2>
            <h2>siempre en tus mejores eventos</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries
                , but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in.
            </p>
      </Section2>

       <Img2>
       <ContTitleHome>
            <Title>
                mas de 20 años de experiencia
            </Title>
        </ContTitleHome>
        </Img2>

        <Section3>
          <h2>¿Qué ofrece?</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries
                , but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in
            </p>
        </Section3>
        
        <Img3>
        <ContTitleHome>
            <Title>
                 El mejor ambiente
            </Title>

        </ContTitleHome>

        </Img3>
</Container>
      
  )
}

export default Inicio
