import React from "react"

const PricingCard = (props) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card py-4 mb-4 position-relative bg-white">
        <div className="price text-center p-3">
          <h3 className="title text-black fw-bold">{props.title}</h3>
          <i className="fas fa-server"></i>
          <span className="fw-bolder d-block fs-1 d-block">{props.price}</span>
          <h4 className="subtitle fw-normal">per month</h4>
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
    </div>
  )
}

export default PricingCard
