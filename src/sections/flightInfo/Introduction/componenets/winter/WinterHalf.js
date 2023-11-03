import React from "react";

import classes from "./WinterHalf.module.scss";

const WinterHalf = () => {
  return (
    <div className={classes["winter-half"]}>
      <h2>
        <span>Winter Season Paragliding</span>
        <span>Soar Above the Caucasus Mountains in the winter</span>
      </h2>

      <div className={classes["winter-half__info"]}>
        <ul>
          <li>
            <span className={classes["winter-half__info__description"]}>
              Winter Season:
            </span>{" "}
            10th December - 15th April
          </li>
          <li>
            <span className={classes["winter-half__info__description"]}>
              Flight Duration:
            </span>{" "}
            10 - 30 minutes
          </li>
          <li>
            <span className={classes["winter-half__info__description"]}>
              Winter Flight Description:
            </span>{" "}
            Discover the mesmerizing beauty of Gudauri in winter as you soar
            over religious and historical landmarks. Listen to the spirit of the
            Caucasus Mountains whispering in your ears, and witness the
            snow-covered landscapes in all their glory.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WinterHalf;
