import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Contact() {
  useEffect(() => {
    AOS.init({});

    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <>
      <div className="header-about">
        <section className="container serv-hero">
          <h2> Let’s Talk To Us </h2>
          <div className="d-flex justify-content-center align-items-center">
            <Link to="/">Home</Link>
            <span> </span>
            <Link to="#">Contact Us</Link>
          </div>
        </section>
      </div>
      <section className="contact">
        <div className="container pt-5">
          <form id="footer-form" data-aos="zoom-in">
            <div id="footer-message"></div>
            <div className="d-flex gap-md-5 gap-sm-3 gap-3 flex-md-row flex-sm-column flex-column gap-md-4 gap-sm-3 mb-3">
              <input type="text" placeholder="Name" required="" />
              <input type="text" placeholder="Phone Number" required="" />
            </div>
            <div className="d-flex gap-md-5 gap-sm-3 gap-3 flex-md-row flex-sm-column flex-column gap-md-4 gap-sm-3 mb-3">
              <input type="email" placeholder="Email" required="" />
              <input type="text" placeholder="Address" required="" />
            </div>
            <div>
              <textarea placeholder="Message" required="" rows="3"></textarea>
            </div>
            <button className="w-100 btn_hover1 mt-5">Send Message</button>
          </form>

          <div
            data-aos="flip-left"
            className="contact-address d-flex justify-content-center align-items-md-center align-items-sm-start align-items-start gap-lg-0 gap-md-2 gap-sm-2 gap-2"
          >
            <div className="d-flex align-items-center gap-lg-4 gap-md-3 gap-4">
              <i className="fa-sharp fa-solid fa-house"></i>
              <Link to="#" className="p-0">
                Nukleus Tower, Plot No 29, Sector 142, Noida, Uttar Pradesh
                201305
              </Link>
            </div>
            <div>
              <hr />
            </div>
            <div className="d-flex align-items-center gap-lg-4 gap-md-3 gap-4">
              <i className="fa-solid fa-phone"></i>
              <Link to="#" className="p-0">
                +91 73033 92444
              </Link>
            </div>
            <div>
              <hr />
            </div>
            <div className="d-flex align-items-center gap-lg-4 gap-md-3 gap-4">
              <i className="fa-solid fa-envelope"></i>
              <Link to="#" className="p-0">
                Info@brandbell.com
              </Link>
            </div>
          </div>

          <h2>Find Us Here</h2>
        </div>
      </section>
      <div className="map" data-aos="flip-left">
        <div className="mapouter">
          <iframe
            title="demo"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448809.3153400001!2d77.414276!3d28.499935000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce85740000001%3A0x73f244a3c747f619!2sBrandBell369%20Graphics%20Private%20Limited!5e0!3m2!1sen!2sus!4v1710767338877!5m2!1sen!2sus"
            style={{ border: "0", width: "100%", height: "500px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
