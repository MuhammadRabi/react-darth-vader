import React, { Component } from "react";
import StatsBox from "./StatsBox";
import "./stats.scss";

class Stats extends Component {
  render() {
    return (
      <section id="stats" className="stats">
        <h2 className="section-title">stats</h2>
        <div className="container">
          <StatsBox icon="fas fa-users" target="45" title="clients" />
          <StatsBox
            icon="fas fa-globe-americas"
            target="15"
            title="countries"
          />
          <StatsBox
            icon="fas fa-money-check-alt"
            target="30"
            title="projects"
          />
          <StatsBox icon="fas fa-money-check-alt" target="25" title="income" />
        </div>
      </section>
    );
  }
}

export default Stats;
