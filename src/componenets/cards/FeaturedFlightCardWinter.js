import React from "react";

import classes from "./FeaturedFlightCardWinter.module.scss";
import Image from "next/image";
import Link from "next/link";

// href="https://wa.link/eiteyy"
// target="_blank"

const FeaturedFlightCardWinter = ({ img, start, airtime, landing }) => {
  return (
    <div className={classes["test"]}>
      <div className={classes["card"]}>
        <div
          className={`${classes["card__side"]} ${classes["card__side--front"]}`}
        >
          <div className={`${classes["card__picture"]}`}>
            <Image
              className={classes["card__picture__img"]}
              src={img}
              alt="Paragliding Picture"
            />
          </div>
          <div className={classes["card__details"]}>
            <ul>
              <li>
                <p>Pacage Name:</p>
                <p></p>
              </li>
              <li>
                <span>start:</span> <span>{start}M above sea level</span>
              </li>
              <li>
                <span>airtime:</span> {airtime}
              </li>
              <li>
                <span>landing:</span> {landing}M above sea level
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`${classes["card__side"]} ${classes["card__side--back"]} ${classes["card__side--back-1"]}`}
        >
          <div className={classes["card__cta"]}>
            <div className={classes["card__price-box"]}>
              <p className={classes["card__price-only"]}>Only</p>
              <p className={classes["card__price-value"]}>$297</p>
            </div>
            <div className={classes["book-now-box"]}>
              <Link
                href="https://wa.link/eiteyy"
                target="_blank"
                className={classes["book-now"]}
              >
                Book Flight
              </Link>
            </div>
            <div>
              <Link href="/info#winter-season" className={classes["more-info"]}>
                More info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFlightCardWinter;
