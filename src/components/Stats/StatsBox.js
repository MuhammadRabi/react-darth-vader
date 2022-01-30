import React, { Component } from "react";

class StatsBox extends Component {
  render() {
    return (
      <div className="stats-box">
        <i className={this.props.icon}></i>
        <span className="count" data-goal={this.props.target}>
          0
        </span>
        <span className="name">{this.props.title}</span>
      </div>
    );
  }
}

export default StatsBox;
