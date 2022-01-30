import React, { Component } from "react";
import ServiceBox from "./ServiceBox";
import "./services.scss";

class Services extends Component {
  render() {
    return (
      <section className="services" id="services">
        <h2 className="section-title">services</h2>
        <div className="container">
          <ServiceBox icon="fas fa-fingerprint" title="security" />
          <ServiceBox icon="fas fa-map-marked-alt" title="location" />
          <ServiceBox icon="fas fa-code" title="coding" />
          <ServiceBox icon="fas fa-bullhorn" title="marketing" />
          <ServiceBox icon="fas fa-money-check-alt" title="technology" />
          <ServiceBox icon="fas fa-screwdriver" title="troubleshooting" />
        </div>
      </section>
    );
  }
}

export default Services;
