import React from "react";
import Image from "next/image";
import Link from "next/link";

import classes from "./Guide.module.scss";

// STEPS IMAGES
import step1 from "../../../assets/pages/bookFlight/steps-images/step-1.jpg";
import step2 from "../../../assets/pages/bookFlight/steps-images/step-2.jpg";
import step3 from "../../../assets/pages/bookFlight/steps-images/step-3.jpg";

import { Bad_Script, Pacifico } from "next/font/google";
const caveat = Bad_Script({ subsets: ["latin"], weight: ["400"] });
const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

const Guide = () => {
  return (
    <section id="guide" className={classes["guide-sec"]}>
      <h2>
        Booking Guide
        <span className={pacifico.className}>B</span>
      </h2>
      {/* STEP 1 #FFF */}
      <div className={`${classes["step"]} ${classes["step-1"]}`}>
        {/* IMAGE */}
        <div className={classes["step__img-box"]}>
          <Image
            className={classes["step__img-box__img"]}
            alt="s"
            src={step1}
          />
        </div>

        {/* TEXT */}
        <div
          className={`${classes["step__text-box"]} ${classes["step-1__text-box"]}`}
        >
          <span
            className={`${caveat.className} ${classes["step-1__text-box__abs-num"]} ${classes["step__text-box__abs-num"]}`}
          >
            1
          </span>
          <h3>Reach Out to the Flight Manager</h3>
          <p>
            To begin your paragliding adventure,{" "}
            <strong>start by selecting a flight package</strong> and{" "}
            <strong>reaching out to our dedicated Flight Manager</strong> via{" "}
            <Link className={classes["step-1__text-box__whatsapp"]} href="#">
              WhatsApp
            </Link>{" "}
            ,
            <Link className={classes["step-1__text-box__viber"]} href="#">
              Viber
            </Link>
            , or{" "}
            <Link className={classes["step-1__text-box__telegram"]} href="#">
              Telegram
            </Link>{" "}
            .This initial step is crucial to ensure a smooth and personalized
            booking process. By contacting the Flight Manager, you will have the
            opportunity to discuss your preferred flight date and time, ask any
            questions you may have, and receive valuable guidance. This will
            help ensure that your paragliding experience is tailored to your
            needs and expectations.
          </p>
        </div>
      </div>

      {/* STEP 2 #FFF */}
      <div className={`${classes["step"]} ${classes["step-2"]}`}>
        {/* IMAGE */}
        <div
          className={`${classes["step__img-box"]} ${classes["step-2__img-box"]}`}
        >
          <Image
            className={classes["step__img-box__img"]}
            alt="s"
            src={step2}
          />
        </div>

        {/* TEXT */}
        <div
          className={`${classes["step__text-box"]} ${classes["step-2__text-box"]}`}
        >
          <h3>Explore the Flight Schedule</h3>
          <span
            className={`${caveat.className} ${classes["step-2__text-box__abs-num"]} ${classes["step__text-box__abs-num"]}`}
          >
            2
          </span>
          <p>
            Once you've contacted our Flight Manager, it's time to{" "}
            <strong>
              explore the available flight dates and times that match your
              preferences.
            </strong>
            Discuss the flexibility offered in case your preferred dates are not
            available, including alternative options and potential rescheduling.
            Our Flight Manager will work closely with you to find the most
            suitable options, taking into consideration weather conditions,
            pilot availability, and other factors to ensure your safety and
            enjoyment.
          </p>
        </div>
      </div>

      {/* STEP 3 #FFF */}
      <div className={`${classes["step"]} ${classes["step-1"]}`}>
        {/* IMAGE */}
        <div className={classes["step__img-box"]}>
          <Image
            className={classes["step__img-box__img"]}
            alt="s"
            src={step3}
          />
        </div>

        {/* TEXT */}
        <div
          className={`${classes["step__text-box"]} ${classes["step-3__text-box"]}`}
        >
          <h3>Book Your Paragliding Flight</h3>
          <span
            className={`${caveat.className} ${classes["step-3__text-box__abs-num"]} ${classes["step__text-box__abs-num"]}`}
          >
            3
          </span>
          <p>
            After exploring the available flight options, it's time to secure
            your paragliding adventure,{" "}
            <strong>
              step-by-step explanation of the booking process, including any
              required information, payment procedures, and confirmation
              details.
            </strong>{" "}
            This step involves finalizing the booking details and making the
            necessary arrangements to ensure a seamless and hassle-free
            experience for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guide;
