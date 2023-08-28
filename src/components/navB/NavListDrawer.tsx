import React from 'react'
import { Box } from '@mui/system'
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

interface ILink {
  text: string
  href: string
  icon: JSX.Element

}
interface IProps {
  items: ILink[]
}
const NavListDrawer = (props: IProps) => {

  const { items } = props

 
  return (
    <Box sx={{width: 250}}>
       <nav>
        <List sx={{backgroundColor: 'black'}}>
          {items.map(item => (
            
             <ListItem disablePadding key={item.text}>
                <ListItemButton component="a" href={item.href}>
                <ListItemIcon>
                  {item.icon}
              </ListItemIcon>
                    <ListItemText>{item.text}</ListItemText>
                </ListItemButton>
             </ListItem>
          ))}
 
        </List>
     </nav>
      
    </Box>
  )
}
export default NavListDrawer