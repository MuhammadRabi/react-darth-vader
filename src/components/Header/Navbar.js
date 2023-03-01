import React, { useState } from "react"
import { Link } from "react-router-dom"
import { navLinksData } from "./navbarlinks"
import styled from "styled-components"
import NavToggle from "./NavToggle"

function Navbar() {
  const [mobileNav, setMobileNav] = useState(false)

  return (
    <>
      <Nav>
        <a href="#works" className="logo">
          elzero
        </a>
        <ul className={`nav__list ${mobileNav ? "active" : ""}`}>
          {navLinksData.map((link) => {
            return (
              <li key={link.id} className="nav__item">
                <Link to={link.path} className="nav__link">
                  {link.title}
                </Link>
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
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      display: none;
    }
    .logo {
      color: var(--main-service-color);
      font-size: 28px;
      font-weight: 700;
      letter-spacing: 1px;
      flex: 0.25;
      height: 62px;
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
  }
`
