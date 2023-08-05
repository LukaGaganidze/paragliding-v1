import React from "react";
import Link from "next/link";

import { Pacifico } from "next/font/google";

import classes from "./MenuHome.module.scss";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

const MenuHome = ({ className }) => {
  return (
    <div className={`${className} ${classes["menu-home"]}`}>
      <Link href={"/"} className={classes["menu-home__img1-box"]}>
        <div></div>
        <span className={pacifico.className}>Book Flight</span>
      </Link>

      <Link href={"/"} className={classes["menu-home__img2-box"]}>
        <div></div>
        <span className={pacifico.className}>Flight Pacages</span>
      </Link>

      <Link href={"/"} className={classes["menu-home__img3-box"]}>
        <div></div>
        <span className={pacifico.className}>Your Pilot</span>
      </Link>
    </div>
  );
};

export default MenuHome;
