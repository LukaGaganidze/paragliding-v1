import React from "react";
import Link from "next/link";

import classes from "./Menu.module.scss";

const Menu = () => {
  return (
    <div className={classes["menu"]}>
      <h2>Menu</h2>
      <ul>
        <li>
          <Link href="/book">Book Flight</Link>
        </li>
        <li>
          <Link href="/info">Flight Info</Link>
        </li>
        <li>
          <Link href="/pilot">Pilot</Link>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
