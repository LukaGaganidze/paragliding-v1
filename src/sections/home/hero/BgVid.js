"use client";
import classes from "./BgVid.module.scss";

const BgVid = () => {
  return (
    <video className={classes["video"]} muted loop autoPlay>
      <source
        className={classes["video__content"]}
        src="./flight.mp4"
        type="video/mp4"
      />
    </video>
  );
};

export default BgVid;
