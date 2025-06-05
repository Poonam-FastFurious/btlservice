import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logonew/BRAND BELL (1).png";
function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-hr d-flex flex-column align-items-center text-center">
            <div className="d-flex gap-2 align-items-center">
              <hr />
              <h6>Newsletter</h6>
            </div>
            <h3>Get in Touch with Us Today</h3>
            <p>
              Let's Drive Your Brand's Success Together. Contact Us for Tailored
              Vehicle Branding Solutions
            </p>
          </div>
          <form
            id="footer-form"
            className="d-flex justify-content-between flex-md-row flex-sm-column flex-column gap-md-0 gap-sm-4 gap-4"
          >
            <div id="footer-message"></div>
            <input type="email" required placeholder="Enter your mail" />
            <button type="submit" className="btn_hover1">
              Get Started
            </button>
          </form>
        </div>
        <div className="footer-menu">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 d-flex flex-column gap-4">
                <Link to="/">
                  <img src={logo} alt="footer-logo" />
                </Link>
                <p>
                  Transform your brand with our vehicle branding services. From
                  design to installation, we create impactful mobile advertising
                  solutions
                </p>
                <span className="d-flex gap-4">
                  <Link to="#">
                    <i className="fa-brands fa-facebook"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                </span>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-6 col-6 mt-md-0 mt-sm-4 mt-4">
                <h4>Quick Links</h4>
                <ul className="list-inline list-unstyled d-flex flex-column gap-4">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact us </Link>
                  </li>
                  <li>
                    <Link to="#">Btl activities</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-6 col-6 d-flex align-items-end">
                <ul className="d-flex flex-column gap-4">
                  <li>
                    <Link to="#">E-rickshaw branding </Link>
                  </li>
                  <li>
                    <Link to="#">Auto branding </Link>
                  </li>
                  <li>
                    <Link to="/services/Liftbranding">Lift branding </Link>
                  </li>
                  <li>
                    <Link to="#">Society Activities</Link>
                  </li>
                  <li>
                    <Link to="#">RWA ACTIVIES </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 mt-md-0 mt-sm-4 mt-4 d-flex flex-column align-items-md-start align-items-sm-center align-items-center">
                <h4>Get Connected</h4>
                <ul className="d-flex flex-column gap-4">
                  <li>
                    <Link to="#">
                      <i className="fa-regular fa-envelope"></i>
                    </Link>
                    <Link to="#" className="text-lowercase">
                      Info@brandbell.in
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      {" "}
                      <i className="fa-solid fa-phone"></i>
                    </Link>
                    <Link to="#">+91 73033 92444</Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-map-marker"></i>
                    </Link>
                    <Link to="#">
                      Nukleus Tower, Plot No 29, Sector 142, Noida, Uttar
                      Pradesh 201305
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container d-flex justify-content-md-between justify-content-md-center justify-content-center gap-3 text-center flex-wrap">
            <h6>
              Copyright © 2024 By
              <Link to="#" className="p-0">
                Brandbell.
              </Link>
              All Rights Reserved.
            </h6>
            <h6>
              Powered By <b> BRANDBELL </b>
            </h6>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
