import React from "react";

import Hero from "./hero/Hero";
import Intro from "./Introduction/Intro";
import WinterSeasonParagliding from "./WinterSeasonParagliding/WinterSeasonParagliding";
import SummerSeasonParagliding from "./SummerSeasonParagliding/SummerSeasonParagliding";

const FlightInfo = () => {
  return (
    <div>
      <Hero />
      <Intro />
      <WinterSeasonParagliding />
      <SummerSeasonParagliding />
    </div>
  );
};

export default FlightInfo;
