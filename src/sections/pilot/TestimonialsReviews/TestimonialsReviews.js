"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Pacifico } from "next/font/google";

import classes from "./TestimonialsReviews.module.scss";

import main from "../../../assets/pages/pilot/testimoanial.png";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

// WOMAN
import woman1 from "../../../assets/pages/pilot/testimonials/woman/woman1.jpg";
import woman2 from "../../../assets/pages/pilot/testimonials/woman/woman2.jpg";
import woman3 from "../../../assets/pages/pilot/testimonials/woman/woman3.jpg";
import woman4 from "../../../assets/pages/pilot/testimonials/woman/woman4.jpg";
import woman5 from "../../../assets/pages/pilot/testimonials/woman/woman5.jpg";
import woman6 from "../../../assets/pages/pilot/testimonials/woman/woman6.jpg";

// MAN
import man1 from "../../../assets/pages/pilot/testimonials/man/man10.jpg";
import man2 from "../../../assets/pages/pilot/testimonials/man/man2.jpg";
import man3 from "../../../assets/pages/pilot/testimonials/man/man3.jpg";
import man4 from "../../../assets/pages/pilot/testimonials/man/man4.jpg";
import man5 from "../../../assets/pages/pilot/testimonials/man/man5.jpg";
import man6 from "../../../assets/pages/pilot/testimonials/man/man6.jpg";
import man7 from "../../../assets/pages/pilot/testimonials/man/man7.jpg";
import man8 from "../../../assets/pages/pilot/testimonials/man/man8.jpg";
import man9 from "../../../assets/pages/pilot/testimonials/man/man9.jpg";
import man10 from "../../../assets/pages/pilot/testimonials/man/man1.jpg";

// COUNTRIRES
import usa from "../../../assets/pages/pilot/testimonials/countries/united-states.png";
import australia from "../../../assets/pages/pilot/testimonials/countries/australia.png";
import brazil from "../../../assets/pages/pilot/testimonials/countries/brazil-flag.png";
import canada from "../../../assets/pages/pilot/testimonials/countries/canada.png";
import germany from "../../../assets/pages/pilot/testimonials/countries/germany.png";
import ireland from "../../../assets/pages/pilot/testimonials/countries/ireland.png";
import italy from "../../../assets/pages/pilot/testimonials/countries/italy.png";
import newZealand from "../../../assets/pages/pilot/testimonials/countries/new-zealand.png";
import russia from "../../../assets/pages/pilot/testimonials/countries/russia.png";
import unitedKingdom from "../../../assets/pages/pilot/testimonials/countries/united-kingdom.png";
import Testimonial from "./componenets/Testimonial";

