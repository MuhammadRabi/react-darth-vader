import React, { useState } from "react"

import styled from "styled-components"
import { Link, NavLink } from "react-router-dom"

import { navLinksData } from "./navbarlinks"

import NavToggle from "./NavToggle"

function Navbar() {
  const [mobileNav, setMobileNav] = useState(false)

  return (
    <>
      <Nav>
        <Link to="/">
          <p className="logo">ELZERO</p>
        </Link>
        <ul className={`nav__list ${mobileNav ? "active" : ""}`}>
          {navLinksData.map((link) => {
            return (
              <li key={link.id} className="nav__item">
                <NavLink
                  to={link.path}
                  className="nav__link"
                  onClick={() => setMobileNav(!mobileNav)}
                >
                  {link.title}
                </NavLink>
              </li>
            )
          })}
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
  @media screen and (max-width: 768px) {
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
    @media screen and (max-width: 768px) {
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
        @media screen and (max-width: 768px) {
          font-size: 24px;
        }
      }
    }
  }
`
