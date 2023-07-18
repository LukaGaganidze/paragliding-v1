"use client";

import classes from "./BackgroundVid.module.scss";

import { useState, useEffect } from "react";

import Image from "next/image";
import backupImage from "../../../../../assets/pages/contact/hero/backgrougImage/contactBackground.jpg";

const BackgroundVideo = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const handleVideoLoaded = () => {
      setIsVideoLoaded(true);
    };

    const videoElement = document.getElementById("background-video");
    videoElement.addEventListener("canplaythrough", handleVideoLoaded);

    return () => {
      videoElement.removeEventListener("canplaythrough", handleVideoLoaded);
    };
  }, []);

  return (
    <>
      {/* IMAGE BEFORE THE VIDEO IS LAODING  */}

      <div className={classes["img-container"]}>
        <Image
          className={`${classes["img-container__img"]} ${
            classes[isVideoLoaded ? "img-container__img-loaded" : ""]
          }`}
          src={backupImage}
          alt="Winter paraglifing image"
        />
      </div>
      {/* BACKGROUND VIDEO */}

      <video
        autoPlay
        muted
        loop
        className={`${classes.video} ${
          isVideoLoaded ? classes.video__active : ""
        }`}
        id="background-video"
      >
        <source
          src="./fligt-contact.mp4"
          type="video/mp4"
          className={classes.video__content}
        />
      </video>
    </>
  );
};

export default BackgroundVideo;
