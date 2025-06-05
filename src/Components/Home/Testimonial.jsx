import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
function Testimonial() {
  useEffect(() => {
    AOS.init({});

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <>
      <section className="testimonial">
        <div className="container" data-aos="zoom-in">
          <div className="position-relative d-flex flex-column align-items-center">
            <div className="testimonial_hr d-flex gap-2 align-items-center">
              <hr />
              <h6>Testimonials</h6>
            </div>
            <h3>WHAT OUR CLIENT SAYS</h3>
          </div>
          {/* <div className="testimonial_slider mt-3 ps-md-5 ms-sm-4 ps-1 pe-md-5 pe-sm-4 pe-1"> 
            <div className="text-center">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type.
              </p>
              <h5>Henry Koch</h5>
              <h6>Brand Owner</h6>
            </div>
            <div className="text-center">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type.
              </p>
              <h5>Henry Koch</h5>
              <h6>Brand Owner</h6>
            </div>
            <div className="text-center">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type.
              </p>
              <h5>Henry Koch</h5>
              <h6>Brand Owner</h6>
            </div>
          </div> */}
          <Carousel showIndicators={false} showThumbs={false}>
            <div className="testimonial_slider mt-3 ps-md-5 ms-sm-4 ps-1 pe-md-5 pe-sm-4 pe-1">
              <div className="text-center">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type.
                </p>
                <h5>Henry Koch</h5>
                <h6>Brand Owner</h6>
              </div>
            </div>
            <div className="testimonial_slider mt-3 ps-md-5 ms-sm-4 ps-1 pe-md-5 pe-sm-4 pe-1">
              <div className="text-center">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type.
                </p>
                <h5>Henry Koch</h5>
                <h6>Brand Owner</h6>
              </div>
            </div>
            <div className="testimonial_slider mt-3 ps-md-5 ms-sm-4 ps-1 pe-md-5 pe-sm-4 pe-1">
              <div className="text-center">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type.
                </p>
                <h5>Henry Koch</h5>
                <h6>Brand Owner</h6>
              </div>
            </div>
          </Carousel>
          <div className="agency" data-aos="zoom-in">
            <div className="star-slider mt-5 d-flex flex-wrap">
              <h3>Creative Agency</h3>
              <i className="fa-solid fa-star"></i>
              <h3>Digital Studio</h3>
              <i className="fa-solid fa-star"></i>
              <h3>Creative Agency</h3>
              <i className="fa-solid fa-star"></i>
              <h3>Digital Studio</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
