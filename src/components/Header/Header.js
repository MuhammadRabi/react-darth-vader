import { useState, useEffect } from "react"
import "./header.scss"
import Navbar from "./Navbar"

const Header = () => {
  const [fixedNav, setFixedNav] = useState("false")

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300 ? setFixedNav(true) : setFixedNav(false)
    })

    return () => {
      window.removeEventListener("scroll")
    }
  }, [])

  return (
    <header className={fixedNav && "fixed-nav"}>
      <div className="container">
        <Navbar />
      </div>
    </header>
  )
}

export default Header
