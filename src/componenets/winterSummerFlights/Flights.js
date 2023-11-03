"use client";
import React, { useEffect, useState, useRef } from "react";

import classes from "./Flights.module.scss";

import FeaturedFlightCardWinter from "@/componenets/cards/FeaturedFlightCardWinter";
import FeaturedFlightCardSummer from "@/componenets/cards/FeaturedFlightCardSummer";

const WinterFlights = ({ season, cardsData }) => {
  const seasonRef = useRef();
  const [seasonVisible, setSeasonVisible] = useState(false);

  // INTERSECTION OBSERVER
  useEffect(() => {
    // INTERSECTIONOBSERVER FUNCTION
    const seasonObserverFunction = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setSeasonVisible(true);
      }
    };

    // INTERSECTION OBSERVER OPTIONS
    const options = {
      root: null,
      threshold: 0.2,
      rootMargin: "",
    };

    // INTERSECTION OBSERVER
    const seasonObserver = new IntersectionObserver(
      seasonObserverFunction,
      options
    );

    // OBSERVE
    if (seasonRef.current) {
      seasonObserver.observe(seasonRef.current);
    }

    //CLEANUP FUNCTION
    return () => {
      if (seasonRef.current) seasonObserver.unobserve(seasonRef.current);
    };
  });

  return (
    <div
      ref={seasonRef}
      className={`${classes["flight"]} ${classes["season-in"]}  ${
        seasonVisible ? classes["season-in__active"] : ""
      }`}>
      <ul className={classes["flight__featured"]}>
        {cardsData.map((el) => (
          <li key={el.id} className={classes["flight__featured__li"]}>
            {season === "Winter" ? (
              <FeaturedFlightCardWinter
                img={el.img}
                start={el.start}
                airtime={el.airtime}
                landing={el.landing}
                price={el.price}
                flightType={el.flightType}
              />
            ) : (
              <FeaturedFlightCardSummer
                img={el.img}
                start={el.start}
                airtime={el.airtime}
                landing={el.landing}
                price={el.price}
                flightType={el.flightType}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WinterFlights;
