import React from "react";

import ContactsIconsComponenet from "@/componenets/contactsIconsComponenet/contactsIconsComponenet";
import OmosPersonalInfo from "@/componenets/omosPersonalInfo/OmosPersonalInfo";

import classes from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div className={classes["contacts"]}>
      <h2>Contact</h2>

      {/* CONTACT */}
      <ContactsIconsComponenet />

      {/* INFO */}
      <OmosPersonalInfo />
    </div>
  );
};

export default Contacts;
