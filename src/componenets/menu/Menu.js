"use client";

import { useMenuContext } from "@/context/MenuContext";
import React from "react";

import classes from "./Menu.module.scss";

// COMPONENETS
import NavigationMenu from "./navigation/Navigation";

// PAGES
import MenuHome from "./pageComponenets/menuHome/MenuHome";
import MenuBook from "./pageComponenets/menuBook/MenuBook";
import MenuPilot from "./pageComponenets/menuPilot/MenuPilot";
import MenuInfo from "./pageComponenets/menuInfo/MenuInfo";
import MenuContacts from "./pageComponenets/menuContact/MenuContacts";

const Menu = () => {
  const { menuState, closeMenu } = useMenuContext();

  const { menuHome } = useMenuContext();
  const { menuBook } = useMenuContext();
  const { menuInfo } = useMenuContext();
  const { menuPilot } = useMenuContext();
  const { menuContact } = useMenuContext();

  return (
    <div
      className={`${classes["menu"]} ${
        classes[menuState ? "menu__active" : "menu__inactive"]
      }`}
    >
      {/* CLOSE BUTTON ABSOLUTELY POSITIONED  */}
      <div onClick={closeMenu} className={classes["close-container"]}>
        <div className={classes["leftright"]}></div>
        <div className={classes["rightleft"]}></div>
        <label className={classes["close"]}>close</label>
      </div>

      {/* MENU COMPONENETS */}
      <div className={classes["navigation-container"]}>
        <NavigationMenu />
      </div>

      {/* MAIN CONTENT OF THE MENU */}
      <div className={classes["main-content"]}>
        {menuHome && <MenuHome className={classes["main-content__item"]} />}
        {menuBook && <MenuBook className={classes["main-content__item"]} />}
        {menuPilot && <MenuPilot className={classes["main-content__item"]} />}
        {menuInfo && <MenuInfo className={classes["main-content__item"]} />}
        {menuContact && (
          <MenuContacts className={classes["main-content__item"]} />
        )}
      </div>
    </div>
  );
};

export default Menu;
