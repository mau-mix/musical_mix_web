import { useState } from 'react'
import NavListDrawer from './NavListDrawer'
import { Drawer } from '@mui/material'
import { ContainerNavResponsive, ButtonBar } from './Nav.styles'
import IconBars from '../icons/IconBars'
import IconDrawerInicio from '../icons/IconDrawerInicio'
import IconDrawerContact from '../icons/IconDrawerContact'
import IconDrawerAcerca from '../icons/IconDrawerAcerca'
import IconDrawerBlog from '../icons/IconDrawerBlog'
import IconDrawerVideos from '../icons/IconDrawerVideos'



const NavLink = [
    { href: "/", text: "Inicio", icon: <IconDrawerInicio/> },
    { href: "/contact", text: "Contacto", icon: <IconDrawerContact />}, 
    { href: "/acerca-de", text: "Acerce de", icon: <IconDrawerAcerca /> },
    { href: "/blog", text: "Blog", icon: <IconDrawerBlog /> },
    { href: "/videos", text: "Videos", icon: <IconDrawerVideos /> },

]

const NavB = () => {

  const [ open, setOpen ] = useState(false)

  return (
    <ContainerNavResponsive>
        <ButtonBar 
           onClick={() => setOpen(true)}
        >
            <IconBars/>
       </ButtonBar>   
         
         <Drawer open={open} anchor='left' onClose={() => setOpen(false)} >
          <NavListDrawer NavLink={NavLink}/>
        </Drawer>
    </ContainerNavResponsive>
  )
}

export default NavB
