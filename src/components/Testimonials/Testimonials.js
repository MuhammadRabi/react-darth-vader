import React, { Component } from "react";
import TestimonialCard from "./TestimonialCard";
import "./testimonials.scss";

class Testimonials extends Component {
  render() {
    return (
      <section id="testimonial" className="testimonial">
        <h2 className="section-title">testimonials</h2>
        <div className="container">
          <TestimonialCard
            name="Muhammad Rabi"
            position="Front-End Developer"
            img={require("../../img/member-01.png")}
          />
          <TestimonialCard
            name="Hazem Ibrahim"
            position="English-Arabic Translator"
            img={require("../../img/member-02.png")}
          />
          <TestimonialCard
            name="Muhammad Riad"
            position="Phitheotherapist"
            img={require("../../img/member-03.png")}
          />
          <TestimonialCard
            name="Muhammad Rabi"
            position="Front-End Developer"
            img={require("../../img/member-04.png")}
          />
          <TestimonialCard
            name="Muhammad Rabi"
            position="Front-End Developer"
            img={require("../../img/member-05.png")}
          />
          <TestimonialCard
            name="Muhammad Rabi"
            position="Front-End Developer"
            img={require("../../img/member-06.png")}
          />
        </div>
      </section>
    );
  }
}

export default Testimonials;
