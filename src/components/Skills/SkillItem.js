const SkillItem = ({ title, progress }) => {
  return (
    <div className="skill">
      <h3>
        {title} <span>{progress}</span>
      </h3>
      <div className="progress">
        <span data-width={progress}></span>
      </div>
    </div>
  )
}

export default SkillItem
