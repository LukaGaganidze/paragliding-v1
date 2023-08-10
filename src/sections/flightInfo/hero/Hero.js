import BackgroundImages from "./componenets/backgroundImages";

import classes from "./Hero.module.scss";

import { Lilita_One, Caveat } from "next/font/google";

import Image from "next/image";
const bagel = Lilita_One({ subsets: ["latin"], weight: ["400"] });
const caveat = Caveat({ subsets: ["latin"], weight: ["400"] });

import mobileBackground from "../../../assets/pages/flightInfo/FlightInfoHero/info-background-mobile.jpg";

const Hero = () => {
  return (
    <div className={classes["hero"]}>
      {/* Desktop BACKGROUND */}
      <BackgroundImages className={classes["mobile-vers"]} />

      {/* MOBILE BACKGROUND */}
      <Image
        className={classes["mobile-vers-background"]}
        alt="paragliding in cluds"
        src={mobileBackground}
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      {/* HEADING */}
      <h2 className={classes["hero__main-heading"]}>
        {/* primary */}
        <span
          className={`${bagel.className} ${classes["hero__main-heading__title"]}`}
        >
          <span className={classes["non-special"]}>Breathtaking </span>
          <span
            className={`${classes["hero__main-heading__special"]} ${caveat.className}`}
          >
            Paragliding
          </span>{" "}
          <span className={classes["non-special"]}>Experience</span>
        </span>

        {/* secondary */}
        <span className={classes["hero__main-heading__secondary"]}>
          <span>
            whether it's the lush greenery of{" "}
            <span
              className={`${classes["hero__main-heading__secondary__special"]} ${classes["hero__main-heading__secondary__special__summer"]} ${caveat.className}`}
            >
              Summer
            </span>{" "}
          </span>

          <span>
            or the enchanting{" "}
            <span
              className={`${classes["hero__main-heading__secondary__special"]} ${classes["hero__main-heading__secondary__special__winter"]} ${caveat.className}`}
            >
              Winter
            </span>{" "}
            wonderland.
          </span>
        </span>
      </h2>

      <a className={classes["learn-mre-desc"]} href={"#seasons"}>
        <span></span> <span>Learn More</span>
      </a>
      <a className={classes["learn-more-mobile"]} href={"#winter-season"}>
        <span></span> <span>Learn More</span>
      </a>
    </div>
  );
};

export default Hero;
