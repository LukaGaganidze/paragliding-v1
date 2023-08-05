import React from "react";
import Link from "next/link";

import classes from "./MenuInfo.module.scss";

import { Pacifico } from "next/font/google";
const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

const MenuInfo = ({ className }) => {
  return (
    <div className={`${className} ${classes["menu-info"]}`}>
      <Link href={"/"} className={classes["menu-info__img1-box"]}>
        <div></div>
        <span className={pacifico.className}>Summer Flight</span>
      </Link>

      <Link href={"/"} className={classes["menu-info__img2-box"]}>
        <div></div>
        <span className={pacifico.className}>Winter Flight</span>
      </Link>
    </div>
  );
};

export default MenuInfo;
