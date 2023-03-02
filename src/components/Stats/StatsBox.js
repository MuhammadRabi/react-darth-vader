import styled from "styled-components"
import CountUp from "react-countup"

const StatsBox = ({ icon, title, target }) => {
  return (
    <Box>
      <i className={icon}></i>
      <span className="count" data-goal={target}>
        <CountUp end={target} />
      </span>
      <span className="name">{title}</span>
    </Box>
  )
}

export default StatsBox

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background-color: #f5f5f5;
  padding: 35px;
  border-radius: 2px;
  transition: 0.5s ease-in-out;
  position: relative;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 3px;
    height: 0;
    background-color: var(--main-service-color);
    transition: 0.5s ease-in-out;
  }
  &:before {
    left: -1px;
    top: 0;
  }
  &:after {
    right: -1px;
    bottom: 0;
  }
  &:hover:before,
  &:hover:after {
    height: 100%;
  }
  &:hover {
    background-color: #fff;
  }
  i {
    font-size: 42px;
    color: #000;
  }
  .count {
    font-size: 36px;
    font-weight: 700;
    color: #000;
  }
  .name {
    font-size: 22px;
    color: var(--main-service-color);
    text-transform: capitalize;
    font-weight: 700;
  }
`
