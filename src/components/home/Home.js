import React from "react";
import BookTrailSection from "./BookTrailSection";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section4 from "./Section4";
import Section5 from "./Section5";
// import "./Home.css";
import Testimonial from "./Testimonial";

function Home() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Testimonial />
      <Section4 />
      <Section5 />
      <BookTrailSection />
    </>
  );
}

export default Home;
