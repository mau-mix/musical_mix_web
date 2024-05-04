import React from 'react'
import {Wrapp, ContainerCards, StyleCard, TitleVideos, SubTitleVideos, ContEnlace, Enlace,TitleEnlace } from './Cards.styles'
import {data} from '../../../data/videos'
import StyleMark from '../icons/StyleMark/StyleMark'



function Cards() {
    
  return (
    <Wrapp>
        <ContainerCards>
            <StyleCard>
                <TitleVideos>{data.items.title1}</TitleVideos>
                <SubTitleVideos>{data.nameTitle1}<br/>{data.nameTitle2}</SubTitleVideos>
                <StyleMark />
                <ContEnlace><Enlace target="_blank" rel="noopener" href={data.url1}><TitleEnlace>{data.titleEnlace}</TitleEnlace></Enlace></ContEnlace>
            </StyleCard>

            <StyleCard>
                <TitleVideos>{data.items.title2}</TitleVideos>
                <SubTitleVideos>{data.nameTitle1}<br/>{data.nameTitle2}</SubTitleVideos>
                <StyleMark />
                <ContEnlace><Enlace target="_blank" rel="noopener" href={data.url2}><TitleEnlace>{data.titleEnlace}</TitleEnlace></Enlace></ContEnlace>
            </StyleCard>

            <StyleCard >
                <TitleVideos>{data.items.title3}</TitleVideos>
                <SubTitleVideos>{data.nameTitle1}<br/>{data.nameTitle2}</SubTitleVideos>
                <StyleMark />
                <ContEnlace><Enlace target="_blank" rel="noopener" href={data.url3}><TitleEnlace>{data.titleEnlace}</TitleEnlace></Enlace></ContEnlace>
            </StyleCard>

            <StyleCard >
                <TitleVideos>{data.items.title4}</TitleVideos>
                <SubTitleVideos>{data.nameTitle1}<br/>{data.nameTitle2}</SubTitleVideos>
                <StyleMark />
                <ContEnlace><Enlace target="_blank" rel="noopener" href={data.url4}><TitleEnlace>{data.titleEnlace}</TitleEnlace></Enlace></ContEnlace>
            </StyleCard>
            
            <StyleCard>
                <TitleVideos>{data.items.title5}</TitleVideos>
                <SubTitleVideos>{data.nameTitle1}<br/>{data.nameTitle2}</SubTitleVideos>
                <StyleMark />
                <ContEnlace><Enlace target="_blank" rel="noopener" href={data.url5}><TitleEnlace>{data.titleEnlace}</TitleEnlace></Enlace></ContEnlace>
            </StyleCard>
            <StyleCard>
                <TitleVideos>{data.items.title6}</TitleVideos>
                <SubTitleVideos>{data.nameTitle1}<br/>{data.nameTitle2}</SubTitleVideos>
                <StyleMark />
                <ContEnlace><Enlace target="_blank" rel="noopener" href={data.url6}><TitleEnlace>{data.titleEnlace}</TitleEnlace></Enlace></ContEnlace>
            </StyleCard>

            <StyleCard>
                <TitleVideos>{data.items.title7}</TitleVideos>
                <SubTitleVideos>{data.nameTitle1}<br/>{data.nameTitle2}</SubTitleVideos>
                <StyleMark />
                <ContEnlace><Enlace target="_blank" rel="noopener" href={data.url7}><TitleEnlace>{data.titleEnlace}</TitleEnlace></Enlace></ContEnlace>
            </StyleCard>

            <StyleCard>
                <TitleVideos>{data.items.title8}</TitleVideos>
                <SubTitleVideos>{data.nameTitle1}<br/>{data.nameTitle2}</SubTitleVideos>
                <StyleMark />
                <ContEnlace><Enlace target="_blank" rel="noopener" href={data.url8}><TitleEnlace>{data.titleEnlace}</TitleEnlace></Enlace></ContEnlace>
            </StyleCard>

            <StyleCard>
                <TitleVideos>{data.items.title13}</TitleVideos>
                <SubTitleVideos>{data.nameTitle1}<br/>{data.nameTitle2}</SubTitleVideos>
                <StyleMark />
                <ContEnlace><Enlace target="_blank" rel="noopener" href={data.url13}><TitleEnlace>{data.titleEnlace}</TitleEnlace></Enlace></ContEnlace>
            </StyleCard>

            <StyleCard>
                <TitleVideos>{data.items.title14}</TitleVideos>
                <SubTitleVideos>{data.nameTitle1}<br/>{data.nameTitle2}</SubTitleVideos>
                <StyleMark />
                <ContEnlace><Enlace target="_blank" rel="noopener" href={data.url14}><TitleEnlace>{data.titleEnlace}</TitleEnlace></Enlace></ContEnlace>
            </StyleCard>

            <StyleCard>
                <TitleVideos>{data.items.title15}</TitleVideos>
                <SubTitleVideos>{data.nameTitle1}<br/>{data.nameTitle2}</SubTitleVideos>
                <StyleMark />
                <ContEnlace><Enlace target="_blank" rel="noopener" href={data.url15}><TitleEnlace>{data.titleEnlace}</TitleEnlace></Enlace></ContEnlace>
            </StyleCard>

            <StyleCard>
                <TitleVideos>{data.items.title16}</TitleVideos>
                <SubTitleVideos>{data.nameTitle1}<br/>{data.nameTitle2}</SubTitleVideos>
                <StyleMark />
                <ContEnlace><Enlace target="_blank" rel="noopener" href={data.url16}><TitleEnlace>{data.titleEnlace}</TitleEnlace></Enlace></ContEnlace>
            </StyleCard>

            <StyleCard>
                <TitleVideos>{data.items.title9}</TitleVideos>
                <SubTitleVideos>{data.nameTitle1}<br/>{data.nameTitle2}</SubTitleVideos>
                <StyleMark />
                <ContEnlace><Enlace target="_blank" rel="noopener" href={data.url9}><TitleEnlace>{data.titleEnlace}</TitleEnlace></Enlace></ContEnlace>
            </StyleCard>

            <StyleCard>
                <TitleVideos>{data.items.title10}</TitleVideos>
                <SubTitleVideos>{data.nameTitle1}<br/>{data.nameTitle2}</SubTitleVideos>
                <StyleMark />
                <ContEnlace><Enlace target="_blank" rel="noopener" href={data.url10}><TitleEnlace>{data.titleEnlace}</TitleEnlace></Enlace></ContEnlace>
            </StyleCard>

            <StyleCard>
                <TitleVideos>{data.items.title11}</TitleVideos>
                <SubTitleVideos>{data.nameTitle1}<br/>{data.nameTitle2}</SubTitleVideos>
                <StyleMark />
                <ContEnlace><Enlace target="_blank" rel="noopener" href={data.url11}><TitleEnlace>{data.titleEnlace}</TitleEnlace></Enlace></ContEnlace>
            </StyleCard>

            <StyleCard>
                <TitleVideos>{data.items.title12}</TitleVideos>
                <SubTitleVideos>{data.nameTitle1}<br/>{data.nameTitle2}</SubTitleVideos>
                <StyleMark />
                <ContEnlace><Enlace target="_blank" rel="noopener" href={data.url12}><TitleEnlace>{data.titleEnlace}</TitleEnlace></Enlace></ContEnlace>
            </StyleCard>
               
            
        </ContainerCards>    
    </Wrapp>  

    
   
  )
}

export default Cards
