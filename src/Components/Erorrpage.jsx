import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";

function Erorrpage() {
  useEffect(() => {
    AOS.init({});

    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <>
      <section
        data-aos="zoom-in"
        className="coming-soon d-flex flex-column justify-content-center align-items-center text-center gap-3"
      >
        <figure>
          <img
            src="https://html-templates.evonicmedia.com/digitly/assets/Images/icon/404.png"
            alt="404"
          />
        </figure>
        <h2>Oops...</h2>
        <h1>Page Not Found</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text
          ever.
        </p>
        <Link to="/" className="btn_hover1 mt-3">
          Back to Home
        </Link>
      </section>
    </>
  );
}

export default Erorrpage;
