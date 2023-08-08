import React from "react";
import Link from "next/link";

import classes from "./MenuPilot.module.scss";

import { Pacifico } from "next/font/google";
const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

import { useMenuContext } from "@/context/MenuContext";

const MenuPilot = ({ className }) => {
  const { closeMenu } = useMenuContext();

  return (
    <div className={`${className} ${classes["menu-info"]}`}>
      <Link
        onClick={closeMenu}
        href={"/pilot"}
        className={classes["menu-info__img1-box"]}
      >
        <div></div>
        <span className={pacifico.className}>Pilot Omar</span>
      </Link>

      <Link
        onClick={closeMenu}
        href={"/pilot#certification"}
        className={classes["menu-info__img2-box"]}
      >
        <div></div>
        <span className={pacifico.className}>Qualification</span>
      </Link>

      <Link
        onClick={closeMenu}
        href={"/pilot#testimonials"}
        className={classes["menu-info__img3-box"]}
      >
        <div></div>
        <span className={pacifico.className}>Testimonials</span>
      </Link>
    </div>
  );
};

export default MenuPilot;
