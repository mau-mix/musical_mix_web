import React from 'react'
import { ContTitleHome } from './Inicio.styles'
import { TitleNav } from '../titles'
import {Container,
        Img1, 
        Img2, 
        Img3, 
        TitleImage, 
        TitleSection,
        TSectextion,
        Section, 
        } from './Inicio.styles'

const Inicio = () => {
  return (
   
    <Container> 
       <Section>
            <TitleNav />
            <TSectextion>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries
            , but also the leap into electronic typesetting, remaining
             essentially unchanged. It was popularised in
            </TSectextion>
        </Section>

        <Img1>
        <ContTitleHome>
            <TitleImage>
                El mejor ambiente
            </TitleImage>
        </ContTitleHome>
        </Img1>
        

       <Section>
            <TitleSection>siempre en tus mejores eventos</TitleSection>
            <TSectextion>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries
                , but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in.
            </TSectextion>
      </Section>

       <Img2>
       <ContTitleHome>
            <TitleImage>
                mas de 20 años de experiencia
            </TitleImage>
        </ContTitleHome>
        </Img2>

        <Section>
          <TitleSection>¿Qué ofrece?</TitleSection>
            <TSectextion>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries
                , but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in
            </TSectextion>
        </Section>
        
        <Img3>
        <ContTitleHome>
            <TitleImage>
                 El mejor ambiente
            </TitleImage>

        </ContTitleHome>

        </Img3>
</Container>
      
  )
}

export default Inicio
