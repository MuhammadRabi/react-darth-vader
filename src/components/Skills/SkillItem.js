const SkillItem = (props) => {
  return (
    <div className="skill">
      <h3>
        {props.title} <span>{props.progress}</span>
      </h3>
      <div className="progress">
        <span data-width={props.progress}></span>
      </div>
    </div>
  );
};

export default SkillItem;
