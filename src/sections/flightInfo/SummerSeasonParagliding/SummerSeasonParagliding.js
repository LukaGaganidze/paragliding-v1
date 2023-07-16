"use client";

import React, { useEffect, useRef, useState } from "react";

import classes from "./SummerSeasonParagliding.module.scss";

import Image from "next/image";
import Link from "next/link";

// MAIN IMAGES
import mainImg1 from "../../../assets/pages/flightInfo/SummerFlights/main/pic1.jpg";
import mainImg2 from "../../../assets/pages/flightInfo/SummerFlights/main/pic2.jpg";
import mainImg3 from "../../../assets/pages/flightInfo/SummerFlights/main/pic3.jpg";
import mainImg4 from "../../../assets/pages/flightInfo/SummerFlights/main/pic4.jpg";
import mainImg5 from "../../../assets/pages/flightInfo/SummerFlights/main/pic5.jpg";
import mainImg6 from "../../../assets/pages/flightInfo/SummerFlights/main/pic6.jpg";
import mainImg7 from "../../../assets/pages/flightInfo/SummerFlights/main/pic7.jpg";

import Part from "./componenets/parts/Part";
import Slider from "./componenets/slider/Slider";

import { Bad_Script, Pacifico } from "next/font/google";
const caveat = Bad_Script({ subsets: ["latin"], weight: ["400"] });
const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

const SummerSeasonParagliding = () => {
  // HEADING
  const headingRef = useRef();
  const [seasonVisible, setHeadingVisible] = useState(false);

  // INTERSECTION OBSERVER
  useEffect(() => {
    // INTERSECTIONOBSERVER FUNCTION HEADING
    const headingObserverFunction = (entries) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        setHeadingVisible(true);
      }
    };

    // INTERSECTION OBSERVER OPTIONS HEADING
    const options = {
      root: null,
      threshold: 0,
      rootMargin: "",
    };

    // INTERSECTION OBSERVER HEADING
    const headingObserver = new IntersectionObserver(
      headingObserverFunction,
      options
    );

    // OBSERVE HEADING
    if (headingRef.current) {
      headingObserver.observe(headingRef.current);
    }

    //CLEANUP FUNCTION
    return () => {
      if (headingRef.current) headingObserver.unobserve(headingRef.current);
    };
  });

  // PARTS DATA
  const PARTS_DATA = [
    {
      image: mainImg1,
      heading: "Summer Paragliding Experience",
      text: (
        <>
          Prepare for an <span>unforgettable paragliding adventure</span> in the{" "}
          <span>summer wonderland of Gudauri</span>. Whether you're a seasoned
          paraglider or a first-timer,{" "}
          <span>there's nothing to fear as we invite everyone</span> to
          experience the thrill and beauty of summer paragliding in the stunning
          resort of Gudauri.
        </>
      ),
      imgLeftSide: true,
      id: 1,
      button: false,
    },
    {
      image: mainImg2,
      heading: "The Summer Paragliding Season",
      text: (
        <>
          <span>From April 16 to December 10</span>, Gudauri transforms into a
          paradise of warm weather and picturesque landscapes, creating the
          perfect backdrop for your <span>summer paragliding</span> adventure.
          Embrace the beauty of the summer season as you take flight amidst the
          clear blue skies and lush greenery.
        </>
      ),
      imgLeftSide: false,
      id: 2,
      button: true,
    },
    {
      image: mainImg3,
      heading: "An Elevated Experience",
      text: (
        <>
          Embark on your <span>summer flight</span> at an impressive altitude,
          <span>starting from 2750 to 3006 meters above sea level</span>. As you
          glide through the summer air, enjoy an average{" "}
          <span>airtime of 15-25 minutes</span>, allowing you to fully immerse
          yourself in the breathtaking views and sensations. Your landing awaits
          at a height of 2200 meters above sea level, ensuring a smooth and
          gentle descent back to the earth.
        </>
      ),
      imgLeftSide: true,
      id: 3,
      button: false,
    },
    {
      image: mainImg4,
      heading: "All-Inclusive Flight Package",
      text: (
        <>
          Our summer paragliding packages come complete with{" "}
          <span>everything you need</span> for a comfortable and thrilling
          flight. The flight price includes: <span>HD quality video</span>.
          <span>Warm clothing</span>: Even in the summer, we ensure your comfort
          with specially provided warm clothing for higher altitudes.
          <span>Gloves and flight equipment</span>: For your convenience and
          safety, we offer gloves and all necessary flight equipment to enhance
          your summer paragliding experience.
        </>
      ),
      imgLeftSide: false,
      id: 4,
      button: false,
    },
    {
      image: mainImg5,
      heading: "The Benefits of Summer Paragliding in Gudauri",
      text: (
        <>
          <span>Panoramic Views</span>: Witness the awe-inspiring beauty of
          Gudauri from above. <span>Clear Skies</span>: Take advantage of clear
          summer skies, providing optimal visibility and a chance to fly near
          the clouds. <span>Green Landscapes</span>: Enjoy the vibrant greenery
          and meadows of Gudauri in full bloom. <span>Warmer Air</span>: Embrace
          the pleasant summer temperatures, ensuring a comfortable and enjoyable
          flight experience. <span>Engaging Flight</span>: Experience a diverse
          flight with the opportunity to fly near rocky cliffs, waterfalls, and
          other natural formations.
          <span>Family-Friendly</span>: Summer paragliding welcomes everyone,
          making it the perfect adventure for families and friends to enjoy
          together.
        </>
      ),
      imgLeftSide: true,
      id: 5,
      button: false,
    },
    {
      image: mainImg6,
      heading: "Prepare for Your Flight",
      text: (
        <>
          <span>Prepare for Your Flight</span>: As you prepare for your summer
          paragliding adventure, ensure you wear comfortable clothing suitable
          for the weather. Don't forget to bring your sense of adventure and
          enthusiasm as our professional pilots guide you through a safe and
          exhilarating flight.
        </>
      ),
      imgLeftSide: false,
      id: 6,
      button: false,
    },
    {
      image: mainImg7,
      heading: "Prepare for Your Flight",
      text: (
        <>
          <span>Prepare for Your Flight</span>: As you prepare for your summer
          paragliding adventure, ensure you wear comfortable clothing suitable
          for the weather. Don't forget to bring your sense of adventure and
          enthusiasm as our professional pilots guide you through a safe and
          exhilarating flight.
        </>
      ),
      imgLeftSide: true,
      id: 7,
      button: true,
    },
  ];

  return (
    <section id="summer-season" className={classes["summer-sec"]}>
      <h2
        ref={headingRef}
        className={`${classes[seasonVisible ? "summer-sec__active" : ""]} ${
          classes["summer-sec__heading"]
        }`}
      >
        Summer Season Paragliding
        <span className={pacifico.className}>SUMMER</span>
      </h2>

      {PARTS_DATA.map((item) => (
        <Part
          key={item.id}
          image={item.image}
          heading={item.heading}
          text={item.text}
          imgLeftSide={item.imgLeftSide}
          button={item.button}
        />
      ))}

      <Slider />
    </section>
  );
};

export default SummerSeasonParagliding;
