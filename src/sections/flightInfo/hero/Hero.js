import BackgroundImages from "./componenets/backgroundImages";

import classes from "./Hero.module.scss";

import { Lilita_One, Caveat } from "next/font/google";
const bagel = Lilita_One({ subsets: ["latin"], weight: ["400"] });
const caveat = Caveat({ subsets: ["latin"], weight: ["400"] });

const Hero = () => {
  return (
    <div className={classes["hero"]}>
      {/* BACKGROUND */}
      <BackgroundImages />

      {/* HEADING */}
      <h2 className={classes["hero__main-heading"]}>
        {/* primary */}
        <span
          className={`${bagel.className} ${classes["hero__main-heading__title"]}`}
        >
          Breathtaking{" "}
          <span
            className={`${classes["hero__main-heading__special"]} ${caveat.className}`}
          >
            Paragliding
          </span>{" "}
          Experience
        </span>

        {/* secondary */}
        <span className={classes["hero__main-heading__secondary"]}>
          whether it's the lush greenery of{" "}
          <span
            className={`${classes["hero__main-heading__secondary__special"]} ${classes["hero__main-heading__secondary__special__summer"]} ${caveat.className}`}
          >
            Summer
          </span>{" "}
          or the enchanting{" "}
          <span
            className={`${classes["hero__main-heading__secondary__special"]} ${classes["hero__main-heading__secondary__special__winter"]} ${caveat.className}`}
          >
            Winter
          </span>{" "}
          wonderland.
        </span>
      </h2>

      <a href={"#seasons"}>
        <span></span> <span>Learn More</span>
      </a>
    </div>
  );
};

export default Hero;
