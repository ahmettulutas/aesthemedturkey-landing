'use client';

import React, { useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller, Mousewheel, Pagination, Scrollbar } from 'swiper/modules';
// import { ChevronLeft, ChevronRight } from "lucide-react";

import 'swiper/css';
import 'swiper/css/navigation';

import photo1 from './photos/photo1.jpg';
import photo2 from './photos/photo2.jpg';
import photo3 from './photos/photo3.jpg';
import photo4 from './photos/photo4.jpg';

const images = [photo1.src, photo2.src, photo3.src, photo4.src];
const images2 = [photo4.src, photo3.src, photo2.src, photo1.src];

export function HomeSlider() {
  const [leftSwiper, setLeftSwiper] = useState<SwiperClass | null>(null);
  const [rightSwiper, setRightSwiper] = useState<SwiperClass | null>(null);

  // const nextSlide = () => {
  //   leftSwiper?.slideNext();
  //   rightSwiper?.slideNext();
  // };

  // const prevSlide = () => {
  //   leftSwiper?.slidePrev();
  //   rightSwiper?.slidePrev();
  // };

  return (
    <div className='relative w-full max-w-4xl mx-auto h-[600px] overflow-hidden bg-black'>
      <div className='absolute inset-0 flex'>
        <Swiper
          direction='vertical'
          modules={[Controller, Scrollbar, Pagination, Mousewheel]}
          keyboard={{
            enabled: true,
            onlyInViewport: false,
          }}
          controller={{ control: rightSwiper, inverse: true }}
          onSwiper={(swiper) => setLeftSwiper(swiper)}
          className='flex-1 swiper-container'
          speed={600}
          // autoplay={{
          //   delay: 1000,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            el: '.custom-pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'h-4 w-4 rounded-full cursor-pointer bg-white',
            bulletActiveClass: 'bg-black',
          }}
          loop
          allowTouchMove={false}
        >
          {images.map((image, index) => (
            <SwiperSlide key={`left-${image}`} className='w-full h-full relative'>
              <div
                className='w-full h-full bg-cover'
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: 'left',
                  backgroundSize: '200% 100%',
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          direction='vertical'
          modules={[Controller, Scrollbar, Pagination, Mousewheel, Autoplay]}
          onSwiper={(swiper) => setRightSwiper(swiper)}
          controller={{ control: leftSwiper, inverse: true }}
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: false,
          // }}
          className='flex-1'
          keyboard={{
            enabled: true,
            onlyInViewport: false,
          }}
          speed={600}
          pagination={{
            el: '.custom-pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'h-4 w-4 rounded-full cursor-pointer bg-black',
            bulletActiveClass: 'bg-white',
          }}
          loop
          allowTouchMove={false}
        >
          {images2.map((image, index) => (
            <SwiperSlide key={`right-${image}`} className='w-full h-full relative'>
              <div
                className='w-full h-full bg-cover'
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: 'right',
                  backgroundSize: '200% 100%',
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='absolute bottom-4 left-4 right-4 flex justify-between z-10'>
        {/* <button
          onClick={prevSlide}
          className="bg-white backdrop-blur-sm"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white backdrop-blur-sm"
          aria-label="Next image"
        >
          <ChevronRight className="h-4 w-4" />
        </button> */}
      </div>
      <div className='custom-pagination swiper-pagination-vertical absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-10 gap-2' />
      <style jsx global>{`
        .swiper-slide {
          transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
        }
      `}</style>
    </div>
  );
}
