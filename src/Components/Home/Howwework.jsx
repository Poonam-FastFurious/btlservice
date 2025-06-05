import React from "react";

function Howwework() {
  return (
    <div>
      <section className="work">
        <div className="container position-relative">
          <div className="work-para text-center" data-aos="fade-up">
            <h5>HOW WE WORK</h5>
            <h2 className="h2_margin">
              Our process for Delivering the campaign{" "}
            </h2>
            <p>
              From consultation to execution, our BTL campaign process ensures
              strategic planning, creative excellence, and impactful delivery
              for brand success
            </p>
          </div>
          <div className="work-hr d-flex align-items-center gap-2">
            <hr />
            <h6>Project in steps</h6>
          </div>
          <div className="work-line d-flex justify-content-center gap-4 flex-wrap position-relative">
            <div data-aos="zoom-in">
              <h2>01.</h2>
              <h4> initial Consultation</h4>
            </div>
            <div data-aos="zoom-in">
              <h2>02.</h2>
              <h4>Strategy Development</h4>
            </div>
            <div data-aos="zoom-in">
              <h2>03.</h2>
              <h4>Execution Planning</h4>
            </div>
            <div data-aos="zoom-in">
              <h2>04.</h2>
              <h4> Implementation</h4>
            </div>
          </div>
          <div className="d-flex justify-content-center" data-aos="zoom-in">
            <a href="contact" className="btn_hover2">
              Contact Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Howwework;
