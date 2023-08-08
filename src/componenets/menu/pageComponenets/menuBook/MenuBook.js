import React from "react";
import classes from "./MenuBook.module.scss";

import Link from "next/link";

import { Pacifico } from "next/font/google";
const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
import { useMenuContext } from "@/context/MenuContext";

const MenuBook = ({ className }) => {
  const { closeMenu } = useMenuContext();
  return (
    <div className={`${className} ${classes["menu-book"]}`}>
      <Link
        onClick={closeMenu}
        href={"/book#guide"}
        className={classes["menu-book__img1-box"]}
      >
        <div></div>
        <span className={pacifico.className}>Booking Guide</span>
      </Link>

      <Link
        onClick={closeMenu}
        href={"/book#summer-pacages"}
        className={classes["menu-book__img2-box"]}
      >
        <div></div>
        <span className={pacifico.className}>Summer Pacages</span>
      </Link>

      <Link
        onClick={closeMenu}
        href={"/book#winter-pacages"}
        className={classes["menu-book__img3-box"]}
      >
        <div></div>
        <span className={pacifico.className}>Winter Pacages</span>
      </Link>
    </div>
  );
};

export default MenuBook;
