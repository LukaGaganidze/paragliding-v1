"use client";

import React, { useState } from "react";

import classes from "./DestinationItem.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoute } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const DestinationItem = ({ city }) => {
  const [mouseEntered, setMouseEntered] = useState(false);

  return (
    <a
      onMouseEnter={() => setMouseEntered(true)}
      onMouseLeave={() => setMouseEntered(false)}
      className={classes["item"]}
    >
      <span className={classes["item__name"]}>
        <span>from</span>
        <span>{city}</span>
      </span>

      <div className={classes["icons"]}>
        {mouseEntered ? (
          <FontAwesomeIcon
            className={classes["location__icon"]}
            icon={faLocationArrow}
          />
        ) : (
          <FontAwesomeIcon
            className={classes["destination__icon"]}
            icon={faRoute}
          />
        )}
      </div>
    </a>
  );
};

export default DestinationItem;
