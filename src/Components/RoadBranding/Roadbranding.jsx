import React, { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
function Roadbranding() {
  useEffect(() => {
    AOS.init({});

    return () => {
      AOS.refresh();
    };
  }, []);
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };
  const items = [
    <div
      className="item "
      data-value="1"
      style={{ width: "100%", height: "600px" }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-black"
        style={{
          backgroundColor: "black",
          backgroundImage: `url(${"https://www.bestprintgraphics.com/images/2019/banner-car.jpg"})`,
          opacity: "0.5",
        }}
      ></div>
      <div className=" absolute top-36 left-4 text-sm  flex  flex-wrap w-[100%]  opacity-70 items-center text-center">
        <h1 className="  w-full  h-auto justify-center  flex flex-wrap   text-white text-5xl font-bold items-center text-center ">
          Drive Attention to Your Business with Eye-Catching Auto Branding
        </h1>
        <h5 className=" text-white flex flex-wrap  items-center justify-center w-full  pt-8 tracking-tighter  ">
          Showcase Your Services and Products in Style with Our Auto Branding
          Solutions
        </h5>
      </div>
    </div>,
  ];
  return (
    <>
      <div className="header-index">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          infinite
          disableButtonsControls
          disableDotsControls
        />
        <section className="blog">
          <div className="container">
            <div
              className="row text-md-start text-sm-center text-center"
              data-aos="fade-down"
            >
              <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                <div className="d-flex gap-3 justify-content-md-start justify-content-sm-center justify-content-center align-items-center">
                  <hr className="blog-hr1" />
                </div>
                <h2 className="h2 mt-4">
                  Our Comprehensive Vehicle Branding Services
                </h2>
                <p className="mt-4">
                  From Rickshaws to Buses, We've Got Your Vehicle Branding Needs
                  Covered. Stand Out and Reach Your Audience Effectively
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-md-0 mt-sm-4 mt-4 d-flex align-items-center justify-content-md-end justify-content-sm-center justify-content-center">
                <Link href="blog" className="btn_hover2">
                  See all
                </Link>
              </div>
            </div>
            <div className="d-flex flex-md-row flex-sm-column flex-column align-items-center gap-md-8 gap-sm-4 gap-4 mt-5">
              <div data-aos="fade-up" className="blog-card w-100">
                <img
                  src="https://indiaconnect.com/oc-content/uploads/1239/153361.jpg"
                  className="card-img-top"
                  alt="img"
                />
                <div className="card-body">
                  <h4>Auto</h4>
                  <Link href="/#">Learn More</Link>
                </div>
              </div>
              <div data-aos="fade-down" className="blog-card w-100">
                <img
                  src="https://www.colourhub.co.za/wp-content/uploads/2021/04/vehicle-branding-decals-pretoria-near-me-2-1024x768.jpg"
                  className="card-img-top"
                  alt="img"
                />
                <div className="card-body">
                  <h4>Cab</h4>
                  <Link href="/#">Learn More</Link>
                </div>
              </div>
              <div data-aos="fade-up" className="blog-card w-100">
                <img
                  src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,h_540,w_720/ggrt01gin8bbifkkypog.jpg"
                  className="card-img-top"
                  alt="img"
                />
                <div className="card-body">
                  <h4>Bus</h4>
                  <Link href="/#">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="d-flex flex-md-row flex-sm-column flex-column align-items-center gap-md-8 gap-sm-4 gap-4 mt-5">
              <div data-aos="fade-up" className="blog-card w-100">
                <img
                  src="https://www.cashurdrive.com/wp-content/uploads/merto_branding1.jpg"
                  className="card-img-top"
                  alt="img"
                />
                <div className="card-body">
                  <h4>Metro Branding</h4>
                  <Link href="/#">Learn More</Link>
                </div>
              </div>
              <div data-aos="fade-down" className="blog-card w-100">
                <img
                  src="https://retailmarketing.co.in/wp-content/uploads/2021/09/mobile-van-advertising-service-500x500-1.jpg"
                  className="card-img-top"
                  alt="img"
                />
                <div className="card-body">
                  <h4>Mobile Van Branding</h4>
                  <Link href="/#">Learn More</Link>
                </div>
              </div>
              <div data-aos="fade-up" className="blog-card w-100">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2023/6/313225934/VB/BT/SR/90141346/e-rickshaw-branding-500x500.jpeg"
                  className="card-img-top"
                  alt="img"
                />
                <div className="card-body">
                  <h4>E-Rickshaw </h4>
                  <Link href="/#">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="logoipsum">
          <div
            className="container text-center gap-4 d-flex flex-column"
            style={{ padding: "0" }}
          >
            <h3 data-aos="zoom-in" data-aos-duration="3000">
              locations for Auto Rickshaw Advertising
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
          </div>
        </section>
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
                  <h5>
                    {" "}
                    Drive Your Brand's Success with Vehicle Branding
                  </h5>{" "}
                  <hr />
                </div>
                <p className=" pt-4">
                  Vehicle branding is a powerful marketing tool that can
                  significantly boost your brand's visibility and reach. Whether
                  you choose rickshaw, auto, bus, or cab branding, the benefits
                  are numerous
                </p>
                <div className="d-flex align-items-center mt-4 gap-3">
                  <i className="fa-solid fa-check"></i>
                  <h5> Cost-effective advertising reaching a wide audience</h5>
                </div>
                <div className="d-flex align-items-center gap-3 mt-3">
                  <i className="fa-solid fa-check"></i>
                  <h5> Mobile advertising with broad reach and visibility.</h5>
                </div>{" "}
                <div className="d-flex align-items-center gap-3 mt-3">
                  <i className="fa-solid fa-check"></i>
                  <h5>
                    {" "}
                    Targeted marketing in specific areas and demographics.
                  </h5>
                </div>{" "}
                <div className="d-flex align-items-center gap-3 mt-3">
                  <i className="fa-solid fa-check"></i>
                  <h5>High visibility and impactful branding designs.</h5>
                </div>{" "}
                <div className="d-flex align-items-center gap-3 mt-3">
                  <i className="fa-solid fa-check"></i>
                  <h5>Continuous and long-term exposure on the road.</h5>
                </div>{" "}
                <div className="d-flex align-items-center gap-3 mt-3">
                  <i className="fa-solid fa-check"></i>
                  <h5>
                    {" "}
                    Memorable and unique branding for increased brand recall
                  </h5>
                </div>
              </div>
              <div
                data-aos="fade-down"
                data-aos-duration="3000"
                className="col-lg-6 col-md-6 mt-md-0 mt-sm-5 mt-5 position-relative d-flex justify-content-center align-items-center"
              >
                <div className=" w-full ">
                  <figure>
                    <img
                      className="rounded-md"
                      src="https://www.billups.com/hubfs/Transit%20Advertising-%20Everything%20You%20Need%20to%20Know%206fea.jpg#keepProtocol"
                      alt="img"
                    />
                  </figure>
                </div>
                <div className="ab-count d-flex justify-content-center align-items-center flex-column text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    {/* <h2 className="count">12</h2>
                  <h2>+</h2> */}
                  </div>
                  {/* <p>years of experience</p> */}
                </div>
                <div className="about-hr d-flex align-items-center gap-2">
                  <hr />
                  {/* <h6>Who we are</h6> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className=" w-full h-auto flex justify-center items-center flex-col ">
          <h3 className=" text-white pt-4">Deliverd</h3>
          <div className=" flex md:p-16 ">
            <div className="grid grid-cols-1 md:p-32 p-4 w-full mx-auto items-center place-items-center md:grid-cols-3 sm:grid-cols-3 gap-4 ">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://img.freepik.com/free-photo/blank-advertisement-billboard-with-blurred-traffic-lights-night_23-2147922079.jpg?t=st=1711026377~exp=1711029977~hmac=172d990654d132bfd2c4ada93a1a9449fba32f9ac65539de54e1c6e363195be8&w=1380"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://img.freepik.com/free-photo/road-city-view_1417-1480.jpg?t=st=1711026445~exp=1711030045~hmac=34badc97f6cf1f4c49cf95e12b1545f3cf54e446656eaa598a5faa3bc6ae5833&w=1380"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://img.freepik.com/free-vector/taxi-car-service-set_1150-48799.jpg?t=st=1711026645~exp=1711030245~hmac=4f88d64d55cafdbda9707e34be7e3c7a0283936545f541d1b539c7f29ec4eaca&w=1380"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Roadbranding;
