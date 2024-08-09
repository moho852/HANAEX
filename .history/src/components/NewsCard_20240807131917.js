import React from 'react'
import { Image } from '@chakra-ui/react'
const NewsCard = () => {
  return (
    <div name="card-container" className='w-[330px] h-[330px] p-5 bg-slate-50 rounded-2xl'>
      <img src='/image/new_img.png' alt='News Image'  className='object-cover w-full h-[150px] rounded-2xl'/>
    </div>
  )
}

export default NewsCard
