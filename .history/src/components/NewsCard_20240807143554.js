import React from 'react'
import { Image } from '@chakra-ui/react'
import { Text, Heading } from '@chakra-ui/react'

const NewsCard = () => {
  return (
    <div name="card-container" className='w-[300px] h-[290px] p-3 bg-slate-50 rounded-2xl'>
      <img src='/image/new_img.png' alt='News Image'  className='object-cover w-full h-[150px] rounded-xl'/>

      <div name="text-box" className='flex flex-col items-center'>
        <Text fontSize='lg' className='grow py-1' as={'b'}>
          연준금리 낮춘다는데 ...왜?
        </Text>
        <Text fontSize={'sm'} lineHeight={1} className=' bg-slate-400 grow text-center text-slate-600'>
          연준금리는 낮추는데도 불구하고
          원달러는 상승중
        </Text>
        <Text fontSize={'xl'} as={'b'} className='grow'>
          긍정
        </Text>
      </div>
    </div>
  )
}

export default NewsCard
