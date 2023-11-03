import React from "react";

import Image from "next/image";
import Link from "next/link";
import map from "./mapImg/panormaGudauri.png";

import classes from "./FooterMap.module.scss";

const FooterMap = () => {
  return (
    <Link
      className={classes["map"]}
      href="https://www.google.com/maps/place/parachute/@42.4980922,44.4478999,811m/data=!3m1!1e3!4m14!1m7!3m6!1s0x404529ba491d13ff:0x7a62c4474d2749da!2sPanorama+Gudauri!8m2!3d42.4920609!4d44.452711!16s%2Fg%2F11bx569c1x!3m5!1s0x40452999d5bca6df:0xf58adee8c277e46!8m2!3d42.499045!4d44.446041!16s%2Fg%2F11pzrl06kq!5m1!1e4?hl=en&entry=ttu"
      target="_blank">
      <Image src={map} alt="gudauri paragliding place on the map" />
    </Link>
  );
};

export default FooterMap;
