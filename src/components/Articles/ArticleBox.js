import styled, { keyframes } from "styled-components"

const ArticleBox = ({ img, title, text }) => {
  return (
    <Article>
      <img src={img} alt="" />
      <div className="content">
        <h3 className="title">{title}</h3>
        <p>{text}</p>
      </div>
      <div className="read-more">
        <a href="#gallery">read more</a>
        <i className="fas fa-long-arrow-alt-right"></i>
      </div>
    </Article>
  )
}

export default ArticleBox

const movingArrow = keyframes`
     100% {
    transform: translatex(5px);
  }
      `

const Article = styled.article`
  background-color: white;
  box-shadow: 0 2px 15px rgb(0 0 0 / 10%);
  transition: 0.3s ease-in-out;
  border-radius: 5px;
  img {
    max-width: 100%;
  }
  .content {
    padding: 10px 15px;
    h3 {
      padding: 0;
      color: #000;
    }
    p {
      margin: 14px auto;
    }
  }
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 2px 15px rgb(0 0 0 /20%);
  }
  &:hover i {
    -webkit-animation: ${movingArrow} 0.6s linear infinite;
    animation: ${movingArrow} 0.6s linear infinite;
  }

  .read-more {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #cecbcb;
    padding: 15px;
    color: var(--main-service-color);
    position: relative;
    a {
      font-weight: 700;
    }
    i {
      font-size: 24px;
    }
  }
`
