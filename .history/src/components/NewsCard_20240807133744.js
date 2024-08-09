import React from 'react'
import { Image } from '@chakra-ui/react'
import { Text, Heading } from '@chakra-ui/react'

const NewsCard = () => {
  return (
    <div name="card-container" className='w-[300px] h-[300px] p-5 bg-slate-50 rounded-2xl'>
      <img src='/image/new_img.png' alt='News Image'  className='object-cover w-full h-[150px] rounded-xl'/>

      <div name="text-box" className='flex flex-col items-center'>
        <Heading fontSize='md' className='py-1'>
          연준금리 낮춘다는데 ...왜?
        </Heading>
        <Text className='text-center'>
          연준금리는 낮추는데도 불구하고
          원달러는 상승중
        </Text>
        <Heading fontSize={'lg'}>
          긍정
        </Heading>
      </div>
    </div>
  )
}

export default NewsCard
