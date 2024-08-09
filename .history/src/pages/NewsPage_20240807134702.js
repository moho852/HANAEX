import React from 'react'
import { Text } from '@chakra-ui/react'
import NewsCard from '../components/NewsCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
const NewsPage = () => {
  return (
    <>
      <div className='w-[1140px] h-[calc(100vh-60px)] bg-slate-500 flex flex-col py-10 px-10'>
      <Text fontSize='xl'>02</Text>
      <Text fontSize='3xl'>오늘의 환율 소식</Text>
      <Text fontSize='xl'>외환 전문 AI를 통해 글로벌 외환 소식을 쉽게 접해보세요.</Text>
      {/* <div className='w-full flex-grow bg-slate-400 py-5'>
        <div name="chart-box" className='flex justify-center gap-4'>
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div> */}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}

export default NewsPage
