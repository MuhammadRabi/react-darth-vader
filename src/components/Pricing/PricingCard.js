import React from "react"

const PricingCard = (props) => {
  return (
    <div className="card">
      <div className="price">
        <h3 className="title">{props.title}</h3>
        <i className="fas fa-server"></i>
        <span>{props.price}</span>
        <h4 className="subtitle">per month</h4>
      </div>
      <ul className="plan-details">
        <li>{props.space}GB HDD Space</li>
        <li>{props.email} Email Addresses</li>
        <li>{props.subdomain} Subdomains</li>
        <li>{props.database} databases</li>
        <li>{props.support} support</li>
      </ul>
      <button>choose plan</button>
    </div>
  )
}

export default PricingCard
