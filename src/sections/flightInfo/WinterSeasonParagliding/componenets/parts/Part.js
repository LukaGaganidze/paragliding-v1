"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

import classes from "./Part.module.scss";

import Image from "next/image";

import { Bad_Script } from "next/font/google";
const caveat = Bad_Script({ subsets: ["latin"], weight: ["400"] });

const Part = ({ image, text, imgLeftSide, heading, button }) => {
  // Part
  const partRef = useRef();
  const [partVisible, setpartVisible] = useState(false);

  // INTERSECTION OBSERVER
  useEffect(() => {
    // INTERSECTIONOBSERVER FUNCTION part
    const partObserverFunction = (entries) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        setpartVisible(true);
      }
    };

    // INTERSECTION OBSERVER OPTIONS part
    const options = {
      root: null,
      threshold: 0,
      rootMargin: "",
    };

    // INTERSECTION OBSERVER part
    const partObserver = new IntersectionObserver(
      partObserverFunction,
      options
    );

    // OBSERVE part
    if (partRef.current) {
      partObserver.observe(partRef.current);
    }

    //CLEANUP FUNCTION
    return () => {
      if (partRef.current) partObserver.unobserve(partRef.current);
    };
  });

  return (
    <>
      {imgLeftSide ? (
        <div
          ref={partRef}
          className={`${classes["part"]} ${classes["similar"]} ${
            classes[partVisible ? "active" : ""]
          }`}
        >
          <Image
            loading="lazy"
            placeholder="blur"
            src={image}
            alt="Summer enviroment and paragliding"
          />
          <div className={classes["text-box"]}>
            <h3
              className={`${caveat.className} ${classes["similar__heading"]} ${classes["part__heading"]}`}
            >
              {heading}
            </h3>
            <p>{text}</p>

            {button && (
              <Link
                className={classes["booking-btn"]}
                href="https://wa.link/eiteyy"
                target="_blank"
              >
                Book Flight
              </Link>
            )}
          </div>
        </div>
      ) : (
        <div
          ref={partRef}
          className={`${classes["part-reverse"]} ${classes["similar"]} ${
            classes[partVisible ? "active" : ""]
          }`}
        >
          <div className={classes["text-box"]}>
            <h3
              className={`${caveat.className} ${classes["similar__heading"]} ${classes["part-reverse__heading"]}`}
            >
              {heading}
            </h3>
            <p>{text}</p>
          </div>
          <Image src={image} alt="Summer enviroment and paragliding" />
        </div>
      )}
    </>
  );
};

export default Part;
