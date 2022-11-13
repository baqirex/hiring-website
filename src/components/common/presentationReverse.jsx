import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const PresentationReverse = ({ heading, description, image }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="container col-xxl-8 px-2 py-2 no-overflow">
      <div className="row flex-lg align-items-center g-5 py-5">
        <div
          className="col-10 col-sm-8 col-lg-6 order-2 order-md-1"
          data-aos="fade-right"
        >
          <img
            src={image}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6 order-1 order-md-2" data-aos="fade-left">
          <h1 className="display-5 fw-bold lh-1 mb-3">{heading}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PresentationReverse;
