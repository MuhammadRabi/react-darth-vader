import React from "react";

const StatsBox = (props) => {
  return (
    <div className="stats-box">
      <i className={props.icon}></i>
      <span className="count" data-goal={props.target}>
        0
      </span>
      <span className="name">{props.title}</span>
    </div>
  );
};

export default StatsBox;
