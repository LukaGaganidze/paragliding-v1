import classes from "./FeaturedFlight.module.scss";

import Flights from "../../../componenets/winterSummerFlights/Flights";

// WINTER
import winterOne from "../../../assets/paragliding-winter/winter-1.jpg";
import winterTwo from "../../../assets/paragliding-winter/winter-2.jpg";
import winterThree from "../../../assets/paragliding-winter/winter-3.jpg";

// SUMMER
import summerOne from "../../../assets/paragliding-summer/paragliding-summer-1.jpg";
import summerTwo from "../../../assets/paragliding-summer/paragliding-summer-2.jpg";
import summerThree from "../../../assets/paragliding-summer/paragliding-summer-3.jpg";

const SUMMER_DATA = [
  {
    img: summerOne,
    start: "3006",
    airtime: "5-10",
    landing: "2200",
    id: 1,
    price: "100$",
  },
  {
    img: summerTwo,
    start: "3006",
    airtime: "5-10",
    landing: "2200",
    id: 2,
    price: "100$",
  },
  {
    img: summerThree,
    start: "3006",
    airtime: "5-10",
    landing: "2200",
    id: 3,
    price: "100$",
  },
];

const WINTER_DATA = [
  {
    img: winterOne,
    start: "3006",
    airtime: "5-10",
    landing: "2200",
    id: 1,
    price: "100$",
  },
  {
    img: winterTwo,
    start: "3006",
    airtime: "5-10",
    landing: "2200",
    id: 2,
    price: "100$",
  },
  {
    img: winterThree,
    start: "3006",
    airtime: "5-10",
    landing: "2200",
    id: 3,
    price: "100$",
  },
];

// SUMMER DATA
const FeaturedFlight = () => {
  return (
    <section id="featured" className={classes["featured-flights"]}>
      <div className={classes["featured-flights__heading"]}>
        <h2 className={classes["featured-flights__heading__winter"]}>
          <a href="#winter">Winter Flights</a>
        </h2>
        <h2 className={classes["featured-flights__heading__summer"]}>
          <a href="#summer">Summer Flights</a>
        </h2>
      </div>

      <div className={classes["winter"]} id="winter">
        <Flights season="Winter" cardsData={WINTER_DATA} />
      </div>

      <div className={classes["summer"]} id="summer">
        <Flights cardsData={SUMMER_DATA} season="Summer" />
      </div>
    </section>
  );
};

export default FeaturedFlight;
