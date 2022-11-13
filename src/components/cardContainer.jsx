import React, { useEffect } from "react";
import Card from "./common/card";
import card1 from "../images/card-1.jpg";
import card2 from "../images/card-2.jpg";
import card3 from "../images/card-3.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const CardContainer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="container tips">
      <div className="row">
        <div
          className="col-lg-4 offset-lg-4 col-8 offset-2 text-center"
          data-aos="fade-up"
        >
          <h2>Quick Career tip</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="row g-3 my-3" data-aos="fade-up">
        <Card
          title="Apps in the IT world"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          image={card1}
        />
        <Card
          title="Smartest Application Bussiness."
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          image={card2}
        />
        <Card
          title="Design your apps in your way."
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          image={card3}
        />
      </div>
    </div>
  );
};

export default CardContainer;
