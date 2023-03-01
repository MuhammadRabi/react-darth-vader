import styled from "styled-components"

const ServiceBox = ({ icon, title }) => {
  return (
    <Box>
      <i className={icon}></i>
      <div className="icon-title">
        <h3>{title}</h3>
      </div>
      <div className="info">
        <a href="#Pricing">details</a>
      </div>
    </Box>
  )
}

export default ServiceBox

const Box = styled.div`
  background-color: white;
  border-radius: 2px;
  box-shadow: 0 12px 20px 0 rgb(0 0 0 / 13%), 0 2px 4px 0 rgb(0 0 0 / 12%);
  position: relative;
  transition: 0.5s ease-in-out;
  counter-increment: services;

  &:before {
    content: "";
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background-color: var(--main-service-color);
    transition: 0.5s ease-in-out;
  }

  &:hover:before {
    width: 100%;
  }
  &:hover {
    transform: translateY(-10px);
  }

  i {
    display: block;
    font-size: 48px;
    padding-top: 30px;
    text-align: center;
    margin-bottom: 20px;
    color: #d5d5d5;
  }
  .icon-title {
    color: var(--main-service-color);
    text-align: center;
    font-size: 24px;
    padding-bottom: 30px;
  }
  .info {
    position: relative;
    a {
      text-align: right;
      background-color: #e6e6e7;
      padding: 15px 20px;
      color: var(--main-service-color);
    }
    &:before {
      content: "0" counter(services);
      position: absolute;
      background-color: var(--main-service-color);
      color: white;
      top: 0;
      left: 0;
      font-size: 24px;
      font-weight: 700;
      height: 100%;
      width: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &:after {
      content: "";
      position: absolute;
      transform: skew(-30deg);
      background-color: #cbcaca;
      top: 0;
      height: 102%;
      width: 60px;
      left: 70px;
    }
  }
`
