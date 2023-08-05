import React from "react";
import Link from "next/link";

import classes from "./MenuContacts.module.scss";

import { Pacifico } from "next/font/google";
const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

const MenuContacts = ({ className }) => {
  return (
    <div className={`${className} ${classes["menu-contact"]}`}>
      <Link href={"/"} className={classes["menu-contact__img1-box"]}>
        <div></div>
        <span className={pacifico.className}>Contact</span>
      </Link>

      <Link href={"/"} className={classes["menu-contact__img2-box"]}>
        <div></div>
        <span className={pacifico.className}>Navigation Guide</span>
      </Link>
    </div>
  );
};

export default MenuContacts;
