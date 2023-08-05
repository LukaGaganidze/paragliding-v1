import React from "react";
import classes from "./MenuBook.module.scss";

import Link from "next/link";

import { Pacifico } from "next/font/google";
const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

const MenuBook = ({ className }) => {
  return (
    <div className={`${className} ${classes["menu-book"]}`}>
      <Link href={"/"} className={classes["menu-book__img1-box"]}>
        <div></div>
        <span className={pacifico.className}>Booking Guide</span>
      </Link>

      <Link href={"/"} className={classes["menu-book__img2-box"]}>
        <div></div>
        <span className={pacifico.className}>Summer Pacages</span>
      </Link>

      <Link href={"/"} className={classes["menu-book__img3-box"]}>
        <div></div>
        <span className={pacifico.className}>Winter Pacages</span>
      </Link>
    </div>
  );
};

export default MenuBook;
