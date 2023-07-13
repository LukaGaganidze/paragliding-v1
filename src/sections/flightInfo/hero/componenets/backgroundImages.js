"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import classes from "./BackgroundImages.module.scss";

// BACKGROUND IMAGES
import img1 from "../../../../assets/pages/flightInfo/FlightInfoHero/img1.jpg";
import img2 from "../../../../assets/pages/flightInfo/FlightInfoHero/img2.jpg";
import img3 from "../../../../assets/pages/flightInfo/FlightInfoHero/img3.jpg";
import img4 from "../../../../assets/pages/flightInfo/FlightInfoHero/img4.jpg";
import img5 from "../../../../assets/pages/flightInfo/FlightInfoHero/img5.jpg";
import img6 from "../../../../assets/pages/flightInfo/FlightInfoHero/img6.jpg";

const BackgroundImages = () => {
  // ACTIVE IMAGE
  const [img, setImg] = useState(img1);

  // INDIVIDUAL IMAGES
  const [img1State, setImg1State] = useState(true);
  const [img2State, setImg2State] = useState(false);
  const [img3State, setImg3State] = useState(false);
  const [img4State, setImg4State] = useState(false);
  const [img5State, setImg5State] = useState(false);
  const [img6State, setImg6State] = useState(false);

  // ZOOM IN EFFECT
  useEffect(() => {
    // FROM IMG 1 TO IMG 2
    if (img === img1) {
      setTimeout(() => {
        setImg2State(true);
      }, 5000);
      setTimeout(() => {
        setImg(img2);
        setImg1State(false);
      }, 6000);
    }

    // FROM IMG 2 TO IMG 3
    if (img === img2) {
      setTimeout(() => {
        setImg3State(true);
      }, 5000);
      setTimeout(() => {
        setImg2State(false);
        setImg(img3);
      }, 6000);
    }

    // FROM IMG 3 TO IMG 4
    if (img === img3) {
      setTimeout(() => {
        setImg4State(true);
      }, 5000);
      setTimeout(() => {
        setImg3State(false);
        setImg(img4);
      }, 6000);
    }

    // FROM IMG 4 TO IMG 5
    if (img === img4) {
      setTimeout(() => {
        setImg5State(true);
      }, 5000);
      setTimeout(() => {
        setImg4State(false);
        setImg(img5);
      }, 6000);
    }

    // FROM IMG 5 TO IMG 6
    if (img === img5) {
      setTimeout(() => {
        setImg6State(true);
      }, 5000);
      setTimeout(() => {
        setImg5State(false);
        setImg(img6);
      }, 6000);
    }

    // FROM IMG 6 TO IMG 1
    if (img === img6) {
      setTimeout(() => {
        setImg1State(true);
      }, 5000);
      setTimeout(() => {
        setImg6State(false);
        setImg(img1);
      }, 6000);
    }
  }, [img]);

  return (
    <>
      {img1State && (
        <Image
          className={`${classes["img"]} ${classes.effect}`}
          src={img}
          alt="paragliding flight in beautiful nature view"
        />
      )}

      {img2State && (
        <Image
          className={`${classes["img"]} ${classes.effect}`}
          src={img2}
          alt="paragliding flight in beautiful nature view"
        />
      )}

      {img3State && (
        <Image
          className={`${classes["img"]} ${classes.effect}`}
          src={img3}
          alt="paragliding flight in beautiful nature view"
        />
      )}

      {img4State && (
        <Image
          className={`${classes["img"]} ${classes.effect}`}
          src={img4}
          alt="paragliding flight in beautiful nature view"
        />
      )}

      {img5State && (
        <Image
          className={`${classes["img"]} ${classes.effect}`}
          src={img5}
          alt="paragliding flight in beautiful nature view"
        />
      )}

      {img6State && (
        <Image
          className={`${classes["img"]} ${classes.effect}`}
          src={img6}
          alt="paragliding flight in beautiful nature view"
        />
      )}
    </>
  );
};

export default BackgroundImages;
