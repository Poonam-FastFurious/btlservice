import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
function Cardsection() {
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
      <section className="feature position-relative">
        <div className="container">
          <div className="row">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="col-lg-3 col-md-6"
            >
              <div>
                <figure>
                  <img
                    src="https://html-templates.evonicmedia.com/digitly/assets/Images/icon/feature1.png"
                    className="feature-img1"
                    alt="feature"
                  />
                </figure>
                <h4>BTL ACTIVITIES – BTL Advertising </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="3000"
              className="col-lg-3 col-md-6"
            >
              <div>
                <figure>
                  <img
                    src="https://html-templates.evonicmedia.com/digitly/assets/Images/icon/feature2.png"
                    alt="feature"
                  />
                </figure>
                <h4> ROAD BRANDING </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="col-lg-3 col-md-6 mt"
            >
              <div>
                <figure>
                  <img
                    src="https://html-templates.evonicmedia.com/digitly/assets/Images/icon/feature3.png"
                    alt="feature"
                  />
                </figure>
                <h4>RESIDENTIAL SOCIETY BRANDING & ACTIVITIES</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="3000"
              className="col-lg-3 col-md-6 mt"
            >
              <div>
                <figure>
                  <img
                    src="https://html-templates.evonicmedia.com/digitly/assets/Images/icon/feature4.png"
                    alt="feature"
                  />
                </figure>
                <h4>LIFT BRANDING </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cardsection;
