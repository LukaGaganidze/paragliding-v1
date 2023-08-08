import classes from "./Footer.module.scss";
import Menu from "./menu/Menu";
import BookFlight from "./bookFlight/BookFlight";
import SocMedia from "./socMedia/SocMedia";
import Contacts from "./contancts/Contacts";
import FooterMap from "./map/FooterMap";

const Footer = () => {
  return (
    <div className={classes["footer__background"]}>
      <div className={classes["footer"]}>
        <BookFlight />
        <Menu />
        <SocMedia />
        <Contacts />
        <FooterMap />
      </div>
    </div>
  );
};
export default Footer;
