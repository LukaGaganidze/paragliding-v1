import React from "react";
import Link from "next/link";

import { Pacifico } from "next/font/google";

import testPiv from "../../../assets/testimg/paragliding-1.png";
import Image from "next/image";

import classes from "./Pilot.module.scss";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

const Pilot = () => {
  return (
    <section className={classes["pilot"]}>
      <div className={classes["pilot__content"]}>
        <div className={classes["pilot__content__heading"]}>
          <span className={classes["pilot__content__heading__pilot"]}>
            Your Pilot
            <span className={`${pacifico.className}`}>Pilot</span>
          </span>
          <h3 className={classes["pilot__content__heading__name"]}>
            Experienced and Officially Certified Pilot{" "}
            <span>Omar Barabadze</span>
          </h3>
        </div>
        {/* IMAGE */}
        <div className={classes["pilot__content__img-box"]}>
          <Image src={testPiv} alt="paragliding pilot image" />
        </div>

        {/* TEXT CONTENT */}
        <div className={classes["pilot__content__text-box"]}>
          <p>
            Omar Barabadze is an officially certified paragliding pilot from
            Georgia with a remarkable record of flying experience in all weather
            conditions and seasons. He has averaged 5-10 tandem flights per day
            over the last 5 years, showcasing his commitment and dedication to
            his craft. Passengers from around the world consistently award him
            five-star reviews, a testament to his exceptional skills.
          </p>

          <p>
            Omar's professionalism, amiable personality, and fluency in English,
            Russian, and Georgian have garnered praise from countless
            passengers. During each flight, he goes beyond the role of a pilot,
            engaging with passengers and sharing captivating insights about the
            surrounding landscapes and breathtaking views from the sky. This
            interactive approach adds an extra layer of enjoyment to the already
            exhilarating experience.
          </p>

          <p>
            If you're seeking a unique and unforgettable adventure, don't
            hesitate to book a flight with Omar, he's expertise ensures a safe
            and exhilarating journey. Rest assured, embarking on this
            paragliding experience with him will be an incredible memory you'll
            cherish for years to come!
          </p>

          <Link href="#" className={classes["pilot__content__link"]}>
            <div></div>
            <span>More Info</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pilot;
