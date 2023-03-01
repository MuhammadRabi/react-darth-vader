import SkillItem from "./SkillItem"
import skillsBanner from "../../assets/skills.svg"
import styled from "styled-components"
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
    width: 90vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 100px;
  }
  img {
    width: 300px;
  }
  .skills-content {
    padding: 10px 5px;
    flex: 0.75;
    @media screen and (max-width: 768px) {
      padding: 10px 45px;
    }
  }
`
