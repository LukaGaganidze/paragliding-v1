import React from "react";
import classes from "./OmosPersonalInfo.module.scss";

import Link from "next/link";

import PhoneSVG from "@/assets/svg/contact/PhoneSVG";
import PapaerClip from "@/assets/svg/contact/PaperClip";
import PlacePin from "@/assets/svg/contact/PlacePin";

const OmosPersonalInfo = () => {
  return (
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
  );
};

export default OmosPersonalInfo;
