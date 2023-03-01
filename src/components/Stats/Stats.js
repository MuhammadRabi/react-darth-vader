import StatsBox from "./StatsBox"
import SectionTitle from "../UI/SectionTitle"
import styled from "styled-components"

const Stats = () => {
  return (
    <StatsWrapper id="stats">
      <SectionTitle title="stats" />
      <div className="container">
        <StatsBox icon="fas fa-users" target="45" title="clients" />
        <StatsBox icon="fas fa-globe-americas" target="15" title="countries" />
        <StatsBox icon="fas fa-money-check-alt" target="30" title="projects" />
        <StatsBox icon="fas fa-money-check-alt" target="25" title="income" />
      </div>
    </StatsWrapper>
  )
}

export default Stats

const StatsWrapper = styled.section`
  background-image: url("https://picsum.photos/id/65/1200");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgb(255 255 255/ 90%);
    z-index: -1;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
  }
`
