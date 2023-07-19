import React from 'react'
import {EnlaceLogo } from './Logo.styles'
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <EnlaceLogo>
      <Link href='/'>
        <Image 
           src='/logo-mix1.png' 
           width={170} 
           height={40} 
           alt='logo'
           style={{
            width: '170px',
            height: 'auto',
           
        }}
           />
      </Link>
   </EnlaceLogo>
     
      
    
  )
}

export default Logo
