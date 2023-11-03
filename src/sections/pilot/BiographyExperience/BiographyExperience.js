"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import classes from "./BiographyExperience.module.scss";

import secImage from "../../../assets/pages/pilot/biography.jpg";

import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

const BiographyExperience = () => {
  const [intersection, setIntersecting] = useState(false);
  const content = useRef();

  // INTERSECTION OBSERVER
  useEffect(() => {
    // INTERSECTIONOBSERVER FUNCTION
    const biograohyContentObserver = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIntersecting(true);
      }
    };

    // INTERSECTION OBSERVER OPTIONS
    const options = {
      root: null,
      threshold: 0.2,
      rootMargin: "",
    };

    // INTERSECTION OBSERVER
    const contentIntersectionOserver = new IntersectionObserver(
      biograohyContentObserver,
      options
    );

    // OBSERVE
    if (content.current) {
      contentIntersectionOserver.observe(content.current);
    }

    //CLEANUP FUNCTION
    return () => {
      if (content.current)
        contentIntersectionOserver.unobserve(content.current);
    };
  });

  return (
    <section className={classes["experience"]}>
      {/* HEADING */}
      <h2 className={classes["experience__heading"]}>
        <span className={classes["experience__heading__bio"]}>
          Biography
          <span
            className={`${pacifico.className} ${classes["experience__heading__letter"]}`}>
            B
          </span>
        </span>
        <span>and</span>
        <span className={classes["experience__heading__experience"]}>
          <span>Experience</span>

          <span
            className={`${pacifico.className} ${classes["experience__heading__letter"]}`}>
            E
          </span>
        </span>
      </h2>

      {/* CONTENT */}
      <div ref={content} className={classes["content"]}>
        {/* IMG BOX */}
        <div
          className={`${classes["content__img"]} ${
            intersection ? classes["content__img__active"] : ""
          }`}>
          <Image src={secImage} alt="pilot picture with passenger" />
        </div>

        {/* ETXT BOX */}
        <p
          className={`${classes["content__text"]} ${
            intersection ? classes["content__text__active"] : ""
          }`}>
          <span>
            <span className={classes["content__text__special"]}>
              Omar Barabadze
            </span>
            's paragliding journey has been nothing short of extraordinary. With
            an average of 5-10 tandem flights per day over the last 5 years, he
            has mastered the art of soaring through the skies. From competing in
            challenging events to embarking on thrilling flights, Omar's passion
            for paragliding shines through. His dedication, coupled with his
            exceptional piloting abilities, has enabled him to create
            unforgettable memories for countless passengers.
          </span>
        </p>
      </div>
    </section>
  );
};

export default BiographyExperience;
