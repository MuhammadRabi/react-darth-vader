import "./articles.scss"

const ArticleBox = ({ img, title, text }) => {
  return (
    <article>
      <img src={img} alt="" />
      <div className="content">
        <h3 className="title">{title}</h3>
        <p>{text}</p>
      </div>
      <div className="read-more">
        <a href="#gallery">read more</a>
        <i className="fas fa-long-arrow-alt-right"></i>
      </div>
    </article>
  )
}

export default ArticleBox
