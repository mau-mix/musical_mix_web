import {LinkStyled, RedLink } from './NavBar.styles'
import { useRouter } from 'next/router'



interface IProps {
    href: string
    text: string
  
}

export const AciveLink = (props: IProps) => {
    const {asPath} = useRouter()
    
   

    const {href, text} = props
    return (
        <LinkStyled href={href} passHref legacyBehavior>
         <RedLink style={asPath == href ? { color: 'red' } : { color: 'white' }}>{text}</RedLink>
       </LinkStyled>
    )
}