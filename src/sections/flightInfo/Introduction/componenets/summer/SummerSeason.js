import classes from "./SummerSeason.module.scss";
import Link from "next/link";

const SummerSeason = () => {
  return (
    <div className={classes["summer"]}>
      <h2>
        <span>Summer Season Paragliding</span>
        <span>Soar Above the Caucasus Mountains in the Summer</span>
      </h2>

      <div className={classes["summer__info"]}>
        <ul>
          <li>
            <span className={classes["summer__info__description"]}>
              Summer Season:
            </span>{" "}
            16th April - 10th December
          </li>
          <li>
            <span className={classes["summer__info__description"]}>
              Flight Duration:
            </span>{" "}
            10 - 30 minutes
          </li>
          <li>
            <span className={classes["summer__info__description"]}>
              Summer Flight Description:
            </span>
            Experience the awe-inspiring beauty of Gudauri from a bird's eye
            view. Witness the picturesque Jvari Cross Pass and marvel at the
            majesty of the Caucasus Mountains. On clear, sunny days, you'll
            touch the clouds, while cloudier weather offers the chance to fly
            near rocky cliffs and a waterfall.
          </li>
        </ul>
      </div>

      {/* ACTION */}
      <div className={classes["summer__action"]}>
        <Link href="https://wa.link/eiteyy" target="_blank">
          Book Flight
        </Link>
        <a
          className={classes["summer__action__more-info"]}
          href={"#summer-season"}>
          <span></span> <span>More Info About Summer Flight</span>
        </a>
      </div>
    </div>
  );
};

export default SummerSeason;
