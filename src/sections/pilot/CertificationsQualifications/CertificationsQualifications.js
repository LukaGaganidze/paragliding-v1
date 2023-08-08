"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

import { Pacifico } from "next/font/google";

import classes from "./CertificationsQualifications.module.scss";

import certificat from "../../../assets/pages/pilot/certificate/certificate.jpg";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

const CertificationsQualifications = () => {
  const [intersection, setIntersecting] = useState(false);
  const content = useRef();

  // INTERSECTION OBSERVER
  useEffect(() => {
    // INTERSECTIONOBSERVER FUNCTION
    const certificationObserver = (entries) => {
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
    const certificationSecObserver = new IntersectionObserver(
      certificationObserver,
      options
    );

    // OBSERVE
    if (content.current) {
      certificationSecObserver.observe(content.current);
    }

    //CLEANUP FUNCTION
    return () => {
      if (content.current) certificationSecObserver.unobserve(content.current);
    };
  });

  return (
    <section id="certification" className={classes["certification"]}>
      {/* HEADING */}
      <h2 className={classes["certification__heading"]}>
        <span className={classes["certification__heading__certifications"]}>
          Certifications
          <span
            className={`${pacifico.className} ${classes["certification__heading__letter"]}`}
          >
            C
          </span>
        </span>
        <span>and</span>
        <span className={classes["certification__heading__certification"]}>
          <span>Qualifications</span>

          <span
            className={`${pacifico.className} ${classes["certification__heading__letter"]}`}
          >
            Q
          </span>
        </span>
      </h2>

      {/* CONTENT */}
      <div ref={content} className={classes["content"]}>
        {/* ETXT BOX */}
        <p
          className={`${classes["content__text"]} ${
            intersection ? classes["content__text__active"] : ""
          }`}
        >
          <span>
            <span className={classes["content__text__special"]}>
              Omar Barabadze
            </span>
            's paragliding journey has been nothing short of extraordinary.
            holds an impressive array of official paragliding pilot
            certifications. These certifications reflect his commitment to
            maintaining the highest standards of safety and professionalism. By
            continually enhancing his skills and staying updated with the latest
            practices in the industry, Omar ensures that every flight is
            conducted with precision and adherence to safety guidelines.
          </span>
        </p>

        {/* IMG BOX */}
        <div
          className={`${classes["content__img"]} ${
            intersection ? classes["content__img__active"] : ""
          }`}
        >
          <Image src={certificat} alt="certificate" />
        </div>
      </div>
    </section>
  );
};

export default CertificationsQualifications;
