import React from "react";
import Link from "next/link";

import classes from "./MenuContacts.module.scss";

import { Pacifico } from "next/font/google";
const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

import { useMenuContext } from "@/context/MenuContext";

const MenuContacts = ({ className }) => {
  const { closeMenu } = useMenuContext();

  return (
    <div className={`${className} ${classes["menu-contact"]}`}>
      <Link
        onClick={closeMenu}
        href={"/contact"}
        className={classes["menu-contact__img1-box"]}
      >
        <div></div>
        <span className={pacifico.className}>Contact</span>
      </Link>

      <Link
        onClick={closeMenu}
        href={"/contact#travel-guide"}
        className={classes["menu-contact__img2-box"]}
      >
        <div></div>
        <span className={pacifico.className}>Navigation Guide</span>
      </Link>
    </div>
  );
};

export default MenuContacts;
