import { useState, useEffect } from "react";
import classes from "./BgVid.module.scss";

import Image from "next/image";
import backupImage from "../../../assets/helper-imgs/optional-image.jpg";

const BackgroundVideo = ({ className }) => {
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
    <div className={className}>
      {/* IMAGE BEFORE THE VIDEO IS LAODING  */}

      <div className={classes["img-container"]}>
        <Image
          className={`${classes["img-container__img"]} ${
            classes[isVideoLoaded ? "img-container__img-loaded" : ""]
          }`}
          src={backupImage}
          alt="Winter paraglifing image"
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
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
          src="./flight.mp4"
          type="video/mp4"
          className={classes.video__content}
        />
      </video>
    </div>
  );
};

export default BackgroundVideo;
