import React from "react";

import classes from "./BookFlight.module.scss";

import { Caveat, Pacifico } from "next/font/google";

import BookFlightHero from "./hero/BookFlightHero";
import Guide from "./guide/Guide";
import FlightPacages from "@/componenets/winterSummerFlights/Flights";

// WINTER
import winterOne from "../../assets/paragliding-winter/winter-1.jpg";
import winterTwo from "../../assets/paragliding-winter/winter-2.jpg";
import winterThree from "../../assets/paragliding-winter/winter-3.jpg";

// SUMMER
import summerOne from "../../assets/paragliding-summer/paragliding-summer-1.jpg";
import summerTwo from "../../assets/paragliding-summer/paragliding-summer-2.jpg";
import summerThree from "../../assets/paragliding-summer/paragliding-summer-3.jpg";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
const caveat = Caveat({ subsets: ["latin"], weight: ["400"] });

const WINTER_DATA = [
  {
    img: winterOne,
    start: "3006",
    airtime: "5-10",
    landing: "2200",
    id: 1,
    price: "100$",
  },
  {
    img: winterTwo,
    start: "3006",
    airtime: "5-10",
    landing: "2200",
    id: 2,
    price: "100$",
  },
  {
    img: winterThree,
    start: "3006",
    airtime: "5-10",
    landing: "2200",
    id: 3,
    price: "100$",
  },
];
const SUMMER_DATA = [
  {
    img: summerOne,
    start: "3006",
    airtime: "5-10",
    landing: "2200",
    id: 1,
    price: "100$",
  },
  {
    img: summerTwo,
    start: "3006",
    airtime: "5-10",
    landing: "2200",
    id: 2,
    price: "100$",
  },
  {
    img: summerThree,
    start: "3006",
    airtime: "5-10",
    landing: "2200",
    id: 3,
    price: "100$",
  },
];

const BookFlight = () => {
  return (
    <div className={classes["book-flight"]}>
      <BookFlightHero />
      <Guide />
      <div className={classes["book-flight__pacages"]}>
        <h2
          id="winter-pacages"
          className={classes["book-flight__pacages__heading"]}
        >
          Choose your flight package
          <span
            className={`${pacifico.className} ${classes["background-text"]}`}
          >
            C
          </span>
        </h2>
        <div className={classes["book-flight__winter"]}>
          <h2 className={classes["flight__heading"]}>
            <span
              className={`${caveat.className} ${classes["flight__heading__highlited"]} ${classes["flight__heading__highlited__winter"]}`}
            >
              Winter Flights
            </span>
          </h2>
          <FlightPacages
            cardsData={WINTER_DATA}
            booking={true}
            season="Winter"
          />
        </div>

        <div id="summer-pacages" className={classes["book-flight__summer"]}>
          <h2 className={classes["flight__heading"]}>
            <span
              className={`${caveat.className} ${classes["flight__heading__highlited"]} ${classes["flight__heading__highlited__summer"]}`}
            >
              Summer Flights
            </span>
          </h2>
          <FlightPacages
            cardsData={SUMMER_DATA}
            booking={true}
            season="Summer"
          />
        </div>
      </div>
    </div>
  );
};

export default BookFlight;
