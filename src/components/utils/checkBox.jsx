import React from "react";

const CheckBox = () => {
  return (
    <div className="form-check m-3">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <label className="form-check-label" for="flexCheckDefault">
        <p className="check-box">
          I agree to <a href="#">Privacy Policy</a> and{" "}
          <a href="#">Terms & Conditions</a>
        </p>
      </label>
    </div>
  );
};

export default CheckBox;
