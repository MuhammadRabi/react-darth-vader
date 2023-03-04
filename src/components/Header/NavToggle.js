import styled from "styled-components"

const NavToggle = ({ mobileNav, setMobileNav }) => {
  const NavToggle = () => {
    setMobileNav(!mobileNav)
  }

  return (
    <ToggleBtn>
      <div
        className={`nav-toggle ${mobileNav ? "active" : ""}`}
        onClick={NavToggle}
      >
        <i className="fas fa-bars"></i>
        <i className="fas fa-times"></i>
      </div>
    </ToggleBtn>
  )
}
export default NavToggle

const ToggleBtn = styled.div`
  .nav-toggle {
    z-index: 101;
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
    }
    position: absolute;
    top: 20px;
    right: 25px;
    i {
      font-size: 24px;
      padding: 5px;
      cursor: pointer;
    }
    i:nth-child(2) {
      display: none;
    }
    &.active i:nth-child(1) {
      display: none;
    }
    &.active i:nth-child(2) {
      display: block;
    }
  }
`
