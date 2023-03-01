import styled from "styled-components"

const TestimonialCard = ({ name, title, avatar, desc }) => {
  return (
    <Wrapper>
      <h3>{name}</h3>
      <span className="title">{title}</span>
      <img src={avatar} alt="member" />
      <div className="rate">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
      <p>{desc}</p>
    </Wrapper>
  )
}

export default TestimonialCard

const Wrapper = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 25px;
  position: relative;
  h3 {
    margin: 0;
    padding: 0;
    color: #000;
  }
  .title {
    display: block;
    text-transform: capitalize;
    margin: 7px 0 4px;
    font-size: 16px;
  }
  img {
    width: 100px;
    position: absolute;
    top: -35px;
    right: -5px;
    background-color: #e6e6e7;
    border-radius: 50%;
    border: 10px solid #e6e6e7;
  }

  .rate {
    i {
      color: #ffc800;
    }
  }
  p {
    color: #969595;
    font-size: 16px;
    margin-top: 15px;
  }
`
