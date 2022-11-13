import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card" style={{ width: "280px", height: "370px" }}>
        <img src={image} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
