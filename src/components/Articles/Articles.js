import SectionTitle from "../UI/SectionTitle"
import ArticleBox from "./ArticleBox"
import "./articles.scss"
import articlesData from "./articlesData"

const Articles = () => {
  return (
    <section id="articles" className="articles">
      <SectionTitle title="articles" />
      <div className="container">
        <div className="grid-content">
          {articlesData.map((article) => {
            return <ArticleBox key={article.id} {...article} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Articles
