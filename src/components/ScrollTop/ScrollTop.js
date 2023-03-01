import React, { useState, useEffect } from "react"
import styled from "styled-components"

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
      <ScrollBtn>
        <div
          className={`scroll-to-top ${isActive && "active"}`}
          onClick={clickHandler}
        >
          <i className="fas fa-arrow-up"></i>
        </div>
      </ScrollBtn>
    </>
  )
}

export default ScrollTop

const ScrollBtn = styled.div`
  .scroll-to-top {
    position: fixed;
    bottom: 25px;
    right: 25px;
    cursor: pointer;
    color: white;
    background-color: var(--main-service-color);
    border-radius: 2px;
    padding: 7px 10px;
    font-size: 24px;
    display: block;
    z-index: 999;
    transition: 0.3s ease-in-out;
    display: none;
    &.active {
      display: block;
    }
  }
`
