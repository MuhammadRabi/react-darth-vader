import { useState, useEffect } from "react"

import styled from "styled-components"

import "../../styles.scss"

import Navbar from "./Navbar"

const Header = () => {
  const [fixedNav, setFixedNav] = useState("false")

  const handleScroll = () => {
    window.scrollY > 300 ? setFixedNav(true) : setFixedNav(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <HeaderWrapper>
      <div className={fixedNav ? "fixed-nav" : ""}>
        <Navbar />
      </div>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  .fixed-nav {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
  }
`
