import classes from "./Route.module.scss";
import Image from "next/image";
import Link from "next/link";

// SVG
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoute } from "@fortawesome/free-solid-svg-icons";

const Route = ({ to, distance, travelTime, route, map, link, id, left }) => {
  return (
    <>
      {left ? (
        <div
          id={id}
          className={`${classes["route"]} ${classes["route__left"]}`}
        >
          {/* MAIN CONTENT */}
          <div
            className={`${classes["left-content-box"]} ${classes["content-box"]}`}
          >
            <Link
              className={classes["route__link"]}
              href={link}
              target="_blank"
            >
              <Image src={map} alt={id} />
            </Link>

            {/* CONTENT */}
            <div className={classes["route__content"]}>
              {/* HEADING */}
              <h2>
                {to}{" "}
                <FontAwesomeIcon
                  className={classes["location__icon"]}
                  icon={faRoute}
                />
              </h2>
              <div className={classes["travel-info"]}>
                <ul>
                  <li>
                    <span>Distance</span>: <span>{distance}</span>
                  </li>

                  <li>
                    <span>Travel Time</span>: <span>{travelTime}</span>
                  </li>

                  <li>
                    <span>Route</span>: <span>{route}</span>
                  </li>

                  <li>
                    <span>Distance</span>: <span>{distance}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          id={id}
          className={`${classes["route"]} ${classes["route__right"]}`}
        >
          {/* MAIN CONTENT */}
          <div
            className={`${classes["right-content-box"]} ${classes["content-box"]}`}
          >
            {/* CONTENT */}
            <div className={classes["route__content"]}>
              {/* HEADING */}
              <h2>
                {to}{" "}
                <FontAwesomeIcon
                  className={classes["location__icon"]}
                  icon={faRoute}
                />
              </h2>
              <div className={classes["travel-info"]}>
                <ul>
                  <li>
                    <span>Distance</span>: <span>{distance}</span>
                  </li>

                  <li>
                    <span>Travel Time</span>: <span>{travelTime}</span>
                  </li>

                  <li>
                    <span>Route</span>: <span>{route}</span>
                  </li>

                  <li>
                    <span>Distance</span>: <span>{distance}</span>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              className={classes["route__link"]}
              href={link}
              target="_blank"
            >
              <Image src={map} alt={id} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Route;
