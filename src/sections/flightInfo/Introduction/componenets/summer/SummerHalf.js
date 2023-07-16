import React from "react";
import Image from "next/image";

import classes from "./SummerHalf.module.scss";

const SummerHalf = () => {
  return (
    <div className={classes["summer-half"]}>
      <h2>
        <span>Summer Season Paragliding</span>
        <span>Soar Above the Caucasus Mountains in the Summer</span>
      </h2>

      <div className={classes["summer-half__info"]}>
        <ul>
          <li>
            <span className={classes["summer-half__info__description"]}>
              Summer Season:
            </span>{" "}
            16th April - 10th December
          </li>
          <li>
            <span className={classes["summer-half__info__description"]}>
              Flight Duration:
            </span>{" "}
            20 - 35 minutes
          </li>
          <li>
            <span className={classes["summer-half__info__description"]}>
              Summer Flight Description:
            </span>{" "}
            Experience the awe-inspiring beauty of Gudauri from a bird's eye
            view. Witness the picturesque Jvari Cross Pass and marvel at the
            majesty of the Caucasus Mountains. On clear, sunny days, you'll
            touch the clouds, while cloudier weather offers the chance to fly
            near rocky cliffs and a waterfall.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SummerHalf;
