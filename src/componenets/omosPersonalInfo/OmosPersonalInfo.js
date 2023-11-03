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
        <Link href="tel:+995557738263" className={classes["info-box__info"]}>
          <PhoneSVG className={classes["info-box__svg"]} />
          <span>+995 599 46 00 52</span>
        </Link>
      </li>

      <li>
        <Link
          href="mailto: omobarabadzebiz@gmail.com"
          className={classes["info-box__info"]}>
          <PapaerClip className={classes["info-box__svg"]} />
          <span>Write an email</span>
        </Link>
      </li>

      <li>
        <Link
          className={classes["info-box__info"]}
          href="https://www.google.com/maps/place/parachute/@42.4980922,44.4478999,811m/data=!3m1!1e3!4m14!1m7!3m6!1s0x404529ba491d13ff:0x7a62c4474d2749da!2sPanorama+Gudauri!8m2!3d42.4920609!4d44.452711!16s%2Fg%2F11bx569c1x!3m5!1s0x40452999d5bca6df:0xf58adee8c277e46!8m2!3d42.499045!4d44.446041!16s%2Fg%2F11pzrl06kq!5m1!1e4?hl=en&entry=ttu"
          target="_blank">
          <PlacePin className={classes["info-box__svg"]} />
          <span className={classes["info-box__place"]}>Exact Location</span>
        </Link>
      </li>
    </ul>
  );
};

export default OmosPersonalInfo;
