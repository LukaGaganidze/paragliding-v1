import React from "react";
import Link from "next/link";

import { Pacifico } from "next/font/google";

import classes from "./MenuHome.module.scss";

import { useMenuContext } from "@/context/MenuContext";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

const MenuHome = ({ className }) => {
  const { closeMenu } = useMenuContext();

  return (
    <div className={`${className} ${classes["menu-home"]}`}>
      <Link
        onClick={closeMenu}
        href="https://wa.link/eiteyy"
        target="_blank"
        className={classes["menu-home__img1-box"]}
      >
        <div></div>
        <span className={pacifico.className}>Book Flight</span>
      </Link>

      <Link
        onClick={closeMenu}
        href={"/#winter"}
        className={classes["menu-home__img2-box"]}
      >
        <div></div>
        <span className={pacifico.className}>Flight Pacages</span>
      </Link>

      <Link
        onClick={closeMenu}
        href={"/#pilot"}
        className={classes["menu-home__img3-box"]}
      >
        <div></div>
        <span className={pacifico.className}>Your Pilot</span>
      </Link>
    </div>
  );
};

export default MenuHome;
