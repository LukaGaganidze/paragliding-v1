import React, { useState } from "react";
import classes from "./navigation.module.scss";

const NavigationMenu = () => {
  const [bookActive, setBookActive] = useState(true);
  const [infoActive, setInfoActive] = useState(false);
  const [pilotActive, sePilotActive] = useState(false);
  const [galleryActive, setGalleryActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  const bookWasClicked = () => {
    setBookActive(true);
    setInfoActive(false);
    sePilotActive(false);
    setGalleryActive(false);
    setContactActive(false);
  };

  const infoWasClicked = () => {
    setBookActive(false);
    setInfoActive(true);
    sePilotActive(false);
    setGalleryActive(false);
    setContactActive(false);
  };

  const pilotWasClicked = () => {
    setBookActive(false);
    setInfoActive(false);
    sePilotActive(true);
    setGalleryActive(false);
    setContactActive(false);
  };

  const galleryWasClicked = () => {
    setBookActive(false);
    setInfoActive(false);
    sePilotActive(false);
    setGalleryActive(true);
    setContactActive(false);
  };

  const contactWasClicked = () => {
    setBookActive(false);
    setInfoActive(false);
    sePilotActive(false);
    setGalleryActive(false);
    setContactActive(true);
  };
  return (
    <ul className={classes["link-box"]}>
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
          onClick={galleryWasClicked}
          className={`${classes["link"]} ${
            classes[galleryActive ? "active" : ""]
          }`}
          href="/"
        >
          Gallery
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
