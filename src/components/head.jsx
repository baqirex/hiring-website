import React, { useEffect } from "react";
import image3 from "../images/image-3.jpg";
import { Link } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

const Head = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div class="container col-xxl-8 px-2 py-2 no-overflow">
        <div class="row flex-lg align-items-center g-5 py-5">
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3" data-aos="fade-right">
              Welcome to Hiring Web
            </h1>
            <p class="lead" data-aos="fade-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis odit quod harum, aperiam labore fugiat. Vitae dolore
              accusamus architecto eveniet.
            </p>
            <Link to="/signin">
              <button
                className="btn btn-primary btn-lg mybtn"
                data-aos="fade-right"
              >
                Get Started
              </button>
            </Link>
          </div>
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              data-aos="fade-left"
              src={image3}
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
