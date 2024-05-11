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
           width={200} 
           height={60} 
           alt='logo'
          />
      </Link>
   </EnlaceLogo>
     
      
    
  )
}

export default Logo
