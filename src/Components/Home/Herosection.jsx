import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
function Herosection() {
  useEffect(() => {
    AOS.init({
      // Initialization options
    });

    // Optionally, clean up AOS when component unmounts
    return () => {
      AOS.refresh(); // Refresh AOS when component unmounts to remove any applied styles
    };
  }, []);
  return (
    <>
      <div className="header-index">
        <section className="hero">
          <div
            className="container position-relative"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <div>
              <div className="hero-social-icon align-items-center d-flex flex-md-column flex-sm-row flex-row justify-content-start">
                <Link to="#">
                  <i className="fa-brands fa-facebook"></i>
                </Link>
                <Link to="#">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link to="#">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
                <hr className="d-md-block d-sm-none d-none" />
              </div>
              <div className="d-flex flex-column align-items-center gap-md-3 gap-sm-2 gap-2 text-center">
                <h1>BTL AND BRANDING SERVICE </h1>
                <h3>Get Closer, Get Noticed</h3>
                <div className="d-flex gap-md-4 gap-sm-4 gap-3 mt-3">
                  <Link to="/contact" className="btn_hover1">
                    Get Quote
                  </Link>
                  <Link to="about" className="btn_hover2">
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Herosection;
