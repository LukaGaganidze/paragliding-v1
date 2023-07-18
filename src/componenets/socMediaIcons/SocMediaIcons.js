import classes from "./SocMediaIcons.module.scss";

import Link from "next/link";
import Image from "next/image";

// soc media icons
import facebook from "../../assets/svg/socmedialogospara/facebook.png";
import instagram from "../../assets/svg/socmedialogospara/instagram.png";
import youtube from "../../assets/svg/socmedialogospara/youtube.png";

const SocMediaIcons = () => {
  return (
    <div className={classes["soc-media__icons"]}>
      <Link
        href="#"
        className={`${classes["soc-media__icons__box"]} ${classes["soc-media__icons__box__fb"]}`}
      >
        <Image src={facebook} alt="facebook logo" />
      </Link>

      <Link href="#" className={classes["soc-media__icons__box"]}>
        <Image src={instagram} alt="instagram logo" />
      </Link>

      <Link href="#" className={classes["soc-media__icons__box"]}>
        <Image src={youtube} alt="youtube logo" />
      </Link>
    </div>
  );
};

export default SocMediaIcons;
