import React from 'react'
import Blog from '@/components/blog/Blog'
import { info } from '../../../data/blog'
import MainLayout from '@/components/layouts/MainLayout'

const index = () => {
  return (
      <MainLayout>
        <Blog InfoItems={info.items}/>
      </MainLayout>
      
   
  )
}

export default index
