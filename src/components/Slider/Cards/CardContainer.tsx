import React from 'react'
import { ContainerCards, ContainerCard, BtnLeft, BtnRight } from './CardContainer.styles'
import { ISliderContent } from '../types'
import Card from './Card/Card'
import IconLeftArrow from '@/components/icons/IconLeftArrow'
import IconRightArrow from '@/components/icons/IconRightArrow'


interface IProps extends ISliderContent{
  index?: string
  size?: number
}

const CardContainer = (props: IProps) => {
  const { items,size= 3 }= props
  const [ itemActual, SetItemActual ] = React.useState(0)
  const total = items.length
  const lastItemIndex = total -size

  if( !Array.isArray(items) || total === 0 ) return (<></>)

  const NextItem = () => {
    SetItemActual( itemActual === lastItemIndex ? 0 : itemActual + 1)
  }
  const FormerItem = () => {
    SetItemActual( itemActual === 0 ? lastItemIndex : itemActual - 1)
  }

  return (
    <ContainerCards>
      <BtnLeft onClick={ NextItem }><IconLeftArrow /></BtnLeft>
      <ContainerCard>
        {items.slice(itemActual, itemActual + size).map(({title, text,url }, index) => {

          return (
            <Card
              title={title}
              text= {text}
              key={`card-${index}`}
              url={url}
            />
          )
        })}
      </ContainerCard>
      <BtnRight onClick= { FormerItem }><IconRightArrow /></BtnRight>
    </ContainerCards>
  )
}

export default CardContainer