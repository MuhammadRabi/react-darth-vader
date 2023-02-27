import React, { useState, useEffect } from "react"
import "./scrolltop.scss"

const ScrollTop = () => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const scrollBtnVisible = () => {
      window.scrollY >= 600 ? setIsActive(true) : setIsActive(false)
    }

    window.addEventListener("scroll", scrollBtnVisible)
    // clean up function
    return () => {
      window.removeEventListener("scroll", scrollBtnVisible)
    }
  }, [])

  const clickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <>
      <div
        className={`scroll-to-top ${isActive && "active"}`}
        onClick={clickHandler}
      >
        <i className="fas fa-arrow-up"></i>
      </div>
    </>
  )
}

export default ScrollTop
