import styled from "styled-components"

const SkillItem = ({ title, progress }) => {
  return (
    <SkillCard>
      <h3>
        {title} <span>{progress}</span>
      </h3>
      <div className="progress">
        <ProgressBar progress={progress} />
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
      display: flex;
      align-items: center;
      border: 1px solid #c9c1c1;
      font-size: 14px;
      padding: 0 4px;
      border-radius: 2px;
      color: var(--main-service-color);
    }
  }
  .progress {
    margin: 15px 0;
    height: 30px;
    background-color: #e9e9e9;
    position: relative;
  }
`

const ProgressBar = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: var(--main-service-color);
  width: ${(props) => props.progress};
  transition: 1s ease-in-out;
`
