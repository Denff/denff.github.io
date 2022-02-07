import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "./styles.scss";

import SwiperCore, {Mousewheel,Pagination} from 'swiper/core';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Slide1 from "./components/Slide/Slide_1";
import Slide2 from "./components/Slide/Slide_2";
import Slide3 from "./components/Slide/Slide_3";
// import Slide4 from "./components/Slide/Slide_4";
import Slide5 from "./components/Slide/Slide_5";

SwiperCore.use([Mousewheel,Pagination]);

export default function App() {
  
  const bullets = ['01', '02', '03', '04']
  
  return (
    <>
      <Header/>
          <Swiper direction={'vertical'} 
                  speed={600}
                  slidesPerView={1} 
                  spaceBetween={0} 
                  mousewheel={true} 
                  pagination={{
                    "clickable": true,
                    "renderBullet": function (index, className) {
                      return '<span class="' + className + '">' + (bullets[index]) + '</span>';
                    },
                    effect: 'flip',
                    flipEffect: {
                      slideShadows: true,
                    },
                  }}
                  className="mySwiper">
          <SwiperSlide><Slide1 /></SwiperSlide>
          <SwiperSlide><Slide2 /></SwiperSlide>
          <SwiperSlide><Slide3 /></SwiperSlide>
          {/* <SwiperSlide><Slide4 /></SwiperSlide> */}
          <SwiperSlide><Slide5 /></SwiperSlide>
        </Swiper>
      <Footer/>
    </>
  )
}