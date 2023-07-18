import DestinationItem from "./DestinationItem";

import classes from "./Destination.module.scss";

import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"], weight: ["400"] });

const TRAVEL_DATA = [
  {
    city: "BATUMI",
  },
  {
    city: "TBILISI",
  },
  {
    city: "KUTAISI",
  },
  {
    city: "KAZBEGI",
  },
];

const Destination = () => {
  return (
    <div className={classes["destination-container"]}>
      <h2 className={oswald.className}>
        Reach Gudauri from Different Cities: Small Guide for Travelers
      </h2>
      <div className={classes["destination"]}>
        {TRAVEL_DATA.map((item) => (
          <DestinationItem city={item.city} />
        ))}
      </div>
    </div>
  );
};

export default Destination;

// onMouseEnter={} onMouseLeave={}
