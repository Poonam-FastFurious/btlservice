import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ClientsSection() {
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
    <div>
      <div className="site-wrapper">
        <div className="header-index">
          {" "}
          <section className="logoipsum">
            <div className="container text-center gap-4 d-flex flex-column">
              <hr className="hr1" />
              <h3 data-aos="zoom-in" data-aos-duration="3000">
                OUR CLIENTS
              </h3>
              <div
                className="logoipsum-slider d-flex flex-wrap justify-content-center gap-4 "
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <figure>
                  <img
                    src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/logoipsum2.svg"
                    alt="logoipsum"
                  />
                </figure>
                <figure>
                  <img
                    src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/logoipsum3.svg"
                    alt="logoipsum"
                  />
                </figure>
                <figure>
                  <img
                    src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/logoipsum4.svg"
                    alt="logoipsum"
                  />
                </figure>
                <figure>
                  <img
                    src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/logoipsum5.svg"
                    alt="logoipsum"
                  />
                </figure>
                <figure>
                  <img
                    src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/logoipsum6.svg"
                    alt="logoipsum"
                  />
                </figure>
                <figure>
                  <img
                    src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/logoipsum1.svg"
                    alt="logoipsum"
                  />
                </figure>
              </div>
              <hr className="hr2" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ClientsSection;
