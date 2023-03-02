import styled from "styled-components"

import data from "./pricingData"

import PricingCard from "./PricingCard"
import SectionTitle from "../UI/SectionTitle"

const Pricing = () => {
  return (
    <Wrapper>
      <SectionTitle title="price plans" />
      <div className="container">
        {data.map((plan) => {
          return <PricingCard key={plan.id} {...plan} />
        })}
      </div>
    </Wrapper>
  )
}

export default Pricing

const Wrapper = styled.section`
  background-color: #ececec;
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    text-align: center;
    gap: 35px;
  }
`
