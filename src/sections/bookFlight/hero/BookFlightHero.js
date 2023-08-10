import React from "react";
import Image from "next/image";

import classes from "./BookFlightHero.module.scss";

import heroImage from "../../../assets/pages/bookFlight/hero.jpg";
import MinimalistivArrow from "@/assets/svg/MinimalitivArrow";

// GOOLE FONTS
import { Lilita_One, Caveat } from "next/font/google";
const bagel = Lilita_One({ subsets: ["latin"], weight: ["400"] });
const caveat = Caveat({ subsets: ["latin"], weight: ["400"] });

const BookFlightHero = () => {
  return (
    <section className={classes["hero"]}>
      {/* ABSOLUTELY POSITIONED BACKGROUND IMAGE */}
      <div className={classes["hero__img-box"]}>
        <Image
          src={heroImage}
          alt="Tandem paraglidng in clouds"
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      {/* HERO CONTENT */}
      {/* heading */}
      <h2 className={`${classes["heading"]} ${bagel.className}`}>
        <span className={classes["heading__text-box"]}>
          <span
            className={`${classes["heading__text"]} ${classes["heading__simple"]}`}
          >
            Simple
          </span>
          <span
            className={`${classes["heading__text"]} ${classes["heading__secondary"]}`}
          >
            three step flight
          </span>
          <span
            className={`${classes["heading__text"]} ${classes["heading__reservation"]}`}
          >
            Reservation
          </span>
        </span>
      </h2>

      {/* STEPS */}
      <div className={`${classes.steps} ${caveat.className}`}>
        {/* step 1 */}
        <div className={classes["steps__box"]}>
          <span className={classes["steps__box__num"]}>1</span>
          <span className={classes["steps__box__desc"]}>
            contact flight manager
          </span>
        </div>
        {/* step 2 */}
        <div className={classes["steps__box"]}>
          <span className={classes["steps__box__num"]}>2</span>
          <span className={classes["steps__box__desc"]}>
            recieve avalable date/time
          </span>
        </div>
        {/* step 3 */}
        <div className={classes["steps__box"]}>
          <span className={classes["steps__box__num"]}>3</span>
          <span className={classes["steps__box__desc"]}>book your flight!</span>
        </div>
      </div>

      {/* SVG */}
      <a href="#guide" className={classes["svg-containter"]}>
        <MinimalistivArrow className={classes["svg-containter__svg"]} />
      </a>
    </section>
  );
};

export default BookFlightHero;
