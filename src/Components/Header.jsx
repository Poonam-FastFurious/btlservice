import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import logo from "../assets/Images/logonew/BRAND BELL (1).png";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isopenmenu, setIsopenmenu] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const togelmenudrawer = () => {
    setIsopenmenu((prevstate) => !prevstate);
  };
  return (
    <>
      <div className="header-index">
        {" "}
        <header>
          <nav className="container navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="logo" style={{ width: "120px" }} />
              </Link>
              <button className="navbar-toggler" type="button">
                <span
                  className="fa-solid fa-bars"
                  onClick={togelmenudrawer}
                ></span>
              </button>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto gap-5">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      id="navbarScrollingDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarScrollingDropdown"
                    >
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/services/Liftbranding"
                        >
                          Lift Branding
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/demo">
                          BTL Activity
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/services/roadbranding"
                        >
                          Road Branding
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/Society">
                          Society Activity
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="d-flex nav-right align-items-center gap-5">
                  <p>
                    Call Us: <span>+91 73033 92444</span>
                  </p>

                  <i className="fa-solid fa-magnifying-glass"></i>
                  <i onClick={toggleDrawer} className="fa-solid fa-bars"></i>
                </div>
              </div>
            </div>
          </nav>

          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className=" fixed top-0 -right-[335px]   overflow-x-hidden p-32  "
            size={355}
          >
            <div
              style={{
                backgroundColor: "#d3c9c1",
                padding: "45px",
                height: "100%",
              }}
            >
              <div className=" d-flex  gap-8 justify-between ">
                <img className=" w-100  h-1/2" src={logo} alt="" />
                <button
                  className="close_right_sidebar fa-solid fa-xmark "
                  onClick={toggleDrawer}
                ></button>
              </div>
              <p style={{ width: "100%", paddingTop: "20px" }}>
                Evitalize your brand with our BTL and road branding services,
                expertly designed to enhance visibility and reach new audiences
              </p>
              <button
                style={{
                  width: "204px",
                  height: "44px",
                  background:
                    "linear-gradient(42deg, #7436bb 0.01%, #b520a3 100%)",
                  padding: "7px 12px 10px 12px",
                  marginTop: "15px",
                  borderRadius: "0.25rem",
                  border: "1.5px solid #b520a3",
                  color: "#ffffff",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.background =
                    "linear-gradient(180deg, #ff7527 0%, #fabf28 100%)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.background =
                    "linear-gradient(42deg, #7436bb 0.01%, #b520a3 100%)")
                }
              >
                Discover More
              </button>
              <hr
                style={{
                  margin: "28px 0 0 0",
                  border: "1px solid",
                  opacity: 1,
                  color: "#000000",
                }}
              />
              <h4 className="mt-4">Connected details:</h4>
              <ul
                className=" d-flex flex-col gap-2 py-3 "
                style={{ cursor: "pointer" }}
              >
                <li className=" d-flex items-center  gap-4 font-semibold">
                  <i className="fa-regular fa-envelope"></i>
                  info@brandbell.in
                </li>
                <li className=" d-flex items-center  gap-4 font-semibold">
                  <i className="fa-solid fa-phone"></i> +91 73033 92444
                </li>
                <li className=" d-flex items-center  gap-4 font-semibold">
                  <i className="fa fa-map-marker"></i>
                  Nukleus Tower, Plot No 29, Sector 142, Noida, Uttar Pradesh
                  201305
                </li>
              </ul>
              <span className="d-flex gap-4 mt-4">
                <Link to="/#" className="p-0">
                  <i className="fa-brands fa-facebook"></i>
                </Link>
                <Link to="/#" className="p-0">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link to="/#" className="p-0">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
                <Link to="/#" className="p-0">
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
              </span>
            </div>
          </Drawer>
          <Drawer
            open={isopenmenu}
            onClose={togelmenudrawer}
            direction="left"
            className=" fixed top-0 -right-[335px]   overflow-x-hidden   "
            size={315}
          >
            <div style={{ height: "100%" }}>
              <aside id="" className="">
                <div className="sidebar">
                  <Link className="p-4" to="index">
                    <img src={logo} alt="logo" />
                  </Link>
                  <button
                    className="closebtn btn_hover1"
                    onClick={togelmenudrawer}
                    style={{ marginRight: "12px" }}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
                <div>
                  <ul>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        Contact
                      </Link>
                    </li>
                    <li className="pages">
                      <Link to="#"> Services</Link>
                    </li>
                    <li className="collapse_btn nav-item">
                      <Link
                        className="nav-link plus_collapse"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="pages"
                      >
                        <i
                          className="fa-solid fa-plus"
                          onClick={handleToggle}
                        ></i>
                      </Link>
                      <div
                        className={`collapse ${isCollapsed ? "" : "show"}`}
                        style={{
                          transition: "height 1.5s ease-in-out",
                          height: isCollapsed ? "0" : "auto",
                        }}
                      >
                        <ul>
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              to="/services/Liftbranding"
                            >
                              Lift Branding
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="#">
                              BTL Activity
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              to="/services/roadbranding"
                            >
                              Road Branding
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="#">
                              Society Activity
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </Drawer>
        </header>
      </div>
    </>
  );
}

export default Header;
