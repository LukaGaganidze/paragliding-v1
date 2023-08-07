"use client";

import { useEffect, useRef, useState } from "react";

import classes from "./TopNavigation.module.scss";

import Burger from "./Componenets/Burger";
import NavLinks from "./Componenets/NavLinks";
import Languages from "./Componenets/Languages";

const TopNavigation = () => {
  // STICKY NAVBAR
  const navbar = useRef();
  const [isVisible, setIsVisible] = useState(true);
  // INTERSECTION OBSERVER
  useEffect(() => {
    // INTERSECTIONOBSERVER FUNCTION
    const stickyNav = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
      if (!entry.isIntersecting) {
        setIsVisible(false);
      }
    };

    // INTERSECTION OBSERVER OPTIONS
    const options = {
      root: null,
      threshold: 0.4,
      rootMargin: "",
    };

    // INTERSECTION OBSERVER
    const navbarObserver = new IntersectionObserver(stickyNav, options);

    // OBSERVE
    navbarObserver.observe(navbar.current);

    //CLEANUP FUNCTION
    return () => {
      if (navbar.current) {
        navbarObserver.unobserve(navbar.current);
      }
    };
  }, []);

  return (
    <div ref={navbar} className={classes["navbar-container"]}>
      <nav
        className={`${classes["navigation"]} ${
          classes[!isVisible ? "sticky" : ""]
        }`}
      >
        <div className={`${classes["navigation--burger-n-links-box"]}`}>
          {/* BURGER */}
          <Burger sticky={isVisible} />

          {/* NAV LINKS */}
          <NavLinks sticky={isVisible} />
        </div>

        {/* LANGUAGE */}
        <Languages sticky={isVisible} />
      </nav>
    </div>
  );
};

export default TopNavigation;
