import styled from "styled-components"

import skillsBanner from "../../assets/skills.svg"

import SkillItem from "./SkillItem"
import SectionTitle from "../UI/SectionTitle"

const Skills = () => {
  return (
    <SkillsWrapper>
      <SectionTitle title="skills" />
      <div className="container">
        <img src={skillsBanner} alt="" />
        <div className="skills-content">
          <SkillItem title="web design" progress="80%" />
          <SkillItem title="UI/UX" progress="75%" />
          <SkillItem title="backend skills" progress="85%" />
          <SkillItem title="front-end skills" progress="90%" />
        </div>
      </div>
    </SkillsWrapper>
  )
}

export default Skills

const SkillsWrapper = styled.section`
  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 992px) {
      flex-direction: column;
      gap: 30px;
    }
    gap: 150px;
  }
  img {
    width: 300px;
  }
  .skills-content {
    padding: 10px 5px;
    flex: 1;
    @media screen and (max-width: 992px) {
      width: 100%;
      padding: 10px 45px;
    }
  }
`
