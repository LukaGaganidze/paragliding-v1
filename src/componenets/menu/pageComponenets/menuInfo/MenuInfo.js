import React from "react";
import Link from "next/link";

import classes from "./MenuInfo.module.scss";

import { Pacifico } from "next/font/google";
const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

import { useMenuContext } from "@/context/MenuContext";

const MenuInfo = ({ className }) => {
  const { closeMenu } = useMenuContext();

  return (
    <div className={`${className} ${classes["menu-info"]}`}>
      <Link
        onClick={closeMenu}
        href={"/info#winter-season"}
        className={classes["menu-info__img2-box"]}
      >
        <div></div>
        <span className={pacifico.className}>Winter Flight</span>
      </Link>

      <Link
        onClick={closeMenu}
        href={"/info#summer-season"}
        className={classes["menu-info__img1-box"]}
      >
        <div></div>
        <span className={pacifico.className}>Summer Flight</span>
      </Link>
    </div>
  );
};

export default MenuInfo;
