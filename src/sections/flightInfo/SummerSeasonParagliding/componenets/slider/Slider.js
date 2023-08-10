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

import img1 from "../../../../../assets/pages/flightInfo/SummerFlights/slider/pic1.jpg";
import img2 from "../../../../../assets/pages/flightInfo/SummerFlights/slider/pic2.jpg";
import img3 from "../../../../../assets/pages/flightInfo/SummerFlights/slider/pic3.jpg";
import img4 from "../../../../../assets/pages/flightInfo/SummerFlights/slider/pic4.jpg";
import img5 from "../../../../../assets/pages/flightInfo/SummerFlights/slider/pic5.jpg";
import img6 from "../../../../../assets/pages/flightInfo/SummerFlights/slider/pic6.jpg";
import img7 from "../../../../../assets/pages/flightInfo/SummerFlights/slider/pic7.jpg";
import img8 from "../../../../../assets/pages/flightInfo/SummerFlights/slider/pic8.jpg";
import img9 from "../../../../../assets/pages/flightInfo/SummerFlights/slider/pic9.jpg";
import img10 from "../../../../../assets/pages/flightInfo/SummerFlights/slider/pic10.jpg";

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
  {
    img: img9,
    id: 9,
  },
  {
    img: img10,
    id: 10,
  },
];

import classes from "./Slider.module.scss";
import Image from "next/image";

const GalleryMedia = () => {
  return (
    <section className={classes["slider"]}>
      <div className={classes["slider__desc"]}>
        <Swiper
          slidesPerView={5}
          spaceBetween={"5px"}
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
      </div>

      <div className={classes["slider__mobile"]}>
        <Swiper
          slidesPerView={3}
          spaceBetween={"5px"}
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
      </div>
    </section>
  );
};

export default GalleryMedia;
