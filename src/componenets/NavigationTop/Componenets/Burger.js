import React from "react";

import classes from "./Burger.module.scss";

const Burger = ({ sticky }) => {
  return (
    <div className={classes["burger-box"]}>
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
