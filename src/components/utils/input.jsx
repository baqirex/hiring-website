import React from "react";

const Input = ({ name, label, value, onChange, type }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} class="form-label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        className="form-control input"
        aria-describedby="emailHelp"
      />
    </div>
  );
};

export default Input;
