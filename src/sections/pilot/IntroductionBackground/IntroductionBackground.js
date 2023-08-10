import React from "react";
import Link from "next/link";
import Image from "next/image";

import classes from "./IntroductionBackground.module.scss";

// IMAGES
import cover from "../../../assets/pages/pilot/cover.jpg";
import pilot from "../../../assets/pages/pilot/pilot-omo.jpg";

const IntroductionBackground = () => {
  return (
    <div className={classes["intro"]}>
      {/* heading */}

      {/* LEFT SIDE */}
      <div className={classes["intro__left-side"]}>
        <h2 className={classes["intro__heading"]}>
          <span>Welcome to the personal page of</span>
          <span>Omar Barabadze</span>
          <span>
            <strong>officially certified</strong> paragliding pilot from Georgia
          </span>
        </h2>

        <Link href="https://wa.link/eiteyy" target="_blank">
          Book Flight
        </Link>
      </div>

      {/* RIGHT SIDE */}
      {/* SECONDARY TEXT / BOOKING */}
      <div className={classes["intro__right-side"]}>
        <div className={classes["intro__right-side__img"]}>
          <Image src={pilot} alt="pilot omar barabadze personal image" />
        </div>
      </div>

      <Image
        className={classes["main-background-image"]}
        src={cover}
        alt="bachground cover image of paragliding pilot personal page"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default IntroductionBackground;
