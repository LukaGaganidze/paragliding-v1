import React from "react";
import Image from "next/image";
import Link from "next/link";

import classes from "./HeroSocMediaIcons.module.scss";

// SOCIAL MEDIA ICONS
import viber from "../../assets/soc-media-icons/viber.jpg";
import telegram from "../../assets/soc-media-icons/telegram.jpg";
import whatsapp from "../../assets/soc-media-icons/whatsapp.jpg";

const HeroSocMediaIcons = () => {
  return (
    <>
      {/* SOC MEDIA ICONS */}
      <div className={classes["icons"]}>
        {/* VIBER */}
        <Link
          href="https://viber.click/995599460052"
          target="_blank"
          className={`${classes["icons--individual"]} ${classes["icons--individual--whatsapp"]}`}
        >
          <Image
            className={classes["icons--individual--img"]}
            src={viber}
            alt="Social media, Viber logo"
          />

          {/* HOVER STATE */}
          <div
            className={`${classes["icons--individual--hover"]} ${classes["icons--individual--hover--viber"]}`}
          >
            <span>Viber</span>
          </div>
        </Link>

        {/* TELEGRAM */}
        <div
          className={`${classes["icons--individual"]} ${classes["icons--individual--telegram"]}`}
        >
          <Image
            className={classes["icons--individual--img"]}
            src={telegram}
            alt="Social media, Telegram logo"
          />

          {/* HOVER STATE */}
          <div
            className={`${classes["icons--individual--hover"]} ${classes["icons--individual--hover--telegram"]}`}
          >
            <span>Telegram</span>
          </div>
        </div>

        {/* WHATSAPP*/}
        <Link
          href="https://wa.link/eiteyy"
          target="_blank"
          className={`${classes["icons--individual"]} ${classes["icons--individual--whatsapp"]}`}
        >
          <Image
            className={classes["icons--individual--img"]}
            src={whatsapp}
            alt="Social media, WhatsApp logo"
          />

          {/* HOVER STATE */}
          <div
            className={`${classes["icons--individual--hover"]} ${classes["icons--individual--hover--whatsapp"]}`}
          >
            <span>WhatsApp</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default HeroSocMediaIcons;
