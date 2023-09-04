import React from 'react'
import { Container, TitleContacto, ContIcons, ContDescription, Description  } from './Contact.style'
import IconPhone from '../icons/IconPhone'
import IconWatsapp from '../icons/IconWatsapp'
import IconEmail from '../icons/IconEmail'
import { data } from '../../../data/dataContact'



const Contact = () => {
  return (
    <Container>
     
        <TitleContacto>{data.title}</TitleContacto>
        <ContIcons>

          <ContDescription>
           <IconPhone /><Description>{data.phone}</Description>
          </ContDescription>

          <ContDescription>
           <IconWatsapp /><Description>{data.watsapp}</Description>
          </ContDescription>

          <ContDescription>
           <IconEmail /><Description>{data.email}</Description>
          </ContDescription>
         
        </ContIcons>
        
      
      

    </Container>
  )
}

export default Contact




