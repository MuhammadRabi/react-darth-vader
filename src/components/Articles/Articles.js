import SectionTitle from "../UI/SectionTitle"
import ArticleBox from "./ArticleBox"
import articlesData from "./articlesData"
import styled from "styled-components"

const Articles = () => {
  return (
    <ArticlesWrapper id="articles" className="articles">
      <SectionTitle title="articles" />
      <div className="container">
        {articlesData.map((article) => {
          return <ArticleBox key={article.id} {...article} />
        })}
      </div>
    </ArticlesWrapper>
  )
}

export default Articles

const ArticlesWrapper = styled.section`
  background-color: #ececec;
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    gap: 40px;
  }
`
