import BackgroundImages from "./componenets/backgroundImages";

import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={classes["hero"]}>
      <BackgroundImages />
    </div>
  );
};

export default Hero;
