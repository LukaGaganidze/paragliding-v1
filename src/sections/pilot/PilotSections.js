import classes from "./Pilot.module.scss";

import BiographyExperience from "./BiographyExperience/BiographyExperience";
import IntroductionBackground from "./IntroductionBackground/IntroductionBackground";
import CertificationsQualifications from "./CertificationsQualifications/CertificationsQualifications";
import GalleryMedia from "./GalleryMedia/GalleryMedia";
import BookingFeature from "./BookingFeature/BookingFeature";
import TestimonialsReviews from "./TestimonialsReviews/TestimonialsReviews";

const Pilot = () => {
  return (
    <div className={classes["pilot-sec"]}>
      <IntroductionBackground />
      <BiographyExperience />
      <CertificationsQualifications />
      <GalleryMedia />
      <BookingFeature />
      <TestimonialsReviews />
    </div>
  );
};

export default Pilot;
