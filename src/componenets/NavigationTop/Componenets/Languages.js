import React from "react";
import classes from "./Languages.module.scss";

const Languages = ({ sticky }) => {
  // SWITCH LANGUAGES

  return (
    <>
      {sticky ? (
        <div className={classes["menu-transparent"]}>
          <select className={classes["menu-transparent__select"]}>
            <option value="EN">EN</option>
            <option value="RU">RU</option>
            <option value="AR">AR</option>
          </select>
        </div>
      ) : (
        <div className={classes["menu-white"]}>
          <select className={classes["menu-white__select"]}>
            <option value="EN">EN</option>
            <option value="RU">RU</option>
            <option value="AR">AR</option>
          </select>
        </div>
      )}
    </>
  );
};

export default Languages;
