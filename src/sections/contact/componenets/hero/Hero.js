import React from "react";
import Image from "next/image";

import mobileBackground from "../../../../assets/pages/contact/hero/backgrougImage/mobileBAckground.jpg";
import mobileBackground2 from "../../../../assets/pages/contact/hero/backgrougImage/mobileBAckground-2.jpg";

import classes from "./Hero.module.scss";

import BackgroundVideo from "./backgroundVid/BackgroundVid";
import Destination from "./componenets/Destination";

import OmosPersonalInfo from "@/componenets/omosPersonalInfo/OmosPersonalInfo";
import ContactsIconsComponenet from "../../../../componenets/contactsIconsComponenet/ContactsIconsComponenet";

import { Lilita_One, Oswald } from "next/font/google";
const bagel = Lilita_One({ subsets: ["latin"], weight: ["400"] });
const oswald = Oswald({ subsets: ["latin"], weight: ["400"] });

const Hero = () => {
  return (
    <section className={classes["hero"]}>
      {/* BACKGROUND VIDEO */}
      <BackgroundVideo className={classes["mobile-version"]} />

      {/* MOBILE */}
      <Image
        className={classes["mobile-vers-background"]}
        src={mobileBackground}
        alt="pirigliding flight"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <Image
        className={classes["mobile-vers-background-2"]}
        src={mobileBackground2}
        alt="pirigliding flight"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      {/* CONTENT */}
      {/* HEADING */}
      <div
        className={`${classes["hero__heading"]} ${classes["mobile-version-heading"]}`}
      >
        <h2 className={bagel.className}>Your Questions - Our Priority</h2>

        <div className={classes["hero__heading__sub"]}>
          <span className={oswald.className}>
            Reach Out for All Your Paragliding Needs
          </span>
          <span className={oswald.className}>
            We're Delighted to Assist You
          </span>
        </div>
      </div>

      {/* CONTACT */}
      <div className={classes["contacts"]}>
        <div className={classes["contacts__personalInfo"]}>
          <OmosPersonalInfo />
        </div>

        <div className={classes["contacts__bridge"]}></div>

        <div className={classes["contacts__contactsIconsComponenet"]}>
          <ContactsIconsComponenet />
        </div>
      </div>

      {/* DESTINATION */}
      <Destination />
    </section>
  );
};

export default Hero;
