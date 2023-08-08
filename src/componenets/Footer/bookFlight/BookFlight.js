import React from "react";
import Link from "next/link";

import classes from "./BookFlight.module.scss";

const BookFlight = () => {
  return (
    <div className={classes["book-flight"]}>
      <h2>Book Flight</h2>

      <div className={classes["book-flight__title"]}>
        <span>Soaring Above Gudauri</span>
        <span>Book Your Unforgettable Paragliding Adventure Today!</span>
      </div>

      <div className={classes["book-flight__link-box"]}>
        <Link
          className={classes["book-flight__link"]}
          href="https://wa.link/eiteyy"
          target="_blank"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};
export default BookFlight;
