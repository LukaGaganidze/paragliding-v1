import React from "react";
import Link from "next/link";

import classes from "./NavLinks.module.scss";

const NavLinks = ({ sticky }) => {
  return (
    <ul className={classes["link-box"]}>
      <li className={classes["link-list"]}>
        <Link
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
