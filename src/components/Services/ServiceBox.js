import React from "react";

const ServiceBox = (props) => {
  return (
    <div className="box">
      <i className={props.icon}></i>
      <div className="icon-title">
        <h3>{props.title}</h3>
      </div>
      <div className="info">
        <a href="#Pricing">details</a>
      </div>
    </div>
  );
};

export default ServiceBox;
