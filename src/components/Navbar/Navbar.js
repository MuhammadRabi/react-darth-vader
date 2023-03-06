import React, { useState, useEffect } from "react"

import styled from "styled-components"
import { Link, NavLink } from "react-router-dom"

import { navLinksData } from "./navbarlinks"

import NavToggle from "./NavToggle"

function Navbar() {
  const [fixedNav, setFixedNav] = useState(false)

  const handleScroll = () => {
    window.scrollY > 300 ? setFixedNav(true) : setFixedNav(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const [mobileNav, setMobileNav] = useState(false)

  return (
    <>
      <Nav className={fixedNav ? "fixed-nav" : ""}>
        <Link to="/">
          <p className="logo">ELZERO</p>
        </Link>
        <ul className={`nav__list ${mobileNav ? "active" : ""}`}>
          {navLinksData.map(({ id, path, title }) => (
            <li key={id} className="nav__item">
              <NavLink
                to={path}
                className="nav__link"
                onClick={() => setMobileNav(false)}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </Nav>
      <NavToggle mobileNav={mobileNav} setMobileNav={setMobileNav} />
    </>
  )
}

export default Navbar

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  &.fixed-nav {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
  }

  @media screen and (max-width: 992px) {
    justify-content: space-between;
  }
  .logo {
    color: var(--main-service-color);
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 1px;
    flex: 0.25;
    height: 62px;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav__list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0.5;
    @media screen and (max-width: 992px) {
      position: fixed;
      top: -100%;
      left: 0;
      width: 100%;
      height: 100vh;
      flex-direction: column;
      background-color: white;
      z-index: 100;
      transition: 0.5s ease-in-out;
      &.active {
        top: 0;
      }
    }
    .nav__item {
      font-size: 18px;
      .nav__link {
        height: 62px;
        line-height: 62px;
        padding: 0 25px;
        position: relative;
        transition: 0.2s ease-in-out;
        &:hover,
        &.active {
          color: var(--main-service-color);
        }
        &:before {
          height: 3px;
          background-color: var(--main-service-color);
        }
        &:before,
        &:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          transition: 0.2s ease-in-out;
        }

        &:after {
          height: 100%;
          background-color: rgb(0 0 0 / 1%);
          z-index: -1;
        }
        &:hover:after,
        &:hover:before,
        &.active:before,
        &.active:after {
          width: 100%;
        }
        @media screen and (max-width: 992px) {
          font-size: 24px;
        }
      }
    }
  }
`
