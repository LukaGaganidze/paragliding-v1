"use client";

import { useMenuContext } from "@/context/MenuContext";
import React from "react";

import classes from "./Menu.module.scss";

// COMPONENETS
import NavigationMenu from "./navigation/Navigation";

const Menu = () => {
  const { menuState, closeMenu } = useMenuContext();
  return (
    <div
      className={`${classes["menu"]} ${
        classes[menuState ? "menu__active" : ""]
      }`}
    >
      {/* CLOSE BUTTON */}
      <div onClick={closeMenu} className={classes["close-container"]}>
        <div className={classes["leftright"]}></div>
        <div className={classes["rightleft"]}></div>
        <label className={classes["close"]}>close</label>
      </div>

      {/* MENU COMPONENETS */}
      <NavigationMenu />
    </div>
  );
};

export default Menu;
