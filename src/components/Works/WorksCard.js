import React from "react";

const WorksCard = (props) => {
  return (
    <div className="box">
      <img src={props.img} alt={props.title} />
      <div className="info">
        <h3>{props.title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          modi fugiat sunt soluta aspernatur placeat!
        </p>
      </div>
    </div>
  );
};

export default WorksCard;
