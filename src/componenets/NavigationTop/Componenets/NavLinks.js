"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import classes from "./NavLinks.module.scss";

import { useMenuContext } from "@/context/MenuContext";
import LocalProgressBar from "../Componenets/LocalProgressBar";

import Router from "next/router";

const NavLinks = ({ sticky }) => {
  // MENU GLOBAL CONTEXT,

  return (
    <ul className={classes["link-box"]}>
      <li className={classes["link-list"]}>
        <Link
          // onClick={homeWasClicked}
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
          // onClick={bookWasClicked}
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
          // onClick={infoWasClicked}
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
          // onClick={pilotWasClicked}
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
          // onClick={contactWasClicked}
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
