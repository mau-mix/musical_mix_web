import React from 'react'
import {Wrapp, ContainerCards, StyleCard, TitleVideos, Enlace } from './Cards.styles'
import IconFacebok from '../icons/IconFacebook'



function Cards() {
    
  return (
    <Wrapp>
        <ContainerCards>
            <StyleCard url='/img2.jpg'>
                <TitleVideos>Cumbia</TitleVideos>
                <Enlace> <a href='https://www.facebook.com/a.musicalmix'>Ir al video </a><IconFacebok /></Enlace>
            </StyleCard>
            <StyleCard url='/img2.jpg'>
                <TitleVideos>Popurri 80s</TitleVideos>
                <Enlace><a href='https://www.facebook.com/a.musicalmix'>Ir al video </a><IconFacebok /></Enlace>
            </StyleCard>
            <StyleCard url='/img2.jpg'>
                <TitleVideos>Merengue</TitleVideos>
                <Enlace><a href='https://www.facebook.com/a.musicalmix'>Ir al video </a><IconFacebok /></Enlace>
            </StyleCard>
            <StyleCard url='/img2.jpg'>
                <TitleVideos>Norteño</TitleVideos>
                <Enlace><a href='https://www.facebook.com/a.musicalmix'>Ir al video </a><IconFacebok /></Enlace>
            </StyleCard>
        </ContainerCards>    
    </Wrapp>  

    
   
  )
}

export default Cards
