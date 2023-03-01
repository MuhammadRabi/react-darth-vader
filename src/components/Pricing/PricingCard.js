import styled from "styled-components"
const PricingCard = ({
  title,
  price,
  space,
  email,
  subdomain,
  database,
  support,
}) => {
  return (
    <CardWrapper>
      <div className="price text-center p-3">
        <h3>{title}</h3>
        <i className="fas fa-server"></i>
        <span>{price}</span>
        <h4 className="subtitle">per month</h4>
      </div>
      <ul className="plan-details">
        <li>{space}GB HDD Space</li>
        <li>{email} Email Addresses</li>
        <li>{subdomain} Subdomains</li>
        <li>{database} databases</li>
        <li>{support} support</li>
      </ul>
      <button>choose plan</button>
    </CardWrapper>
  )
}

export default PricingCard

const CardWrapper = styled.article`
  position: relative;
  background-color: #fff;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 12px 20px 0 rgb(0 0 0 / 13%), 0 2px 4px 0 rgb(0 0 0 / 12%);
  z-index: 1;
  @media screen and (min-width: 992px) {
    &:nth-last-of-type(2) {
      transform: translateY(-25px);
    }
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 50%;
    transition: 0.5s ease-in-out;
    background-color: rgb(0 0 0 / 5%);
    z-index: -1;
  }
  &:before {
    top: 0;
    left: 0;
  }
  &:after {
    top: 50%;
    right: 0;
  }
  &:hover:after,
  &:hover:before {
    width: 100%;
  }
  .popular {
    display: block;
    position: absolute;
    top: 50px;
    right: -20px;
    color: white;
    background-color: var(--main-service-color);
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: 700;
    padding: 10px;
    width: 135px;
    text-transform: capitalize;
    transform: rotate(-90deg);
    text-align: right;
    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      right: 96px;
      border-style: solid;
      border-color: transparent transparent transparent white;
      border-width: 20px;
    }
  }
  .price {
    text-align: center;
    padding: 12px;
    h3 {
      font-size: 24px;
      font-weight: 700;
      color: #000;
    }
    span {
      display: block;
      font-size: 48px;
      font-weight: 700;
    }

    .subtitle {
      color: #777;
    }
  }
  i,
  span {
    color: var(--main-service-color);
  }
  i {
    font-size: 64px;
  }
  span {
    margin: 20px 0 10px;
  }
  .plan-details {
    li {
      border-top: 1px solid #e6e6e7;
      padding: 20px;
      text-transform: capitalize;
      text-align: left;

      &::before {
        font-family: "Font Awesome 5 Free";
        content: "\f00c";
        font-weight: 900;
        color: var(--main-service-color);
        margin-right: 10px;
      }
    }
  }

  button {
    font-size: clamp(18px, 1.5vw, 20px);
    text-transform: capitalize;
    background-color: transparent;
    border: 2px solid var(--main-service-color);
    border-radius: 6px;
    margin: 20px auto;
    display: block;
    padding: 13px 20px;
    color: var(--main-service-color);
    cursor: pointer;
    transition: 0.5s ease-in-out;
    &:hover {
      color: white;
      background-color: var(--main-service-color);
    }
  }
`
