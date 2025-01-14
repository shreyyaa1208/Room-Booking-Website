import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/pagination";
import Slide1 from "../../assets/home-page-slide-1.jpg";
import Slide2 from "../../assets/home-page-slide-2.jpg";
import Slide3 from "../../assets/home-page-slide-3.jpg";
import "./styles.css";

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
    >
      <SwiperSlide>
        <img src={Slide1} alt="Slide 1" className="img-slide1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slide2} alt="Slide 2" className="img-slide1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slide3} alt="Slide 3" className="img-slide1" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
