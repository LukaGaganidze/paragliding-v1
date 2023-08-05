"use client";
import React, { useEffect, useRef } from "react";

import classes from "./ContactPage.module.scss";

import Hero from "./componenets/hero/Hero";
import RouteToGudauri from "./componenets/routes/RouteToGudauri";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 100,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className={classes["contact-page"]}>
      <Hero />
      <RouteToGudauri />
    </div>
  );
};

export default ContactPage;
