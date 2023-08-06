"use client";
import React, { useEffect, useRef } from "react";

import classes from "./ContactPage.module.scss";

import Hero from "./componenets/hero/Hero";
import RouteToGudauri from "./componenets/routes/RouteToGudauri";

const ContactPage = () => {
  return (
    <div className={classes["contact-page"]}>
      <Hero />
      <RouteToGudauri />
    </div>
  );
};

export default ContactPage;
