import React, { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [mobileNav, setMobileNav] = useState(false)

  return (
    <>
      <nav>
        <a href="#works" className="logo">
          elzero
        </a>
        <ul className={`nav__list ${mobileNav && "active"}`}>
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="articles" className="nav__link">
              Articles
            </Link>
          </li>
          <li className="nav__item">
            <Link to="staff" className="nav__link">
              Staff
            </Link>
          </li>
          <li className="nav__item">
            <Link to="about" className="nav__link">
              About us
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={`nav-toggle ${mobileNav && "active"}`}
        onClick={() => setMobileNav(!mobileNav)}
      >
        <i className="fas fa-bars"></i>
        <i className="fas fa-times"></i>
      </div>
    </>
  )
}

export default Navbar
