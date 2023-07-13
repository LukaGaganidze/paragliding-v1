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

        <Link href={"#"}>Book Flight</Link>
      </div>

      {/* RIGHT SIDE */}
      {/* SECONDARY TEXT / BOOKING */}
      <div className={classes["intro__right-side"]}>
        <div className={classes["intro__right-side__img"]}>
          <Image src={pilot} alt="pilot omar barabadze personal image" />
        </div>
      </div>

      <div className={classes["intro__background-img"]}>
        <Image
          src={cover}
          alt="bachground cover image of paragliding pilot personal page"
        />
      </div>
    </div>
  );
};

export default IntroductionBackground;
