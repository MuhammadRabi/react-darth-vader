import SkillItem from "./SkillItem";
import "./skills.scss";
import skillsBanner from "../../img/skills.svg";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">skills</h2>
      <div className="container">
        <img src={skillsBanner} alt="" />
        <div className="skills-content">
          <SkillItem title="web design" progress="80%" />
          <SkillItem title="UI/UX" progress="75%" />
          <SkillItem title="backend skills" progress="85%" />
          <SkillItem title="front-end skills" progress="90%" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
