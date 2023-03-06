import styled from "styled-components"

const WorksCard = ({ img, title }) => {
  return (
    <Box>
      <img src={img} alt={title} />
      <div className="info">
        <h3>{title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          modi fugiat sunt soluta aspernatur placeat!
        </p>
      </div>
    </Box>
  )
}

export default WorksCard

const Box = styled.article`
  background-color: #f6f6f6;
  margin: 15px auto;
  border-radius: 5px;
  border: 2px solid white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 30px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    /*   padding-left: 0;
    text-align: Center;
    margin-top: 10px; */
  }
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    background-color: #ededed;
    transition: 0.5s ease-in-out;
    z-index: -1;
  }
  &:hover:before {
    width: 100%;
    height: 100%;
  }
  img {
    width: 98px;
  }
  .info {
    padding-left: 50px;
    flex: 3;
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      text-align: Center;
      padding-left: 0;
      margin-top: 10px;
    }

    h3 {
      margin: 0;
      color: #000;
      font-size: 22px;
    }
    p {
      color: #777;
    }
  }
`
