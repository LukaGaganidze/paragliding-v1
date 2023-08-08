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
          href="mailto: abc@example.com"
          className={classes["info-box__info"]}
        >
          <PapaerClip className={classes["info-box__svg"]} />
          <span>Write an email</span>
        </Link>
      </li>

      <li>
        <Link
          className={classes["info-box__info"]}
          href="https://www.google.com/maps/place/Russia%E2%80%93Georgia+Friendship+Monument/@42.495588,44.4117619,10513m/data=!3m1!1e3!4m6!3m5!1s0x404529ba491d13ff:0x7a62c4474d2749da!8m2!3d42.4920609!4d44.452711!16s%2Fg%2F11bx569c1x!5m1!1e4?hl=en&entry=ttu"
          target="_blank"
        >
          <PlacePin className={classes["info-box__svg"]} />
          <span className={classes["info-box__place"]}>
            Georgia, Gudauri 4702
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default OmosPersonalInfo;
