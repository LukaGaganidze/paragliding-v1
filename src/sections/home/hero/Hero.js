"use client";

import React, { useEffect, useState } from "react";
import classes from "./Hero.module.scss";

import Link from "next/link";

import { Lilita_One, Oswald } from "next/font/google";

// COMPONENETS
import HeroSocMediaIcons from "./HeroSocMediaIcons";
import BuyMeACoffee from "./BuyMeACoffee";
import BgVid from "./BgVid";

const bagel = Lilita_One({ subsets: ["latin"], weight: ["400"] });
const oswald = Oswald({ subsets: ["latin"], weight: ["400"] });

const Hero = () => {
  const [btnVisible, setBtnVisible] = useState(false);
  useEffect(() => {
    const btnDelayTiemout = setTimeout(() => {
      setBtnVisible(true);
    }, 500);

    return () => clearTimeout(btnDelayTiemout);
  });

  console.log(btnVisible);
  return (
    <div className={classes["hero"]}>
      {/* BACKGROUND VIDEO */}
      <BgVid />
      {/* SOC MEDIA ICONS */}
      <HeroSocMediaIcons />
      {/* BUY ME A COFFE */}
      <BuyMeACoffee />

      {/* CONTENT */}
      <h1 className={`${bagel.className} ${classes["hero__main-heading"]}`}>
        <span className={classes["hero__main-heading__left"]}>
          Create Lasting Memories
        </span>
        <span className={classes["hero__main-heading__right"]}>
          Unforgettable Paragliding Experience
        </span>

        {btnVisible && (
          <Link
            className={`${oswald.className}  ${classes["hero__booking-btn"]}`}
            href="/"
          >
            Book Your Flight
          </Link>
        )}
      </h1>
    </div>
  );
};

export default Hero;
