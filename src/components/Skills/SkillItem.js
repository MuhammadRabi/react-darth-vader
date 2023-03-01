import styled from "styled-components"

const SkillItem = ({ title, progress }) => {
  return (
    <SkillCard>
      <h3>
        {title} <span>{progress}</span>
      </h3>
      <div className="progress">
        <span data-width={progress}></span>
      </div>
    </SkillCard>
  )
}

export default SkillItem

const SkillCard = styled.article`
  h3 {
    padding: 0;
    color: #000;
    display: flex;
    justify-content: space-between;
    span {
      border: 1px solid #c9c1c1;
      padding: 2px 4px;
      font-size: 14px;
      border-radius: 2px;
      color: var(--main-service-color);
    }
  }
  .progress {
    margin: 15px 0;
    height: 30px;
    background-color: #e9e9e9;
    position: relative;
    span {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 0;
      background-color: var(--main-service-color);
      transition: 0.3s ease-in-out;
    }
  }
`
