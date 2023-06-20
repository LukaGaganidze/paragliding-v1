import Image from "next/image";

import React from "react";
// import video from "video";s
// import require from "require";s

import classes from "./Hero.module.scss";
import paragliding from "../../../assets/paragliding-imgs/paragliding-1.jpg";

const Hero = () => {
  return (
    <div className={classes["hero"]}>
      <div className={classes["hero--img-box"]}>
        <Image className={classes["hero--img"]} src={paragliding} alt="me" />
      </div>
    </div>
  );
};

export default Hero;
