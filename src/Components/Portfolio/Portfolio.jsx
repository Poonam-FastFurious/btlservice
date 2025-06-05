import React, { useState } from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <section className="portfolio">
        <div className="portfolio-1">
          <div className="container">
            <div
              className="row text-md-start text-sm-center text-center"
              data-aos="fade-up"
            >
              <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                <div className="d-flex gap-3 justify-content-md-start justify-content-sm-center justify-content-center align-items-center">
                  <hr className="gallary-hr1" />
                  <h5>PORTFOLIO</h5>
                </div>
                <h2 className="h2_margin">
                  Our Latest Campaign: Driving Brand Success.
                </h2>
                <p>
                  Discover how our BTL, Auto, E-Rikshaw, and Van Branding
                  Services boosted brand visibility
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-md-0 mt-sm-4 mt-4 d-flex align-items-center justify-content-md-end justify-content-sm-center justify-content-center">
                <Link to="#" className="btn_hover2">
                  View All Projects
                </Link>
              </div>
              <hr className="mt-5" />
            </div>
          </div>
        </div>
        <div className="gallary">
          <div className="ga-bg"></div>

          <span> </span>
          <div className="container" data-aos="fade-up">
            <div className="tab mb-4">
              <button
                className={` ${activeTab === "all" ? "active" : ""}`}
                onClick={() => handleTabClick("all")}
              >
                ALL
              </button>
              <button
                className={` ${activeTab === "design" ? "active" : ""}`}
                onClick={() => handleTabClick("design")}
              >
                DESIGN
              </button>
              <button
                className={` ${activeTab === "development" ? "active" : ""}`}
                onClick={() => handleTabClick("development")}
              >
                DEVELOPMENT
              </button>
              <button
                className={` ${activeTab === "branding" ? "active" : ""}`}
                onClick={() => handleTabClick("branding")}
              >
                BRANDING
              </button>
              <button
                className={` ${activeTab === "uiux" ? "active" : ""}`}
                onClick={() => handleTabClick("uiux")}
              >
                UI/UX
              </button>
              <button
                className={` ${activeTab === "marketing" ? "active" : ""}`}
                onClick={() => handleTabClick("marketing")}
              >
                MARKETING
              </button>
              <button
                className={` ${activeTab === "seo" ? "active" : ""}`}
                onClick={() => handleTabClick("seo")}
              >
                SEO
              </button>
            </div>

            <div
              className=""
              style={{ display: activeTab === "all" ? "block" : "none" }}
            >
              <div className="d-flex justify-content-center">
                <div className="row w-100">
                  <div className="col-md-4 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/all-gallary-1.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                  <div className="col-md-4 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/all-gallary-2.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                  <div className="col-md-4 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/all-gallary-3.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                  <div className="col-md-8 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/all-gallary-4.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                  <div className="col-md-4 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/all-gallary-5.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                  <div className="col-md-4 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/all-gallary-6.png"
                        alt="sm_img"
                      />
                    </figure>
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/all-gallary-7.png"
                        alt="sm_img"
                      />
                    </figure>
                  </div>
                  <div className="col-md-8 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/all-gallary-8.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="design"
              className=""
              style={{ display: activeTab === "design" ? "block" : "none" }}
            >
              <div className="d-flex justify-content-center">
                <div className="row w-100">
                  <div className="col-md-4 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/design-gallary-3.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                  <div className="col-md-4 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/design-gallary-6.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                  <div className="col-md-4 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/design-gallary-7.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                  <div className="col-md-4 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/design-gallary-1.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                  <div className="col-md-4 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/design-gallary-2.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                  <div className="col-md-4 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/design-gallary-4.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="development"
              className="tabcontent"
              style={{
                display: activeTab === "development" ? "block" : "none",
              }}
            >
              <div className="d-flex justify-content-center">
                <div className="row w-100">
                  <div className="col-md-4 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/dev-gallary-3.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                  <div className="col-md-4 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/dev-gallary-4.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                  <div className="col-md-4 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/dev-gallary-5.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                  <div className="col-md-4 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/dev-gallary-6.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                  <div className="col-md-4 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/dev-gallary-7.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                  <div className="col-md-4 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/dev-gallary-8.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="branding"
              className={``}
              style={{ display: activeTab === "branding" ? "block" : "none" }}
            >
              <div className="d-flex justify-content-center">
                <div className="row w-100">
                  <div className="col-md-4 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/brand-gallary-6.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                  <div className="col-md-8 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/brand-gallary-8.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="ui_ux"
              className=""
              style={{ display: activeTab === "uiux" ? "block" : "none" }}
            >
              <div className="d-flex justify-content-center">
                <div className="row w-100">
                  <div className="col-md-4 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/ui-ux-gallary-3.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                  <div className="col-md-8 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/ui-ux-gallary-4.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="markiting"
              className=""
              style={{ display: activeTab === "marketing" ? "block" : "none" }}
            >
              <div className="d-flex justify-content-center">
                <div className="row w-100">
                  <div className="col-md-4 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/market-gallary-1.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                  <div className="col-md-8 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/market-gallary-2.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                  <div className="col-md-8 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/market-gallary-3.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                  <div className="col-md-4 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/market-gallary-4.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="seo"
              className="tabcontent"
              style={{ display: activeTab === "seo" ? "block" : "none" }}
            >
              <div className="d-flex justify-content-center">
                <div className="row w-100">
                  <div className="col-md-4 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/seo-gallary-4.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                  <div className="col-md-4 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/seo-gallary-5.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                  <div className="col-md-4 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/seo-gallary-7.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                  <div className="col-md-8 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/seo-gallary-6.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                  <div className="col-md-4 p-0">
                    <figure>
                      <img
                        src="https://html-templates.evonicmedia.com/digitly/assets/Images/home/seo-gallary-8.png"
                        alt="img"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallary-hr d-flex gap-3 justify-content-end align-items-center mt-4">
              <h6>Creative Solution</h6>
              <hr />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
