import React from "react";
import Link from "next/link";

import classes from "./Menu.module.scss";

const Menu = () => {
  return (
    <div className={classes["menu"]}>
      <h2>Menu</h2>
      <ul>
        <li>
          <Link href="#">Book Flight</Link>
        </li>
        <li>
          <Link href="#">Flight Info</Link>
        </li>
        <li>
          <Link href="#">Pilot</Link>
        </li>
        <li>
          <Link href="#">Gallery</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
