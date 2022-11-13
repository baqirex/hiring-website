import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import header from "../images/header.jpg";
import image1 from "../images/image-1.jpg";
import Presentation from "./common/presentation";
import Head from "./head";

import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Head />
      <div className="px-4 py-5 text-center welcome-header">
        <h1 className="display-5 fw-bold" data-aos="fade-up">
          Welcome to the best hiring platform.
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4" data-aos="fade-up">
            Find the best job for yourself. There are hundreds of jobs posted
            every day. Find the best job for yourself. There are hundreds of
            jobs posted every day. Find the best job for yourself. There are
            hundreds of jobs posted every day. Find the best job for yourself.
            There are hundreds of jobs posted every day.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/signin">
              <button
                type="button"
                className="btn btn-primary btn-lg rounded-pill  mybtn mb-5"
                data-aos="fade-up"
              >
                Get Started
              </button>
            </Link>
          </div>
          <div className="container header-img" data-aos="fade-up">
            <img src={header} height="500px" />
          </div>
          <div className="container px-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
