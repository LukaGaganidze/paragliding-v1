"use client";
import React, { useEffect, useRef, useState } from "react";

import classes from "./WinterSeasonParagliding.module.scss";

import Part from "./componenets/parts/Part";
import Slider from "./componenets/slider/Slider";

import WinterFlights from "@/componenets/winterSummerFlights/Flights";

// MAIN IMAGES
import mainImg1 from "../../../assets/pages/flightInfo/winterFlights/main/pic1.jpg";
import mainImg2 from "../../../assets/pages/flightInfo/winterFlights/main/pic2.jpg";
import mainImg3 from "../../../assets/pages/flightInfo/winterFlights/main/pic3.jpg";
import mainImg4 from "../../../assets/pages/flightInfo/winterFlights/main/pic4.jpg";
import mainImg5 from "../../../assets/pages/flightInfo/winterFlights/main/pic5.jpg";
import mainImg6 from "../../../assets/pages/flightInfo/winterFlights/main/pic6.jpg";
import mainImg7 from "../../../assets/pages/flightInfo/winterFlights/main/pic7.jpg";

import { Pacifico } from "next/font/google";
const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

// PARTS DATA
const PARTS_DATA = [
  {
    image: mainImg1,
    heading: "Winter Paragliding Experience",
    text: (
      <>
        <span>winter paragliding </span>
        experience in the enchanting resort of
        <span> Gudauri</span>. If you've never tried paragliding before, fear
        not! This is an adventure for everyone, regardless of prior experience.
        Prepare to embrace the magic of the winter season as you take flight
        amidst the breathtaking beauty of Gudauri's snowy landscapes.
      </>
    ),
    imgLeftSide: true,
    id: 1,
    button: false,
  },
  {
    image: mainImg2,
    heading: "The Winter Paragliding Season",
    text: (
      <>
        <span>Winter paragliding in Gudauri</span> runs{" "}
        <span>from December 10 to April 15</span>, offering you a unique
        opportunity to discover the wonder of flying during this magical time of
        the year. As the pristine snow covers the landscapes, Gudauri transforms
        into a winter wonderland, making your paragliding adventure even more
        unforgettable.
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
        Take to the skies at impressive altitudes, <span>starting</span> your{" "}
        <span>flight</span> from an{" "}
        <span>elevation of 2750 to 3006 meters above sea level.</span> As you
        soar through the winter air, you'll enjoy an average{" "}
        <span> airtime of 15-25 minutes</span>, allowing you to savor every
        moment of the adventure. Your <span>landing spot</span> awaits at a
        height of <span>2200 meters above sea level</span>, offering a smooth
        and gentle descent back to the earth.
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
        Our winter paragliding packages come complete with{" "}
        <span>everything you need</span> for a comfortable and thrilling flight.
        The flight price includes: <span>HD quality video:</span>
        Capture every exhilarating moment of your flight in stunning clarity
        with our high-definition video recording. <span>
          Warm clothing:
        </span>{" "}
        Stay cozy and snug as you glide through the crisp winter air with our
        specially provided warm clothing. <span>Special footwear:</span>
        We've got you covered with appropriate footwear to ensure your comfort
        and safety during take-off and landing.{" "}
        <span>Gloves and flight equipment:</span> For your convenience and
        safety, we provide gloves and all necessary flight equipment to enhance
        your winter paragliding experience.
      </>
    ),
    imgLeftSide: false,
    id: 4,
    button: false,
  },
  {
    image: mainImg5,
    heading: "The Benefits of Winter Paragliding in Gudauri",
    text: (
      <>
        Experience the awe-inspiring <span>beauty of Gudauri</span> draped in a
        soft white blanket of snow, creating a picturesque and dreamy landscape.
        Winter paragliding offers a serene and peaceful ambiance, providing a
        sense of calm as you glide through the clear winter skies. Witness the
        stunning contrast of snow-covered mountains against the clear blue
        skies, offering views like no other. Crisp and Clear Conditions: Enjoy
        optimal flying conditions with refreshing winter air and clear skies
        that enhance visibility and create a delightful flying experience.
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
        <span>Before taking flight</span> , ensure that you are{" "}
        <span>dressed warmly</span>, wearing comfortable clothing suitable for
        winter conditions. Don't forget to wear <span>sturdy footwear</span> to
        make your take-off and landing smooth and secure. Our professional
        pilots will guide you through the process, making your winter
        paragliding experience safe, exhilarating, and unforgettable.
      </>
    ),
    imgLeftSide: false,
    id: 6,
    button: false,
  },
  {
    image: mainImg7,
    heading: "Book Your Winter Paragliding Adventure",
    text: (
      <>
        Are you ready to embark on an extraordinary winter paragliding journey
        in Gudauri? <span>Book your flight now</span> and prepare to experience
        the magic of soaring through the snowy skies.{" "}
        <span>Our team is excited to welcome you</span> to this thrilling winter
        adventure!
      </>
    ),
    imgLeftSide: true,
    id: 7,
    button: true,
  },
];

// FLIGHT DATA

const WINTER_DATA = [
  {
    img: winterOne,
    start: "3006",
    airtime: "5-10",
    landing: "2200",
    id: 1,
    price: "120$",
  },
  {
    img: winterTwo,
    start: "3006",
    airtime: "15-20",
    landing: "2200",
    id: 2,
    price: "170$",
  },
  {
    img: winterThree,
    start: "3006",
    airtime: "25-30",
    landing: "2200",
    id: 3,
    price: "250$",
  },
];

// WINTER
import winterOne from "../../../assets/paragliding-winter/winter-1.jpg";
import winterTwo from "../../../assets/paragliding-winter/winter-2.jpg";
import winterThree from "../../../assets/paragliding-winter/winter-3.jpg";

const WinterSeasonParagliding = () => {
  // HEADINF
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

  return (
    <section id="winter-season" className={classes["winter-sec"]}>
      <h2
        ref={headingRef}
        className={`${classes[seasonVisible ? "winter-sec__active" : ""]} ${
          classes["winter-sec__heading"]
        }`}
      >
        Winter Season Paragliding
        <span className={pacifico.className}>WINTER</span>
      </h2>

      {PARTS_DATA.map((part) => (
        <Part
          key={part.id}
          image={part.image}
          text={part.text}
          imgLeftSide={part.imgLeftSide}
          heading={part.heading}
          button={part.button}
        />
      ))}

      <div className={classes["winter-sec__winter"]}>
        <WinterFlights cardsData={WINTER_DATA} booking={true} season="Winter" />
      </div>

      <Slider />
    </section>
  );
};

export default WinterSeasonParagliding;
