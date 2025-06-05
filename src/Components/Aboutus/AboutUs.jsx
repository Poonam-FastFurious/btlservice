import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function AboutUs() {
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
      <section className="about">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="d-flex gap-3 align-items-center">
                <hr />
                <h5>ABOUT US</h5>
              </div>
              <h2 className="h2_margin">
                Enhance Brand Visibility and Reach New Audiences with Our BTL
                and Road Branding Services
              </h2>
              <p>
                Stand Out. Be Seen. Engage. BTL, Roadshow & Auto Branding
                Solutions. From eye-catching roadshows to strategic BTL
                activations, we design experiences that connect with your
                audience. Boost brand visibility & drive engagement. Let us help
                you stand out from the crowd and make a meaningful impact on
                your target audience.
              </p>
              <div className="d-flex align-items-center mt-4 gap-3">
                <i className="fa-solid fa-check"></i>
                <h5>Increased Visibility.</h5>
              </div>
              <div className="d-flex align-items-center gap-3 mt-3">
                <i className="fa-solid fa-check"></i>
                <h5>Targeted Reach.</h5>
              </div>
              <div className="d-flex align-items-center gap-3 mt-3">
                <i className="fa-solid fa-check"></i>
                <h5>Cost-Effective</h5>
              </div>
              <div className="d-flex gap-lg-4 gap-md-2 gap-sm-4 gap-2 mt-md-5 mt-sm-4 mt-4">
                <a href="/contact" className="btn_hover1">
                  Get Quote
                </a>
                <a href="about" className="btn_hover2">
                  Discover More
                </a>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="3000"
              className="col-lg-6 col-md-6 mt-md-0 mt-sm-5 mt-5 position-relative d-flex justify-content-center align-items-center"
            >
              <div className="about-mask">
                <figure>
                  <img
                    src="https://html-templates.evonicmedia.com/digitly/assets/Images/about/about.png"
                    alt="img"
                  />
                </figure>
              </div>
              <div className="ab-count d-flex justify-content-center align-items-center flex-column text-center">
                <div className="d-flex align-items-center justify-content-center">
                  <h2 className="count">12</h2>
                  <h2>+</h2>
                </div>
                <p>years of experience</p>
              </div>
              <div className="about-hr d-flex align-items-center gap-2">
                <hr />
                <h6>Who we are</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
