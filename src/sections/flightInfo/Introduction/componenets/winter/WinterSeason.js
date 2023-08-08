import Link from "next/link";
import React from "react";

import classes from "./WinterSeason.module.scss";

const WinterSeason = () => {
  return (
    <div className={classes["winter"]}>
      {/* HEADING */}
      <h2>
        <span>Winter Season Paragliding</span>
        <span>Soar Above the Caucasus Mountains in the winter</span>
      </h2>

      {/* INFO */}
      <div className={classes["winter__info"]}>
        <ul>
          <li>
            <span className={classes["winter__info__description"]}>
              Winter Season:
            </span>{" "}
            10th December - 15th April
          </li>
          <li>
            <span className={classes["winter__info__description"]}>
              Flight Duration:
            </span>{" "}
            20 - 35 minutes
          </li>
          <li>
            <span className={classes["winter__info__description"]}>
              Winter Flight Description:
            </span>{" "}
            Discover the mesmerizing beauty of Gudauri in winter as you soar
            over religious and historical landmarks. Listen to the spirit of the
            Caucasus Mountains whispering in your ears, and witness the
            snow-covered landscapes in all their glory.
          </li>
        </ul>
      </div>

      {/* ACTION */}
      <div className={classes["winter__action"]}>
        <Link href="https://wa.link/eiteyy" target="_blank">
          Book Flight
        </Link>
        <a
          className={classes["winter__action__more-info"]}
          href={"#winter-season"}
        >
          <span></span> <span>More Info About Winter Flight</span>
        </a>
      </div>
    </div>
  );
};

export default WinterSeason;