const TESTIMONISLAS_DATA = [
  {
    img: man1,
    testimonial:
      '"I had an incredible time flying with Omar! His vibrant personality and jokes added an extra layer of enjoyment to the flight. It was an experience that exceeded all expectations!" - James, United States',
    country: usa,
    id: 111,
  },

  {
    img: man2,
    testimonial: `"Flying with Omar was an absolute thrill! His skill as a pilot were evident. I couldn't have asked for a better paragliding experience!" - Max, Canada`,
    country: canada,
    id: 222,
  },

  {
    img: man3,
    testimonial: `"Omar is an outstanding pilot who knows how to make paragliding an absolute blast.  Highly recommended!" - Alexander, Germany`,
    country: germany,
    id: 333,
  },
  {
    img: woman6,
    testimonial: `"Omar is not only an excellent pilot but also a wonderful person. His infectious energy and witty jokes made it an experience I'll cherish forever." - Gabriella, Brazil`,
    country: brazil,
    id: 444,
  },
  {
    img: man4,
    testimonial: `"I had the privilege of flying with Omar, and it was an experience of a lifetime! I can't wait to fly with him again!" - Daniel, Australia`,
    country: australia,
    id: 555,
  },
  {
    img: woman5,
    testimonial: `"Flying with Omar was an absolute delight! It was an adventure filled with laughter and stunning views!" - Olivia, United Kingdom`,
    country: unitedKingdom,
    id: 666,
  },
  {
    img: man5,
    testimonial: `"Flying with Omar was the best decision I made during my trip. His professionalism and extensive knowledge of paragliding were apparent, and his infectious enthusiasm and great sense of humor made the flight an absolute joy." - Ivan, Russia`,
    country: russia,
    id: 777,
  },
  {
    img: woman4,
    testimonial: `"I had the pleasure of flying with Omar, and I can't recommend him enough! I felt like I was soaring with a friend!" - Isabella, Italy`,
    country: italy,
    id: 888,
  },
  {
    img: man6,
    testimonial: `"Omar is a top-notch pilot with an incredible personality. I can't wait to fly with him again!" - Matteo, Italy`,
    country: italy,
    id: 999,
  },
  {
    img: woman3,
    testimonial: `"Omar is an exceptional pilot who knows how to make paragliding an incredible adventure. He made me feel comfortable from the moment I took off. It was an unforgettable experience!" - Laura, Germany`,
    country: germany,
    id: 101010,
  },
  {
    img: man7,
    testimonial: `"Flying with Omar was an absolute thrill ride! It was an adrenaline-pumping experience that I'll cherish forever!" - David, United Kingdom`,
    country: unitedKingdom,
    id: 11111,
  },
  {
    img: woman2,
    testimonial: `"Flying with Omar was an exhilarating experience! I felt safe, entertained, and inspired!" - Sophia, Canada`,
    country: canada,
    id: 121212,
  },
  {
    img: man8,
    testimonial: `"Omar is not only an excellent pilot but also a fantastic person. I highly recommend flying with him!" - Lucas, Brazil`,
    country: brazil,
    id: 131313,
  },
  {
    img: man9,
    testimonial: `"I had an incredible time flying with Omar! He has fun-loving personality and great sense of humor made the entire flight amazing. It was an adventure I'll never forget!" - Ethan, New Zealand`,
    country: newZealand,
    id: 141414,
  },
  {
    img: man10,
    testimonial: `"Flying with Omar was the highlight of my trip! It was an adrenaline rush like no other!" - Thomas, Ireland`,
    country: ireland,
    id: 151515,
  },
  {
    img: woman1,
    testimonial: `"I had an amazing time flying with Omar! Highly recommended!" - Emily, Australia`,
    country: australia,
    id: 161616,
  },
];

const TestimonialsReviews = () => {
  const [intersection, setIntersecting] = useState(false);
  const content = useRef();

  // INTERSECTION OBSERVER
  useEffect(() => {
    // INTERSECTIONOBSERVER FUNCTION
    const testimonialObserver = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIntersecting(true);
      }
    };

    // INTERSECTION OBSERVER OPTIONS
    const options = {
      root: null,
      threshold: 0.2,
      rootMargin: "",
    };

    // INTERSECTION OBSERVER
    const testimonislasSecObserver = new IntersectionObserver(
      testimonialObserver,
      options
    );

    // OBSERVE
    if (content.current) {
      testimonislasSecObserver.observe(content.current);
    }

    //CLEANUP FUNCTION
    return () => {
      if (content.current) testimonislasSecObserver.unobserve(content.current);
    };
  });

  return (
    <section id="testimonials" className={classes["testimonials"]}>
      {/* heading */}
      <h2 className={classes["testimonials__heading"]}>
        <span className={classes["testimonials__heading__testimonial"]}>
          Testimonials
          <span
            className={`${pacifico.className} ${classes["testimonials__heading__letter"]}`}
          >
            T
          </span>
        </span>
        <span>and</span>
        <span className={classes["testimonials__heading__rewiev"]}>
          <span>Rewievs</span>

          <span
            className={`${pacifico.className} ${classes["testimonials__heading__letter"]}`}
          >
            R
          </span>
        </span>
      </h2>

      {/* content */}
      <div ref={content} className={classes["content"]}>
        <div
          className={`${classes["content__img-box"]} ${
            intersection ? classes["content__img-box__active"] : ""
          }`}
        >
          <Image src={main} alt="happy costumer during paragliding flight" />
        </div>

        <div
          className={`${classes["content__text-box"]} ${
            intersection ? classes["content__text-box__active"] : ""
          }`}
        >
          <p>
            Passengers from around the world have had the pleasure of flying
            with Omar Barabadze, and their testimonials speak volumes about his
            exceptional skills and service. Here's what some of his satisfied
            customers have to say:
          </p>

          {/* TESTIMONIALS */}
          <Swiper
            className={classes["test-slider"]}
            slidesPerView={1}
            spaceBetween={"30px"}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {TESTIMONISLAS_DATA.map((item) => (
              <SwiperSlide key={item.id}>
                <Testimonial
                  person={item.img}
                  country={item.country}
                  testimonial={item.testimonial}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsReviews;
