"use client";

import React from "react";
import Link from "next/link";

import classes from "./NavLinks.module.scss";

import LocalProgressBar from "../Componenets/LocalProgressBar";

import { useMenuContext } from "@/context/MenuContext";

// import { useRouter } from "next/router";

const NavLinks = ({ sticky }) => {
  // MENU GLOBAL CONTEXT,
  const { menuHomeTopNavBar } = useMenuContext();
  const { menuBookTopNavBar } = useMenuContext();
  const { menuInfoTopNavBar } = useMenuContext();
  const { menuPilotTopNavBar } = useMenuContext();
  const { menuContactTopNavBar } = useMenuContext();
  // MENU GLOBAL CONTEXT,
  const { setmenuHomeTopNavBar } = useMenuContext();
  const { setMenuBookTopNavBar } = useMenuContext();
  const { setMenuInfoTopNavBar } = useMenuContext();
  const { setMenuPilotTopNavBar } = useMenuContext();
  const { setMenuContactTopNavBar } = useMenuContext();

  // LOACAL

  const homeWasClicked = () => {
    // GLOBAL
    setmenuHomeTopNavBar(true);
    setMenuBookTopNavBar(false);
    setMenuInfoTopNavBar(false);
    setMenuPilotTopNavBar(false);
    setMenuContactTopNavBar(false);
  };
  const bookWasClicked = () => {
    // GLOBAL
    setMenuBookTopNavBar(true);
    setMenuInfoTopNavBar(false);
    setMenuPilotTopNavBar(false);
    setmenuHomeTopNavBar(false);
    setMenuContactTopNavBar(false);
  };

  const infoWasClicked = () => {
    // GLOBAL
    setMenuBookTopNavBar(false);
    setMenuInfoTopNavBar(true);
    setMenuPilotTopNavBar(false);
    setmenuHomeTopNavBar(false);
    setMenuContactTopNavBar(false);
  };

  const pilotWasClicked = () => {
    // GLOBAL
    setMenuBookTopNavBar(false);
    setMenuInfoTopNavBar(false);
    setMenuPilotTopNavBar(true);
    setmenuHomeTopNavBar(false);
    setMenuContactTopNavBar(false);
  };

  const contactWasClicked = () => {
    // GLOBAL
    setMenuBookTopNavBar(false);
    setMenuInfoTopNavBar(false);
    setMenuPilotTopNavBar(false);
    setmenuHomeTopNavBar(false);
    setMenuContactTopNavBar(true);
  };

  return (
    <ul className={classes["link-box"]}>
      {menuHomeTopNavBar && <LocalProgressBar />}
      {menuBookTopNavBar && <LocalProgressBar />}
      {menuInfoTopNavBar && <LocalProgressBar />}
      {menuPilotTopNavBar && <LocalProgressBar />}
      {menuContactTopNavBar && <LocalProgressBar />}

      <li className={classes["link-list"]}>
        <Link
          onClick={homeWasClicked}
          className={`${classes["link"]} ${
            classes[!sticky ? "dark-text" : ""]
          }`}
          href="/"
        >
          Home
        </Link>
      </li>

      <li className={classes["link-list"]}>
        <Link
          onClick={bookWasClicked}
          className={`${classes["link"]} ${
            classes[!sticky ? "dark-text" : ""]
          }`}
          href="/book"
        >
          Book Flight
        </Link>
      </li>

      <li className={classes["link-box"]}>
        <Link
          onClick={infoWasClicked}
          className={`${classes["link"]} ${
            classes[!sticky ? "dark-text" : ""]
          }`}
          href="/info"
        >
          Flight Info
        </Link>
      </li>

      <li className={classes["link-box"]}>
        <Link
          onClick={pilotWasClicked}
          className={`${classes["link"]} ${
            classes[!sticky ? "dark-text" : ""]
          }`}
          href="/pilot"
        >
          Pilot
        </Link>
      </li>

      <li className={classes["link-box"]}>
        <Link
          onClick={contactWasClicked}
          className={`${classes["link"]} ${
            classes[!sticky ? "dark-text" : ""]
          }`}
          href="/contact"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
