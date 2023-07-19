import React from 'react'
import {Wrapp, ContainerCards, StyleCard, TitleVideos, SubTitleVideos, ContEnlace, Enlace } from './Cards.styles'
import IconFacebok from '../icons/IconFacebook'
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
                <ContEnlace><Enlace target="_blank" rel="noopener" href={data.url1}>{data.titleEnlace}</Enlace><IconFacebok /></ContEnlace>
            </StyleCard>

            <StyleCard>
                <TitleVideos>{data.items.title2}</TitleVideos>
                <SubTitleVideos>{data.nameTitle1}<br/>{data.nameTitle2}</SubTitleVideos>
                <StyleMark />
                <ContEnlace><Enlace target="_blank" rel="noopener" href={data.url2}>{data.titleEnlace}</Enlace><IconFacebok /></ContEnlace>
            </StyleCard>

            <StyleCard >
                <TitleVideos>{data.items.title3}</TitleVideos>
                <SubTitleVideos>{data.nameTitle1}<br/>{data.nameTitle2}</SubTitleVideos>
                <StyleMark />
                <ContEnlace><Enlace target="_blank" rel="noopener" href={data.url3}>{data.titleEnlace}</Enlace><IconFacebok /></ContEnlace>
            </StyleCard>

            <StyleCard >
                <TitleVideos>{data.items.title4}</TitleVideos>
                <SubTitleVideos>{data.nameTitle1}<br/>{data.nameTitle2}</SubTitleVideos>
                <StyleMark />
                <ContEnlace><Enlace target="_blank" rel="noopener" href={data.url4}>{data.titleEnlace}</Enlace><IconFacebok /></ContEnlace>
            </StyleCard>
            
            <StyleCard>
                <TitleVideos>{data.items.title5}</TitleVideos>
                <SubTitleVideos>{data.nameTitle1}<br/>{data.nameTitle2}</SubTitleVideos>
                <StyleMark />
                <ContEnlace><Enlace target="_blank" rel="noopener" href={data.url5}>{data.titleEnlace}</Enlace><IconFacebok /></ContEnlace>
            </StyleCard>
            <StyleCard>
                <TitleVideos>{data.items.title6}</TitleVideos>
                <SubTitleVideos>{data.nameTitle1}<br/>{data.nameTitle2}</SubTitleVideos>
                <StyleMark />
                <ContEnlace><Enlace target="_blank" rel="noopener" href={data.url6}>{data.titleEnlace}</Enlace><IconFacebok /></ContEnlace>
            </StyleCard>

            <StyleCard>
                <TitleVideos>{data.items.title7}</TitleVideos>
                <SubTitleVideos>{data.nameTitle1}<br/>{data.nameTitle2}</SubTitleVideos>
                <StyleMark />
                <ContEnlace><Enlace target="_blank" rel="noopener" href={data.url7}>{data.titleEnlace}</Enlace><IconFacebok /></ContEnlace>
            </StyleCard>

            <StyleCard>
                <TitleVideos>{data.items.title8}</TitleVideos>
                <SubTitleVideos>{data.nameTitle1}<br/>{data.nameTitle2}</SubTitleVideos>
                <StyleMark />
                <ContEnlace><Enlace target="_blank" rel="noopener" href={data.url8}>{data.titleEnlace}</Enlace><IconFacebok /></ContEnlace>
            </StyleCard>
               
            
        </ContainerCards>    
    </Wrapp>  

    
   
  )
}

export default Cards
