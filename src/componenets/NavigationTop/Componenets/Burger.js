"use client";

import React from "react";

import classes from "./Burger.module.scss";

import { useMenuContext } from "@/context/MenuContext";

const Burger = ({ sticky }) => {
  // GLOBAL CONTEXT
  const { openMenu } = useMenuContext();

  return (
    <div onClick={openMenu} className={classes["burger-box"]}>
      <div className={classes["burger"]}>
        <span
          className={`${classes["burger--span"]} ${
            classes[!sticky ? "burger--span-dark" : ""]
          }`}
        ></span>
        <span
          className={`${classes["burger--span"]} ${
            classes[!sticky ? "burger--span-dark" : ""]
          }`}
        ></span>
        <span
          className={`${classes["burger--span"]} ${
            classes[!sticky ? "burger--span-dark" : ""]
          }`}
        ></span>
      </div>
    </div>
  );
};

export default Burger;
