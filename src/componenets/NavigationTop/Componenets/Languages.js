import React from "react";
import classes from "./Languages.module.scss";
import { useState } from "react";

import ArrowDownSVG from "@/assets/svg/ArrowDownSVG";

const Languages = ({ sticky }) => {
  // SWITCH LANGUAGES
  const [langOptions, setLangOptions] = useState(false);

  const langClickHAndler = () => {
    setLangOptions((prev) => !prev);
  };

  return (
    <div
      className={`${classes["language-box"]} ${
        classes[langOptions ? "language-box-active" : ""]
      }`}
    >
      <div onClick={langClickHAndler} className={classes["language"]}>
        <span
          className={`${classes["language-lang"]} ${
            classes[!sticky ? "dark-text" : ""]
          }`}
        >
          EN
        </span>
        <div className={classes["svg-box"]}>
          <ArrowDownSVG
            className={`${classes["svg"]} ${
              classes[!sticky ? "dark-svg" : ""]
            }`}
          />
        </div>
      </div>

      {/* lang options */}
      {langOptions && (
        <div className={classes["language-box--optional"]}>
          <ul>
            <li>
              <a className={`${classes[!sticky ? "dark-text" : ""]}`}>EN</a>
            </li>
            <li>
              <a className={`${classes[!sticky ? "dark-text" : ""]}`}>GE</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Languages;
