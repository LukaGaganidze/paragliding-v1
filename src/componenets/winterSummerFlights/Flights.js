"use client";
import React, { useEffect, useState, useRef } from "react";

import classes from "./Flights.module.scss";

import FeaturedFlightCardWinter from "@/componenets/cards/FeaturedFlightCardWinter";
import FeaturedFlightCardSummer from "@/componenets/cards/FeaturedFlightCardSummer";

// GOOLE FONTS
import { Lilita_One, Caveat } from "next/font/google";

const bagel = Lilita_One({ subsets: ["latin"], weight: ["400"] });
const caveat = Caveat({ subsets: ["latin"], weight: ["400"] });

const WinterFlights = ({ season, cardsData, booking }) => {
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
      }`}
    >
      <h2 className={classes["flight__heading"]}>
        {booking ? (
          <span
            className={`${caveat.className} ${
              classes["flight__heading__highlited-booking"]
            }  ${
              season === "Winter"
                ? classes["winter-heading"]
                : classes["summer-heading"]
            }`}
          >
            {season} Flights
          </span>
        ) : (
          <span
            className={`${bagel.className} ${classes["flight__heading__highlited"]}`}
          >
            {season} Flights
          </span>
        )}

        <span className={classes["flight__heading__normal"]}>
          Featured paragliding flight packages for the {season} season{" "}
          {season === "Winter" ? (
            <span className={classes["flight__heading__normal__date"]}>
              December 10 to April 15
            </span>
          ) : (
            <span className={classes["flight__heading__normal__date"]}>
              April 16 to December 9{" "}
            </span>
          )}
        </span>
      </h2>
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
              />
            ) : (
              <FeaturedFlightCardSummer
                img={el.img}
                start={el.start}
                airtime={el.airtime}
                landing={el.landing}
                price={el.price}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WinterFlights;
