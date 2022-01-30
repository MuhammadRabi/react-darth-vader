import React, { Component } from "react";

class PricingCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="price">
          <h3 className="title">{this.props.title}</h3>
          <i className="fas fa-server"></i>
          <span>{this.props.price}</span>
          <h4 className="subtitle">per month</h4>
        </div>
        <ul className="plan-details">
          <li>{this.props.space}GB HDD Space</li>
          <li>{this.props.email} Email Addresses</li>
          <li>{this.props.subdomain} Subdomains</li>
          <li>{this.props.database} databases</li>
          <li>{this.props.support} support</li>
        </ul>
        <button>choose plan</button>
      </div>
    );
  }
}

export default PricingCard;
