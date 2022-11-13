import React from "react";

const FooterList = ({ heading, list }) => {
  return (
    <div className="col-6 col-md-2 mb-3">
      <h5>{heading}</h5>
      <ul className="nav flex-column">
        {list.map((item) => (
          <li className="nav-item mb-1">
            <a href="#" className="nav-link p-0 text-muted" key={item}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
