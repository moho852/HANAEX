import React from 'react'
import MainChart from '../components/MainChart'
import {Text} from '@chakra-ui/react'
const MainPageDetail = () => {
  return (
    <div className='w-[1140px] bg-slate-500 flex flex-col py-10 px-10'>
      <div className='flex flex-col items-center bg-slate-100 rounded-lg'>
        <MainChart />
        <div>
          <div className='flex items-center'>
            <div className='w-4 h-4 bg-slate-500 rounded-full'></div>
            <Text>최저가-최고가</Text>
          </div>
          <div className='flex items-center'>
            <div className='w-4 h-4 bg-slate-500 rounded-full'></div>
            <Text>최저가-최고가</Text>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default MainPageDetail
