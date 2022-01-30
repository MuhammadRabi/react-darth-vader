import React, { useState } from "react";
import "./scrolltop.scss";
const ScrollTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  const scrollBtnVisible = () => {
    window.scrollY >= 600 ? setShowBtn(true) : setShowBtn(false);
  };

  window.addEventListener("scroll", scrollBtnVisible);

  const clickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`scroll-to-top ${showBtn && "active"}`}
        onClick={clickHandler}
      >
        <i className="fas fa-arrow-up"></i>
      </div>
    </>
  );
};

export default ScrollTop;
