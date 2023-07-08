import Link from "next/link";
import React from "react";
import Image from "next/image";

import PhoneSVG from "@/assets/svg/contact/PhoneSVG";
import PapaerClip from "@/assets/svg/contact/PaperClip";
import PlacePin from "@/assets/svg/contact/PlacePin";

// contanct icons
import telegram from "../../../assets/svg/contact/telegram.png";
import viber from "../../../assets/svg/contact/viber.png";
import watsapp from "../../../assets/svg/contact/watsapp.png";

import classes from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div className={classes["contacts"]}>
      <h2>Contact</h2>

      {/* CONTANCT */}
      <div className={classes["icons-box"]}>
        <Link href="#" className={`${classes["icons-box__link"]}`}>
          <Image src={telegram} alt="telegram logo" />
        </Link>

        <Link href="#" className={classes["icons-box__link"]}>
          <Image src={viber} alt="viber logo" />
        </Link>

        <Link href="#" className={classes["icons-box__link"]}>
          <Image src={watsapp} alt="watsapp logo" />
        </Link>
      </div>

      {/* INFO */}
      <ul className={classes["info-box"]}>
        <li>
          <Link className={classes["info-box__info"]} href="#">
            <PhoneSVG className={classes["info-box__svg"]} />
            <span>+995 599 46 00 52</span>
          </Link>
        </li>

        <li>
          <Link className={classes["info-box__info"]} href="#">
            <PapaerClip className={classes["info-box__svg"]} />
            <span>Write an email</span>
          </Link>
        </li>

        <li>
          <Link className={classes["info-box__info"]} href="#">
            <PlacePin className={classes["info-box__svg"]} />
            <span className={classes["info-box__place"]}>
              Vartsla Mountain, Gudauri, გუდაური 4702
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
