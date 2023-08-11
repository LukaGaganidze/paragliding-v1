"use client";

import classes from "./LocalProgressBar.module.scss";

import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 20
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={classes["progress-bar"]}
      style={{
        width: `${progress}%`,
        display: `${progress === 100 ? "none" : "block"}`,
      }}
    ></div>
  );
};

export default ProgressBar;
