import React from "react";
import Herosection from "./Herosection";
import Cardsection from "./Cardsection";
import ClientsSection from "./ClientsSection";
import AboutUs from "../Aboutus/AboutUs";
import Portfolio from "../Portfolio/Portfolio";
import Howwework from "./Howwework";
import Testimonial from "./Testimonial";

function Home() {
  return (
    <>
      <Herosection />
      <Cardsection />
      <ClientsSection />
      <AboutUs />
      <Portfolio />
      <Howwework />
      <Testimonial />
    </>
  );
}

export default Home;
