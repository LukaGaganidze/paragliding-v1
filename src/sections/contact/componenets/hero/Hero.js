import React from "react";

// import Link from "next/link";

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
      <BackgroundVideo />

      {/* CONTENT */}
      {/* HEADING */}
      <div className={classes["hero__heading"]}>
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
