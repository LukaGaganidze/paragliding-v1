"use client";

import React, { useEffect, useState } from "react";
import classes from "./Hero.module.scss";

import Link from "next/link";

import { Lilita_One, Oswald } from "next/font/google";

// COMPONENETS
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

  return (
    <div className={classes["hero"]}>
      {/* BACKGROUND VIDEO */}
      <BgVid />

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
            href="https://wa.link/eiteyy"
            target="_blank"
          >
            Book Your Flight
          </Link>
        )}
      </h1>
    </div>
  );
};

export default Hero;
