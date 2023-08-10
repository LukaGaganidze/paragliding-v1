"use client";

import React, { useEffect, useState } from "react";
import classes from "./Hero.module.scss";

import Link from "next/link";
import Image from "next/image";

import { Lilita_One, Oswald } from "next/font/google";

// COMPONENETS
import BgVid from "./BgVid";

import backupImage from "../../../assets/helper-imgs/optional-image.jpg";
import mobileImg from "../../../assets/pages/home/mobile/mobilehome.jpg";

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
      {/* {menuHomeTopNavBar && <LocalProgressBar />} */}
      {/* BACKGROUND VIDEO */}
      <BgVid className={classes["mobile-version"]} />

      {/* MOBILE VERSION BACKGROUNDS */}
      <Image
        className={classes["mobile-background-1"]}
        src={backupImage}
        alt="Winter paraglifing image"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      {/* MOBILE VERSION BACKGROUNDS */}
      <Image
        className={classes["mobile-background-2"]}
        src={mobileImg}
        alt="Winter paraglifing image"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />

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
