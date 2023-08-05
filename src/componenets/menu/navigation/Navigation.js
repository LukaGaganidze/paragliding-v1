import React, { useState } from "react";
import classes from "./navigation.module.scss";

import { useMenuContext } from "@/context/MenuContext";

const NavigationMenu = () => {
  const [homeActive, sethomeActive] = useState(true);
  const [bookActive, setBookActive] = useState(false);
  const [infoActive, setInfoActive] = useState(false);
  const [pilotActive, sePilotActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  // MENU GLOBAL CONTEXTsetmenuHome,
  const { setmenuHome } = useMenuContext();
  const { setMenuBook } = useMenuContext();
  const { setMenuInfo } = useMenuContext();
  const { setMenuPilot } = useMenuContext();
  const { setMenuContact } = useMenuContext();

  const bookWasClicked = () => {
    setBookActive(true);
    setInfoActive(false);
    sePilotActive(false);
    sethomeActive(false);
    setContactActive(false);

    // GLOBAL
    setMenuBook(true);
    setMenuInfo(false);
    setMenuPilot(false);
    setmenuHome(false);
    setMenuContact(false);
  };

  const infoWasClicked = () => {
    setBookActive(false);
    setInfoActive(true);
    sePilotActive(false);
    sethomeActive(false);
    setContactActive(false);

    // GLOBAL
    setMenuBook(false);
    setMenuInfo(true);
    setMenuPilot(false);
    setmenuHome(false);
    setMenuContact(false);
  };

  const pilotWasClicked = () => {
    setBookActive(false);
    setInfoActive(false);
    sePilotActive(true);
    sethomeActive(false);
    setContactActive(false);

    // GLOBAL
    setMenuBook(false);
    setMenuInfo(false);
    setMenuPilot(true);
    setmenuHome(false);
    setMenuContact(false);
  };

  const homeWasClicked = () => {
    setBookActive(false);
    setInfoActive(false);
    sePilotActive(false);
    sethomeActive(true);
    setContactActive(false);

    // GLOBAL
    setMenuBook(false);
    setMenuInfo(false);
    setMenuPilot(false);
    setmenuHome(true);
    setMenuContact(false);
  };

  const contactWasClicked = () => {
    setBookActive(false);
    setInfoActive(false);
    sePilotActive(false);
    sethomeActive(false);
    setContactActive(true);

    // GLOBAL
    setMenuBook(false);
    setMenuInfo(false);
    setMenuPilot(false);
    setmenuHome(false);
    setMenuContact(true);
  };

  return (
    <ul className={classes["link-box"]}>
      {/* HOME */}
      <li className={classes["link-list"]}>
        <span
          onClick={homeWasClicked}
          className={`${classes["link"]} ${
            classes[homeActive ? "active" : ""]
          }`}
          href="/"
        >
          Home
        </span>
      </li>

      <li className={classes["link-list"]}>
        <span
          onClick={bookWasClicked}
          className={`${classes["link"]} ${
            classes[bookActive ? "active" : ""]
          }`}
          href="/"
        >
          Book Flight
        </span>
      </li>

      <li className={classes["link-list"]}>
        <span
          onClick={infoWasClicked}
          className={`${classes["link"]} ${
            classes[infoActive ? "active" : ""]
          }`}
          href="/new"
        >
          Flight Info
        </span>
      </li>

      <li className={classes["link-list"]}>
        <span
          onClick={pilotWasClicked}
          className={`${classes["link"]} ${
            classes[pilotActive ? "active" : ""]
          }`}
          href="/"
        >
          Pilot
        </span>
      </li>

      <li className={classes["link-list"]}>
        <span
          onClick={contactWasClicked}
          className={`${classes["link"]} ${
            classes[contactActive ? "active" : ""]
          }`}
          href="/"
        >
          Contact
        </span>
      </li>
    </ul>
  );
};

export default NavigationMenu;
