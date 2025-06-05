import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import Card from "./Card";
import { Link } from "react-router-dom";
import banner from "./banner2.jpg";
import Callusfooter from "../Callusfooter";

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
      className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${banner})`,
        opacity: "0.2",
      }}
    ></div>
    <div className=" absolute top-36 left-4 text-sm  flex  flex-wrap w-[100%]  opacity-70 items-center text-center">
      <h1 className="  w-full  h-auto justify-center  flex flex-wrap   text-white text-5xl font-bold items-center text-center ">
        Turn Elevator Time <br />
        into Your Brand Building
      </h1>
      <h5 className=" text-white flex flex-wrap  items-center justify-center w-full  pt-8 tracking-tighter  ">
        Elevate Your Brand's Presence Advertise in Residential, Office, and
        Commercial Elevators/Lifts with BrandBell
      </h5>
    </div>
    {/* <img className=" w-full h-full  " src={banner} alt="" /> */}
  </div>,
  // <div className="item w-full h-[600px]" data-value="2">
  //   <div className=" absolute top-16 left-4 text-sm  w-[50%]  opacity-70">
  //     <h1 className="   flex flex-wrap  text-5xl font-bold ">
  //       Turn Elevator Time <br />
  //       into Your Brand Building
  //     </h1>
  //     <h5 className=" text-black flex flex-wrap pt-8">
  //       Elevate Your Brand's Presence: Advertise in Residential, Office, and
  //       Commercial Elevators/Lifts with BrandBell
  //     </h5>
  //   </div>
  //   <img
  //     className=" w-full h-full "
  //     src="https://img.freepik.com/free-vector/stylish-abstract-web-banner-with-text-space_1017-39039.jpg?t=st=1710758864~exp=1710762464~hmac=c0830d2b45a7e0e430c713d2444639c31a5703237f7d0a53530eced316c72a4c&w=1380"
  //     alt=""
  //   />
  // </div>,
  // <div className="item w-full h-[600px]" data-value="2">
  //   <div className=" absolute top-16 left-4 text-sm  w-[50%]  opacity-70">
  //     <h1 className="   flex flex-wrap  leading-3 text-5xl font-bold text-white  ">
  //       Turn Elevator Time <br />
  //       into Your Brand Building
  //     </h1>
  //     <h5 className=" text-white flex flex-wrap  pt-8">
  //       Elevate Your Brand's Presence: Advertise in Residential, Office, and
  //       Commercial Elevators/Lifts with BrandBell
  //     </h5>
  //   </div>
  //   <img
  //     className=" w-full h-full "
  //     src="https://img.freepik.com/free-vector/half-tone-blue-abstract-background-with-text-space_1017-41428.jpg?t=st=1710758994~exp=1710762594~hmac=c3ab1418cfd46046de05f7e4468b030c689ae72c9e719083a83e3716ebd403a3&w=1380"
  //     alt=""
  //   />
  // </div>,
  // <div className="item w-full h-[600px]" data-value="2">
  //   <div className=" absolute top-16 left-4 text-sm  w-[50%]  opacity-70">
  //     <h1 className="   flex flex-wrap  leading-3  text-5xl font-bold  text-white">
  //       Turn Elevator Time <br />
  //       into Your Brand Building
  //     </h1>
  //     <h5 className=" text-white flex flex-wrap pt-8 ">
  //       Elevate Your Brand's Presence: Advertise in Residential, Office, and
  //       Commercial Elevators/Lifts with BrandBell
  //     </h5>
  //   </div>
  //   <img
  //     className=" w-full h-full "
  //     src="https://img.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg?t=st=1710759113~exp=1710762713~hmac=d71d79ce7deb333949bed2d00cb40f6425913c06ae3bff1de8cc57a910b5481c&w=1380"
  //     alt=""
  //   />
  // </div>,
  // <div className="item w-full h-[600px]" data-value="2">
  //   <div className=" absolute top-16 left-4 text-sm  w-[50%]  opacity-70">
  //     <h1 className="   flex flex-wrap  leading-3 text-[#04BDF4]  text-5xl font-bold ">
  //       Turn Elevator Time <br />
  //       into Your Brand Building
  //     </h1>
  //     <h5 className=" text-white flex flex-wrap  pt-8">
  //       Elevate Your Brand's Presence: Advertise in Residential, Office, and
  //       Commercial Elevators/Lifts with BrandBell
  //     </h5>
  //   </div>
  //   <img
  //     className=" w-full h-full "
  //     src="https://img.freepik.com/free-vector/modern-website-banner-with-abtract-blue-shapes_1361-2201.jpg?t=st=1710759164~exp=1710762764~hmac=6a7987092f9ef0feaf331415ff1c0d6c7c65ee9aed156ceac4238c36f0597d07&w=1480"
  //     alt=""
  //   />
  // </div>,
];
function Liftbrand() {
  useEffect(() => {
    AOS.init({});

    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <>
      <div className="header-index">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          infinite
          // autoPlay
          // autoPlayInterval={3000}
          disableButtonsControls
          // autoPlayDirection="ltr"
          // animationType="fadeout"
          // animationDuration={2000}
        />

        <div className="  w-full flex flex-wrap h-auto items-center  bg-white text-black flex-col">
          <h4 className=" pt-16">Type of lift advertisement </h4>
          <div className=" p-16 flex    gap-8 lg:gap-2 md:gap-4 sm:gap-4 flex-col lg:flex-row  w-full h-auto mx-auto">
            <div className=" w-[100%] flex   justify-center h-auto gap-4 mx-auto  ">
              <div className="flex  items-center justify-center shadow-2xl">
                <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                      src="https://img.freepik.com/free-photo/woman-looking-shop-window_23-2147932249.jpg?t=st=1710747930~exp=1710751530~hmac=139e4defe1913e7b69eae72cfc84135a103046485c66b48d744d58eef7ed59df&w=1380"
                      alt="demo"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                      INDOOR
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                      Lift launching cross-platform service this week
                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                      This involves form of signage placed outside of a Lift or
                      elevator. Specifications Screen <br /> <br /> <br />
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="w-[300px] rounded-md border">
                <img
                  src="https://img.freepik.com/free-photo/woman-looking-shop-window_23-2147932249.jpg?t=st=1710747930~exp=1710751530~hmac=139e4defe1913e7b69eae72cfc84135a103046485c66b48d744d58eef7ed59df&w=1380"
                  alt="Laptop"
                  className="h-[200px] w-full rounded-md object-cover"
                />
                <div className="p-4">
                  <h1 className="text-lg font-semibold">INDOOR</h1>
                  <p className="mt-3 text-sm text-gray-600">
                    This involves form of signage placed outside of a Lift or
                    elevator. Specifications Screen Benefits <br /> <br />{" "}
                    <br />
                  </p>
                </div>
              </div>
              <div className="w-[300px] rounded-md border">
                <img
                  src="https://img.freepik.com/free-photo/mock-up-billboard-bus-stop_23-2148294164.jpg?t=st=1710757478~exp=1710761078~hmac=f6d5099ae18ec4b34276c227c1cb12fae1e15a7a574ce89e45095d10dd36dde9&w=740"
                  alt="Laptop"
                  className="h-[200px] w-full rounded-md object-cover"
                />
                <div className="p-4">
                  <h1 className="text-lg font-semibold">Digital - image</h1>
                  <p className="mt-3 text-sm text-gray-600">
                    Digital elevator ads are high-tech displays showcasing
                    eye-catching commercials in buildings. These targeted ads
                    play to a captive audience with video and animation, making
                    the most of short elevator rides
                  </p>
                </div>
              </div>
              <div className="w-[300px] rounded-md border">
                <img
                  src="https://img.freepik.com/free-photo/woman-touching-control-panel-wall-corridor_259150-60378.jpg?t=st=1710757587~exp=1710761187~hmac=bbb44e90792d1193bc3834eb6f278681e86d639e7cf3e1454fb6b1974d5bfb42&w=1380"
                  alt="Laptop"
                  className="h-[200px] w-full rounded-md object-cover"
                />
                <div className="p-4">
                  <h1 className="text-lg font-semibold">Demo</h1>
                  <p className="mt-3 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, debitis?
                  </p>
                </div>
              </div>
              <div className="w-[300px] rounded-md border">
                <img
                  src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                  alt="Laptop"
                  className="h-[200px] w-full rounded-md object-cover"
                />
                <div className="p-4">
                  <h1 className="text-lg font-semibold">About </h1>
                  <p className="mt-3 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, debitis?
                  </p>
                </div>
              </div> */}

              {/* <Card
              title="Digital - image "
              Image="https://img.freepik.com/free-photo/woman-looking-shop-window_23-2147932249.jpg?t=st=1710747930~exp=1710751530~hmac=139e4defe1913e7b69eae72cfc84135a103046485c66b48d744d58eef7ed59df&w=1380"
            />
            <Card title="Indoor  " />
            <Card />
            <Card /> */}
            </div>
            <div className=" w-[100%] flex flex-wrap  justify-center h-auto gap-4 mx-auto  ">
              <div className="flex  items-center justify-center shadow-2xl">
                <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                      src="https://img.freepik.com/free-photo/woman-touching-control-panel-wall-corridor_259150-60378.jpg?t=st=1710757587~exp=1710761187~hmac=bbb44e90792d1193bc3834eb6f278681e86d639e7cf3e1454fb6b1974d5bfb42&w=1380"
                      alt="demo"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                      Digital - image
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                      Lift launching cross-platform service this week
                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                      Digital elevator ads are high-tech displays showcasing
                      eye-catching commercials in buildings. These targeted ads
                      play to a captive audience with video and animation,
                      making the most of short elevator rides
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="w-[300px] rounded-md border">
                <img
                  src="https://img.freepik.com/free-photo/woman-looking-shop-window_23-2147932249.jpg?t=st=1710747930~exp=1710751530~hmac=139e4defe1913e7b69eae72cfc84135a103046485c66b48d744d58eef7ed59df&w=1380"
                  alt="Laptop"
                  className="h-[200px] w-full rounded-md object-cover"
                />
                <div className="p-4">
                  <h1 className="text-lg font-semibold">INDOOR</h1>
                  <p className="mt-3 text-sm text-gray-600">
                    This involves form of signage placed outside of a Lift or
                    elevator. Specifications Screen Benefits <br /> <br />{" "}
                    <br />
                  </p>
                </div>
              </div>
              <div className="w-[300px] rounded-md border">
                <img
                  src="https://img.freepik.com/free-photo/mock-up-billboard-bus-stop_23-2148294164.jpg?t=st=1710757478~exp=1710761078~hmac=f6d5099ae18ec4b34276c227c1cb12fae1e15a7a574ce89e45095d10dd36dde9&w=740"
                  alt="Laptop"
                  className="h-[200px] w-full rounded-md object-cover"
                />
                <div className="p-4">
                  <h1 className="text-lg font-semibold">Digital - image</h1>
                  <p className="mt-3 text-sm text-gray-600">
                    Digital elevator ads are high-tech displays showcasing
                    eye-catching commercials in buildings. These targeted ads
                    play to a captive audience with video and animation, making
                    the most of short elevator rides
                  </p>
                </div>
              </div>
              <div className="w-[300px] rounded-md border">
                <img
                  src="https://img.freepik.com/free-photo/woman-touching-control-panel-wall-corridor_259150-60378.jpg?t=st=1710757587~exp=1710761187~hmac=bbb44e90792d1193bc3834eb6f278681e86d639e7cf3e1454fb6b1974d5bfb42&w=1380"
                  alt="Laptop"
                  className="h-[200px] w-full rounded-md object-cover"
                />
                <div className="p-4">
                  <h1 className="text-lg font-semibold">Demo</h1>
                  <p className="mt-3 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, debitis?
                  </p>
                </div>
              </div>
              <div className="w-[300px] rounded-md border">
                <img
                  src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                  alt="Laptop"
                  className="h-[200px] w-full rounded-md object-cover"
                />
                <div className="p-4">
                  <h1 className="text-lg font-semibold">About </h1>
                  <p className="mt-3 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, debitis?
                  </p>
                </div>
              </div> */}

              {/* <Card
              title="Digital - image "
              Image="https://img.freepik.com/free-photo/woman-looking-shop-window_23-2147932249.jpg?t=st=1710747930~exp=1710751530~hmac=139e4defe1913e7b69eae72cfc84135a103046485c66b48d744d58eef7ed59df&w=1380"
            />
            <Card title="Indoor  " />
            <Card />
            <Card /> */}
            </div>
          </div>
        </div>
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
                <h2 className="h2_margin">Type of Building</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever.
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
                  src="https://img.freepik.com/free-photo/new-buildings-with-green-areas_1122-1533.jpg?t=st=1710746123~exp=1710749723~hmac=2eac51786594bbf13f014b469b5a0510d2525299c651443ace248b9623d34596&w=1380"
                  className="card-img-top"
                  alt="img"
                />
                <div className="card-body">
                  <h4>Society</h4>
                  <Link href="/#">Learn More</Link>
                </div>
              </div>
              <div data-aos="fade-down" className="blog-card w-100">
                <img
                  src="https://img.freepik.com/free-photo/view-modern-office_1170-1969.jpg?t=st=1710746193~exp=1710749793~hmac=eb23b5023c0564808bc65613c98be0df10ebda10d831f9e5c47d67524ab7aebf&w=1380"
                  className="card-img-top"
                  alt="img"
                />
                <div className="card-body">
                  <h4>Corporate offices</h4>
                  <Link href="/#">Learn More</Link>
                </div>
              </div>
              <div data-aos="fade-up" className="blog-card w-100">
                <img
                  src="https://media.istockphoto.com/id/1422340649/photo/mockup-advertising-led-screen-install-at-front-of-elevator-in-building.jpg?s=612x612&w=0&k=20&c=nM9XZQUk2CTBfFNskNhxnk2jEa8JKa_Qykh637THF_U="
                  className="card-img-top"
                  alt="img"
                />
                <div className="card-body">
                  <h4>commercial mall</h4>
                  <Link href="/#">Learn More</Link>
                </div>
              </div>
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
                  <h5>Benefits of Lift Branding </h5>
                </div>
                <div className="d-flex align-items-center mt-4 gap-3">
                  <i className="fa-solid fa-check"></i>
                  <h5>Lorem Ipsum is simply dummy text of the printing.</h5>
                </div>
                <div className="d-flex align-items-center gap-3 mt-3">
                  <i className="fa-solid fa-check"></i>
                  <h5>Lorem Ipsum is simply dummy text of the printing.</h5>
                </div>{" "}
                <div className="d-flex align-items-center gap-3 mt-3">
                  <i className="fa-solid fa-check"></i>
                  <h5>Lorem Ipsum is simply dummy text of the printing.</h5>
                </div>{" "}
                <div className="d-flex align-items-center gap-3 mt-3">
                  <i className="fa-solid fa-check"></i>
                  <h5>
                    Lorem Ipsum is simply dummy text of the printing. lorem24
                  </h5>
                </div>{" "}
                <div className="d-flex align-items-center gap-3 mt-3">
                  <i className="fa-solid fa-check"></i>
                  <h5>Lorem Ipsum is simply dummy text of the printing.</h5>
                </div>{" "}
                <div className="d-flex align-items-center gap-3 mt-3">
                  <i className="fa-solid fa-check"></i>
                  <h5>Lorem Ipsum is simply dummy text of the printing.</h5>
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
                      src="https://img.freepik.com/free-photo/mumbai-skyline-skyscrapers-construction_469504-21.jpg?t=st=1710747169~exp=1710750769~hmac=210441e3aa9946b0171add870791cf0286096efab50e59fccd9f76dd5baf25ae&w=1380"
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
            <div className="grid grid-cols-1 md:p-28 p-4 w-full mx-auto md:grid-cols-4 sm:grid-cols-3 gap-4 ">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://img.freepik.com/free-vector/elevator-door-realistic-composition-with-elevator-hall-doors-front-view-with-side-post-home-plant-illustration_1284-62888.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://media.istockphoto.com/id/153756997/photo/modern-office-building-and-elevators.jpg?s=612x612&w=0&k=20&c=JPMjSLzcl9f1QC0P8Z6Wrx2qAnhqHCxg8E721So5Db0="
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://media.istockphoto.com/id/1442664779/photo/elevators.webp?b=1&s=170667a&w=0&k=20&c=MN0uqQhdyMqsLsTSwrBeNOj3gZpZt3sVTukByJbF6Zo="
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://www.shutterstock.com/image-photo/two-elevators-hotel-lobby-260nw-211631101.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://img.freepik.com/free-vector/golden-elevator-cabin-with-closed-doors-inside_107791-7630.jpg?size=626&ext=jpg&uid=R60047409&ga=GA1.2.633864320.1691228930&semt=ais"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://img.freepik.com/free-vector/hotel-office-building-hall-with-closed-elevator-door_1284-8147.jpg?w=996&t=st=1710743825~exp=1710744425~hmac=df24908e86d96fd1471c6dbc30197655563928996491dd3254966564c750bba8"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://img.freepik.com/free-vector/different-people-lifting-elevator_74855-6368.jpg?w=1060&t=st=1710743883~exp=1710744483~hmac=8787b4c8e62d3f2f1e409c6a57149610328b31ac9a07caead99b0deffac91cc3"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://img.freepik.com/free-photo/full-shot-people-walking-together_23-2149412771.jpg?t=st=1710744143~exp=1710747743~hmac=59294f3ee9afd95df34c93b4785f21f1ca1069a2d1d9de3fba48eafcb9723807&w=1380"
                  alt=""
                />
              </div>
              {/* <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
                alt=""
              />
            </div> */}
              {/* <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
                alt=""
              />
            </div> */}
              {/* <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
                alt=""
              />
            </div> */}
              {/* <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
                alt=""
              />
            </div> */}
            </div>
          </div>
        </div>
        <section className=" w-full h-auto bg-white  py-16">
          <div className="container text-center gap-4 d-flex flex-column">
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
          </div>
        </section>
        {/* <section className=" bg-white dark:bg-dark">
          <div className="">
            <div className="relative z-10 overflow-hidden   bg-[#E0BD7C] py-12 px-8 md:p-[70px]">
              <div className="flex flex-wrap items-center -mx-4">
                <div className="w-full px-4 lg:w-1/2">
                  <span className="block mb-4 text-base font-medium text-white"></span>
                  <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[40px]/[48px] lg:mb-0">
                    <span className="xs:block"> Ready to Discuss </span>
                    <span>Your Needs ?</span>
                  </h2>
                </div>
                <div className="w-full px-4 lg:w-1/2">
                  <div className="flex flex-wrap lg:justify-end">
                    <Link
                      to="/contactus"
                      className="inline-flex py-3 my-1 mr-4 text-base font-medium transition bg-white rounded-md hover:bg-shadow-1 text-primary px-7"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <span className="absolute top-0 left-0 z-[-1]">
                  <svg
                    width="189"
                    height="162"
                    viewBox="0 0 189 162"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="16"
                      cy="-16.5"
                      rx="173"
                      ry="178.5"
                      transform="rotate(180 16 -16.5)"
                      fill="url(#paint0_linear)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-157"
                        y1="-107.754"
                        x2="98.5011"
                        y2="-106.425"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" stopOpacity="0.07" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute bottom-0 right-0 z-[-1]">
                  <svg
                    width="191"
                    height="208"
                    viewBox="0 0 191 208"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="173"
                      cy="178.5"
                      rx="173"
                      ry="178.5"
                      fill="url(#paint0_linear)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-3.27832e-05"
                        y1="87.2457"
                        x2="255.501"
                        y2="88.5747"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" stopOpacity="0.07" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </section> */}
        <Callusfooter />
      </div>
    </>
  );
}

export default Liftbrand;
