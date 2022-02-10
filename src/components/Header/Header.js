import { useState, useEffect } from "react"
import Nav from "./Nav"
import "./header.scss"

const Header = () => {
  const [fixedNav, setFixedNav] = useState("false")

  useEffect(() => {
    /*  const showFixedNav = () => {
      window.scrollY > 600 ? setFixedNav(true) : setFixedNav(false)
    } */

    window.addEventListener("scroll", () => {
      window.scrollY > 300 ? setFixedNav(true) : setFixedNav(false)
    })

    return () => {
      window.removeEventListener("scroll")
    }
  }, [])

  const [mobileNav, setMobileNav] = useState(false)

  return (
    <header className={fixedNav && "fixed-nav"}>
      <div className="container">
        <nav>
          <a href="#works" className="logo">
            elzero
          </a>
          <ul className={`nav__list ${mobileNav && "active"}`}>
            <Nav title="home" target="#home" />
            <Nav title="articles" target="#articles" />
            <Nav title="plans" target="#price-plans" />
            <Nav title="services" target="#services" />
            <Nav title="dsicount" target="#discount" />
          </ul>
        </nav>
        <div
          className={`nav-toggle ${mobileNav && "active"}`}
          onClick={() => setMobileNav(!mobileNav)}
        >
          <i className="fas fa-bars"></i>
          <i className="fas fa-times"></i>
        </div>
      </div>
    </header>
  )
}

export default Header
