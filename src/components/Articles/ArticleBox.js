import React from "react"
import "./articles.scss"

const ArticleBox = (props) => {
  return (
    <article>
      <img src={props.img} alt="" />
      <div className="content">
        <h3 className="title">{props.title}</h3>
        <p>{props.text}</p>
      </div>
      <div className="read-more">
        <a href="#gallery">read more</a>
        <i className="fas fa-long-arrow-alt-right"></i>
      </div>
    </article>
  )
}

export default ArticleBox
