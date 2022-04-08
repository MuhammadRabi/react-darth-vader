import React from "react"
import PricingCard from "./PricingCard"
import "./pricing.scss"

const Pricing = () => {
  return (
    <section id="price-plans" className="price-plans">
      <h2 className="section-title">price plans</h2>
      <div className="container">
        <div className="row">
          <PricingCard
            title="basic"
            price="$25"
            space="10"
            email="5"
            subdomain="2"
            database="2"
            support="basic"
          />
          <PricingCard
            title="popular"
            price="$35"
            space="350"
            email="15"
            subdomain="10"
            database="100"
            support="pro"
          />
          <PricingCard
            title="permium"
            price="$45"
            space="100"
            email="35"
            subdomain="15"
            database="200"
            support="premium"
          />
        </div>
      </div>
    </section>
  )
}

export default Pricing
