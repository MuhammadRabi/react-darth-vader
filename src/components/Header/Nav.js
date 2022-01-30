import React from "react";

const Nav = (props) => {
  return (
    <li className="nav__item">
      <a href={props.target} className="nav__link">
        {props.title}
      </a>
    </li>
  );
};

export default Nav;
