import React from "react";

import Image from "next/image";
import Link from "next/link";
import map from "./mapImg/panormaGudauri.png";

import classes from "./FooterMap.module.scss";

const FooterMap = () => {
  return (
    <Link
      className={classes["map"]}
      href="https://www.google.com/maps/place/Russia%E2%80%93Georgia+Friendship+Monument/@42.495588,44.4117619,10513m/data=!3m1!1e3!4m6!3m5!1s0x404529ba491d13ff:0x7a62c4474d2749da!8m2!3d42.4920609!4d44.452711!16s%2Fg%2F11bx569c1x!5m1!1e4?hl=en&entry=ttu"
      target="_blank"
    >
      <Image src={map} alt="gudauri paragliding place on the map" />
    </Link>
  );
};

export default FooterMap;
