import Image from "next/image";
import Link from "next/link";

import classes from "./BuyMeACoffee.module.scss";

import coffee from "../../assets/soc-media-icons/coffee.jpg";
import luffy from "../../assets/svg/luffy.png";

const BuyMeACoffee = () => {
  return (
    <>
      <Link
        target="_blank"
        href="https://www.buymeacoffee.com/LukaWebDev"
        className={classes["icon"]}
      >
        <Image
          className={classes["icon--image"]}
          src={coffee}
          alt="Donation, Buy Me A Coffee logo"
        />
      </Link>

      <div className={classes["content"]}>
        {/* HOVER CONTENT */}
        <div className={classes["content--hover-content"]}>
          <Image
            className={classes["content--hover-content--img"]}
            src={luffy}
            alt="One Piece Luffy Small Logo"
          />
          <span>You can buy me a coffee!</span>
        </div>
      </div>
    </>
  );
};

export default BuyMeACoffee;
