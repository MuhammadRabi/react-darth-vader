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
          <img src={img1} alt="" />
        </figure>
        <div className="boxes-area">
          <WorksCard img={img1} title="Archeticture" />
          <WorksCard img={img2} title="planning strategy" />
          <WorksCard img={img3} title="business analysis" />
          duck ant malek tap boy girl bobby play
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
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    flex-wrap: wrap-reverse;
  }
  figure {
    width: 300px;
    margin: auto;
    img {
      max-width: 100%;
    }
  }
`
