import React from 'react'
import {
  Image,
  Text
} from "@chakra-ui/react";
const SemanticPageDetail = () => {
  return (
    <div className="w-[1140px] bg-slate-500 flex flex-col py-1 px-10">
      {/* 상단 컴포넌트 */}
      <div className='w-full flex justify-center bg-slate-50'>
        <Image
          src='/image/smile.png' alt='smile'
        >
        <Text fontSize='1xl'>매우긍정적</Text>
        </Image>
      </div>
    </div>
  )
}

export default SemanticPageDetail
