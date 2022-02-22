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
            <Link to="secondpage" className="nav__link">
              Second
            </Link>
          </li>
          <li className="nav__item">
            <Link to="thirdpage" className="nav__link">
              Third
            </Link>
          </li>
          <li className="nav__item">
            <Link to="fourthpage" className="nav__link">
              Fourth
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
