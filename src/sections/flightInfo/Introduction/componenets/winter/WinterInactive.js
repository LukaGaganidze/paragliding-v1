import React from "react";

import classes from "./WinterInactive.module.scss";

import { Caveat } from "next/font/google";
const caveat = Caveat({ subsets: ["latin"], weight: ["400"] });

import DoubbleArr from "@/assets/svg/DoubbleArr";

const WinterInactive = () => {
  return (
    <div className={classes["winter-inactive"]}>
      <div className={classes["winter-inactive__heading"]}>
        <span className={caveat.className}>W</span>
        <span className={caveat.className}>I</span>
        <span className={caveat.className}>N</span>
        <span className={caveat.className}>T</span>
        <span className={caveat.className}>E</span>
        <span className={caveat.className}>R</span>
      </div>
      <div className={classes["winter-inactive__svg"]}>
        <DoubbleArr className={classes["winter-inactive__svg__arr"]} />
      </div>
    </div>
  );
};

export default WinterInactive;
