"use client";

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import img1 from "../../../assets/pages/pilot/slider/img1.jpg";
import img2 from "../../../assets/pages/pilot/slider/img2.jpg";
import img3 from "../../../assets/pages/pilot/slider/img3.jpg";
import img4 from "../../../assets/pages/pilot/slider/img4.jpg";
import img5 from "../../../assets/pages/pilot/slider/img5.jpg";
import img6 from "../../../assets/pages/pilot/slider/img6.jpg";
import img7 from "../../../assets/pages/pilot/slider/img7.jpg";
import img8 from "../../../assets/pages/pilot/slider/img8.jpg";

const SLIDER_DATA = [
  {
    img: img1,
    id: 1,
  },
  {
    img: img2,
    id: 2,
  },
  {
    img: img3,
    id: 3,
  },
  {
    img: img4,
    id: 4,
  },
  {
    img: img5,
    id: 5,
  },
  {
    img: img6,
    id: 6,
  },
  {
    img: img7,
    id: 7,
  },
  {
    img: img8,
    id: 8,
  },
];

import classes from "./GalleryMedia.module.scss";
import Image from "next/image";

const GalleryMedia = () => {
  return (
    <section className={classes["slider"]}>
      <Swiper
        slidesPerView={4}
        spaceBetween={"10px"}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {SLIDER_DATA.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={classes["slider__img-container"]}>
              <Image src={item.img} alt="Beatiful paragliding image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GalleryMedia;
