import React from "react";
import Link from "next/link";

import classes from "./MenuPilot.module.scss";

import { Pacifico } from "next/font/google";
const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
const MenuPilot = ({ className }) => {
  return (
    <div className={`${className} ${classes["menu-info"]}`}>
      <Link href={"/"} className={classes["menu-info__img1-box"]}>
        <div></div>
        <span className={pacifico.className}>Pilot Omar</span>
      </Link>

      <Link href={"/"} className={classes["menu-info__img2-box"]}>
        <div></div>
        <span className={pacifico.className}>Qualification</span>
      </Link>

      <Link href={"/"} className={classes["menu-info__img3-box"]}>
        <div></div>
        <span className={pacifico.className}>Testimonials</span>
      </Link>
    </div>
  );
};

export default MenuPilot;
