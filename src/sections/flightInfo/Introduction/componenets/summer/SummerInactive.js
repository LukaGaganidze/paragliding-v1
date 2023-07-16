import React from "react";

import classes from "./SummerInactive.module.scss";

import { Caveat } from "next/font/google";
const caveat = Caveat({ subsets: ["latin"], weight: ["400"] });

import DoubbleArr from "@/assets/svg/DoubbleArr";

const SummerInactive = () => {
  return (
    <div className={classes["summer-inactive"]}>
      <div className={classes["summer-inactive__svg"]}>
        <DoubbleArr className={classes["summer-inactive__svg__arr"]} />
      </div>
      <div className={classes["summer-inactive__heading"]}>
        <span className={caveat.className}>S</span>
        <span className={caveat.className}>U</span>
        <span className={caveat.className}>M</span>
        <span className={caveat.className}>M</span>
        <span className={caveat.className}>E</span>
        <span className={caveat.className}>R</span>
      </div>
    </div>
  );
};

export default SummerInactive;
