"use client";
import React, { useState } from "react";
import Image from "next/image";

import summerParaglifing from "../../../assets/pages/flightInfo/introduction/summer.jpg";
import winterParaglifing from "../../../assets/pages/flightInfo/introduction/winter.jpg";

// WINTER
import WinterSeason from "./componenets/winter/WinterSeason";
import WinterHalf from "./componenets/winter/WinterHalf";
import WinterInactive from "./componenets/winter/WinterInactive";

// SUMMER
import SummerSeason from "./componenets/summer/SummerSeason";
import SummerHalf from "./componenets/summer/SummerHalf";
import SummerInactive from "./componenets/summer/SummerInactive";

import classes from "./Intro.module.scss";

const Intro = () => {
  const [winterActive, setWinterActive] = useState(false);
  const [summerActive, setSummerActive] = useState(false);
  const [notIntersectionBoth, setNotIntersectionBoth] = useState(true);

  return (
    <section
      onMouseEnter={() => {
        setNotIntersectionBoth(false);
      }}
      onMouseLeave={() => setNotIntersectionBoth(true)}
      className={classes["introduciton"]}
      id="seasons"
    >
      {/* WINTER */}
      <div
        onMouseEnter={() => {
          setWinterActive(true);
        }}
        onMouseLeave={() => setWinterActive(false)}
        className={`${classes["winter"]} ${
          classes[winterActive ? "winter__active" : "winter__inActive"]
        } ${classes[notIntersectionBoth ? "winter__not-intersecting" : ""]}`}
      >
        {/* ABSOLUTELY POSITIONED MAGE */}
        <Image
          className={classes["winter__img"]}
          src={winterParaglifing}
          alt="summer paragliding background image"
        />
        {/* ACTIVE STATE */}
        {winterActive && <WinterSeason />}

        {/* INCTIVE STATE */}
        {summerActive && <WinterInactive />}

        {/* 50 / 50 STATE */}
        {notIntersectionBoth && <WinterHalf />}
      </div>

      {/* SUMMER */}
      <div
        onMouseEnter={() => {
          setSummerActive(true);
        }}
        onMouseLeave={() => setSummerActive(false)}
        className={`${classes["summer"]} ${
          classes[summerActive ? "summer__active" : "summer__inActive"]
        } ${classes[notIntersectionBoth ? "summer__not-intersecting" : ""]}`}
      >
        {/* ABSOLUTELY POSITIONED MAGE */}
        <Image
          className={classes["summer__img"]}
          src={summerParaglifing}
          alt="summer paragliding background image"
        />

        {/* ACTIVE STATE */}
        {summerActive && <SummerSeason />}

        {/* INCTIVE STATE */}
        {winterActive && <SummerInactive />}

        {/* 50 / 50 STATE */}
        {notIntersectionBoth && <SummerHalf />}
      </div>
    </section>
  );
};

export default Intro;
