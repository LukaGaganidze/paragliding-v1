import React from "react";

import Hero from "./hero/Hero";
import WinterSeasonParagliding from "./WinterSeasonParagliding/WinterSeasonParagliding";
import SummerSeasonParagliding from "./SummerSeasonParagliding/SummerSeasonParagliding";
import BookingFeature from "./BookingFeature/Booking Feature";

const FlightInfo = () => {
  return (
    <div>
      <Hero />
      <WinterSeasonParagliding />
      <SummerSeasonParagliding />
      <BookingFeature />
    </div>
  );
};

export default FlightInfo;
