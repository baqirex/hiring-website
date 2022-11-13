import React from "react";
import PrivacyList from "./common/privacyList";
import ProductList from "./common/productList";

const Footer = () => {
  return (
    <div className="container">
      <footer className="py-5">
        <div className="row">
          <ProductList />
          <PrivacyList />
          <ProductList />

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary mybtn" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>&copy; 2022 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-dark" href="#">
                {/* <svg className="bi" width="24" height="24">
                  <use xlink:href="#twitter" />
                </svg> */}
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                {/* <svg className="bi" width="24" height="24">
                  <use xlink:href="#instagram" />
                </svg> */}
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                {/* <svg className="bi" width="24" height="24">
                  <use xlink:href="#facebook" />
                </svg> */}
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
