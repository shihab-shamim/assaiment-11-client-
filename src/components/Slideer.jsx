import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slideer = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
       
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img src={"https://i.ibb.co/v18z1F4/gray-scale-shot-black-watch.jpg"} className='w-full h-[38rem] bg-contain' alt="" /></SwiperSlide>
        <SwiperSlide><img src={"https://i.ibb.co/GCf9pQs/beauty-product-still-life.jpg"} className='w-full h-[38rem]' alt="" /></SwiperSlide>
        <SwiperSlide><img src={"https://i.ibb.co/MMChYFM/jars-collection-with-fresh-smoothie.jpg"} className='w-full h-[38rem]' alt="" /></SwiperSlide>
        
        
        
        <div className="autoplay-progress hidden" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="5" cy="5" r="4"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

        </div>
       
    );
};

export default Slideer;