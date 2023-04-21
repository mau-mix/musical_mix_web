import {LinkStyled} from './NavBar.styles'
import { useRouter } from 'next/router'

interface IProps {
    href: string
    text: string
}
const style = {
    color: '#0070f3'
}
export const AciveLink = (props: IProps) => {
    const {asPath} = useRouter()

    const {href,text} = props
    return (
        <LinkStyled href={href} style={asPath == href ? style : null}>
         {text}
       </LinkStyled>
    )
}