import ServiceBox from "./ServiceBox"
import styled from "styled-components"
import SectionTitle from "../UI/SectionTitle"

const Services = () => {
  return (
    <ServiceWrapper>
      <SectionTitle title="services" />
      <div className="container">
        <ServiceBox icon="fas fa-fingerprint" title="security" />
        <ServiceBox icon="fas fa-map-marked-alt" title="location" />
        <ServiceBox icon="fas fa-code" title="coding" />
        <ServiceBox icon="fas fa-bullhorn" title="marketing" />
        <ServiceBox icon="fas fa-money-check-alt" title="technology" />
        <ServiceBox icon="fas fa-screwdriver" title="troubleshooting" />
      </div>
    </ServiceWrapper>
  )
}

export default Services

const ServiceWrapper = styled.section`
  background-color: #ececec;
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 50px;
  }
`
