import React from "react";

const SocialIcon = (props) => {
  return (
    <a href={props.website}>
      <i className={props.icon}></i>
    </a>
  );
};

export default SocialIcon;
