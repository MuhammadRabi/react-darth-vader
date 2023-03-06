import styled from "styled-components"

import img1 from "../../assets/work-01.png"
import img2 from "../../assets/work-02.png"
import img3 from "../../assets/work-03.png"

import WorksCard from "./WorksCard"
import SectionTitle from "../UI/SectionTitle"

const Works = () => {
  return (
    <WorksWrapper>
      <SectionTitle title="works" />
      <div className="container">
        <figure>
          <img src={img1} alt="work-section" />
        </figure>
        <div className="boxes-area">
          <WorksCard img={img1} title="Archeticture" />
          <WorksCard img={img2} title="planning strategy" />
          <WorksCard img={img3} title="business analysis" />
        </div>
      </div>
    </WorksWrapper>
  )
}

export default Works

const WorksWrapper = styled.section`
  background-color: #e6e6e7;
  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 100px;
    @media screen and (max-width: 992px) {
      flex-direction: column;
    }
  }
  figure {
    margin: auto;
    width: 400px;
    img {
      max-width: 100%;
    }
  }
`
