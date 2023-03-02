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
    flex-wrap: wrap;
    gap: 50px;
  }
  img {
    width: 300px;
    flex: 0 1 auto;
  }
  .skills-content {
    padding: 10px 5px;
    flex: 1 0 auto;
    @media screen and (max-width: 768px) {
      padding: 10px 45px;
    }
  }
`
