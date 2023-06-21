import React from 'react'
import { ContTitleHome } from './Inicio.styles'
import { SliderComponent } from '../Slider'
import { Cards } from '../videos'
import {Container,
        Img1, 
        Img2, 
        Img3,
        Img4, 
        TitleImage1,
        TitleImage2, 
        TitleImage3, 
        TitleImage4,  
        TitleSection,
        TextSectection,
        Section, 
        } from './Inicio.styles'
import { data } from '../../../data/inicio'        

const Inicio = () => {
  return (
   
    <Container> 

        <Img1>
        <ContTitleHome>
            <TitleImage1>
                {data.titleSection1}
            </TitleImage1>
        </ContTitleHome>
        </Img1>

       <>
          <SliderComponent />
        </>

        <Img2>
        <ContTitleHome>
            <TitleImage2>
                {data.tileSection2}
            </TitleImage2>
        </ContTitleHome>
        </Img2>
        
      

       <Section>
            <TitleSection>{data.titleVideos}</TitleSection>
            <TextSectection>
              <Cards />
            </TextSectection>
      </Section>

       <Img3>
       <ContTitleHome>
            <TitleImage3>
                {data.titleSection3}
            </TitleImage3>
        </ContTitleHome>
        </Img3>

        <Section>
          <TitleSection>{data.titleBar}</TitleSection>
            <TextSectection>
              {data.textBar}
            </TextSectection>
        </Section>
        
        <Img4>
        <ContTitleHome>
            <TitleImage4>
                 {data.titleSection4}
            </TitleImage4>

        </ContTitleHome>

        </Img4>
</Container>
      
  )
}

export default Inicio
