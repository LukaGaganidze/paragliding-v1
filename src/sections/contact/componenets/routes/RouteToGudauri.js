import { useRef } from "react";

import { Bad_Script, Pacifico } from "next/font/google";

import classes from "./RouteToGudauri.module.scss";

import Route from "./componenets/Route";

import batumi from "../../../../assets/pages/contact/maps/batumi.png";
import tbilisi from "../../../../assets/pages/contact/maps/tbilisi.png";
import kazbegi from "../../../../assets/pages/contact/maps/kazbegi.png";
import kutaisi from "../../../../assets/pages/contact/maps/kutaisi.png";

// const caveat = Bad_Script({ subsets: ["latin"], weight: ["400"] });
const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

const ROUTES_DATA = [
  {
    to: "Tbilisi to Gudauri",
    distance: "Approximately 120 kilometers (75 miles)",
    travelTime: "Around 2.5 to 3 hours",
    route:
      "From Tbilisi, take the Georgian Military Highway (also known as the E117) heading north towards Vladikavkaz, Russia. The scenic drive will take you through picturesque landscapes and the Jvari Pass. Gudauri is located along the way, and you'll pass through the town as you ascend the mountain roads",

    map: tbilisi,
    id: "tbilisi",
    link: "https://www.google.com/maps/dir/%E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98/%E1%83%92%E1%83%A3%E1%83%93%E1%83%90%E1%83%A3%E1%83%A0%E1%83%98/@42.083323,44.0794676,9z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x40440cd7e64f626b:0x61d084ede2576ea3!2m2!1d44.8015168!2d41.6938026!1m5!1m1!1s0x404528fdf2ee8197:0xf2c31d07053611a4!2m2!1d44.4804723!2d42.4755394?hl=en&entry=ttu",
    left: true,
  },
  {
    to: "Batumi to Gudauri",
    distance: "Approximately 520 kilometers (323 miles)",
    travelTime: "Around 7 to 8 hours",
    route:
      "From Batumi, take the E70 highway and head east towards Kutaisi. Then continue on the E60 towards Tbilisi. After reaching Tbilisi, follow the route mentioned in the Tbilisi to Gudauri section (described above)",

    map: batumi,
    id: "batumi",
    link: "https://www.google.com/maps/dir/Batumi/%E1%83%92%E1%83%A3%E1%83%93%E1%83%90%E1%83%A3%E1%83%A0%E1%83%98/@42.0532572,41.8891992,8z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x406786304ea2d221:0x7a3053a9e12ea967!2m2!1d41.6404899!2d41.6460978!1m5!1m1!1s0x404528fdf2ee8197:0xf2c31d07053611a4!2m2!1d44.4804723!2d42.4755394?hl=en&entry=ttu",
    left: false,
  },
  {
    to: "Kazbegi to Gudauri",
    distance: "Approximately 100 kilometers (62 miles)",
    travelTime: "Around 2 to 2.5 hours",
    route:
      "From Stepantsminda (Kazbegi), follow the Georgian Military Highway (E117) southbound. The road will lead you through the picturesque mountains, and you'll eventually reach Gudauri.",

    map: kazbegi,
    id: "kazbegi",
    link: "https://www.google.com/maps/dir/Kazbegi/%E1%83%92%E1%83%A3%E1%83%93%E1%83%90%E1%83%A3%E1%83%A0%E1%83%98/@42.5844554,44.3792755,11z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x405acbc1cf745771:0x5767800fbf47922d!2m2!1d44.5111983!2d42.6947216!1m5!1m1!1s0x404528fdf2ee8197:0xf2c31d07053611a4!2m2!1d44.4804723!2d42.4755394?hl=en&entry=ttu",
    left: true,
  },
  {
    to: "Kutaisi to Gudauri",
    distance: "Approximately 260 kilometers (162 miles)",
    travelTime: "Around 4 to 5 hours",
    route:
      "From Kutaisi, take the E60 highway and head east towards Tbilisi. After reaching Tbilisi, follow the route mentioned in the Tbilisi to Gudauri section (described above)",

    map: kutaisi,
    id: "kutaisi",
    link: "https://www.google.com/maps/dir/Kutaisi/%E1%83%92%E1%83%A3%E1%83%93%E1%83%90%E1%83%A3%E1%83%A0%E1%83%98/@42.1802227,43.0807986,9z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x405c8ce30e54af2d:0xfbec41b2d626656f!2m2!1d42.7060404!2d42.2718354!1m5!1m1!1s0x404528fdf2ee8197:0xf2c31d07053611a4!2m2!1d44.4804723!2d42.4755394?hl=en&entry=ttu",
    left: false,
  },
];

const RouteToGudauri = () => {
  const refference = useRef();

  return (
    <section id="travel-guide" className={classes["to-gudauri-sec"]}>
      <h2 ref={refference} className={`${classes["to-gudauri-sec__heading"]}`}>
        <span className={`${classes["to-gudauri-sec__heading__main"]}}`}>
          Reach Gudauri from
        </span>
        <div className={`${classes["to-gudauri-sec__heading__sub"]} `}>
          <span className={pacifico.className}>Guide</span>
        </div>
      </h2>
      <div>
        {ROUTES_DATA.map((item) => (
          <Route
            to={item.to}
            distance={item.distance}
            travelTime={item.travelTime}
            route={item.route}
            map={item.map}
            link={item.link}
            id={item.id}
            key={item.id}
            left={item.left}
          />
        ))}
      </div>
    </section>
  );
};

export default RouteToGudauri;
