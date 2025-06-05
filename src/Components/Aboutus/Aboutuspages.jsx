import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutUs from "./AboutUs";
function Aboutuspages() {
  useEffect(() => {
    AOS.init({});

    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <>
      <div className="site-wrapper">
        <div className="header-about">
          {" "}
          <div className="container">
            <h2> About Us </h2>
          </div>
        </div>
      </div>
      <div className="about_img">
        <div
          data-aos="zoom-in"
          className="container d-flex justify-content-center"
        >
          <img
            src="https://html-templates.evonicmedia.com/digitly/assets/Images/about/ab-img.png"
            alt="img"
          />
        </div>
      </div>
      <AboutUs />
    </>
  );
}

export default Aboutuspages;
