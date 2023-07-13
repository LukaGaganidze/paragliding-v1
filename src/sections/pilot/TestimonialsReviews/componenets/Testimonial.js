import React from "react";
import Image from "next/image";

import classes from "./Testimonial.module.scss";

const Testimonial = ({ person, country, testimonial }) => {
  return (
    <div className={classes["testimonial"]}>
      {/* IMG BOX */}
      <div className={classes["testimonial__img"]}>
        <Image
          className={classes["testimonial__img__main"]}
          src={person}
          alt="Testimonial authos small profile image"
        />
        <Image
          className={classes["testimonial__img__country"]}
          src={country}
          alt="Testimonial authos country  image"
        />
      </div>

      {/* TEXT BOX */}
      <p className={classes["testimonial__text"]}>{testimonial}</p>
    </div>
  );
};

export default Testimonial;
