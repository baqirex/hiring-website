import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Hiring Web
          </a>
          <button
            className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto text-center mx-auto mb-2 mb-lg-0">
              <li className="nav-item m-2">
                <NavLink className="nav-link navstyle" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item m-2">
                <NavLink className="nav-link navstyle" to="/jobs">
                  Jobs
                </NavLink>
              </li>
              <li className="nav-item m-2">
                <NavLink className="nav-link navstyle" to="/companies">
                  Companies
                </NavLink>
              </li>
              <li className="nav-item m-2">
                <NavLink className="nav-link navstyle" to="/signin">
                  Sign In
                </NavLink>
              </li>
              <li className="nav-item m-2">
                <NavLink className="nav-link navstyle" to="/about">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
