import React from "react";

import SocMediaIcons from "@/componenets/socMediaIcons/SocMediaIcons";

import classes from "./SocMedia.module.scss";

const SocMedia = () => {
  return (
    <div className={classes["soc-media"]}>
      <h2>Social Media</h2>

      <SocMediaIcons />
    </div>
  );
};

export default SocMedia;
