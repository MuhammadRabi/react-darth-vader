import React, { Component } from "react";

class ServiceBox extends Component {
  render() {
    return (
      <div className="box">
        <i className={this.props.icon}></i>
        <div className="icon-title">
          <h3>{this.props.title}</h3>
        </div>
        <div className="info">
          <a href="#Pricing">details</a>
        </div>
      </div>
    );
  }
}

export default ServiceBox;
