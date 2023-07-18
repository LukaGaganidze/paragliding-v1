import Image from "next/image";
import Link from "next/link";
// contanct icons
import telegram from "../../assets/svg/contact/telegram.png";
import viber from "../../assets/svg/contact/viber.png";
import watsapp from "../../assets/svg/contact/watsapp.png";

import classes from "./ContactsIconsComponenet.module.scss";

const ContactsIconsComponenet = () => {
  return (
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
  );
};

export default ContactsIconsComponenet;
