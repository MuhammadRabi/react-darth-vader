import React from "react";
import ArticleBox from "./ArticleBox";
import styles from "./articles.module.scss";

const Articles = () => {
  return (
    <section id="articles" className={styles.articles}>
      <h2 className="section-title">articles</h2>
      <div className="container">
        <div className={styles["grid-content"]}>
          <ArticleBox
            img="https://picsum.photos/id/19/700"
            title="trivia games"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab culpa
            qui impedit, aperiam asperiores quia?"
          />
          <ArticleBox
            img="https://picsum.photos/id/29/700"
            title="trivia games"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab culpa
            qui impedit, aperiam asperiores quia?"
          />
          <ArticleBox
            img="https://picsum.photos/id/39/700"
            title="trivia games"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab culpa
            qui impedit, aperiam asperiores quia?"
          />
          <ArticleBox
            img="https://picsum.photos/id/49/700"
            title="trivia games"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab culpa
            qui impedit, aperiam asperiores quia?"
          />
          <ArticleBox
            img="https://picsum.photos/id/59/700"
            title="trivia games"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab culpa
            qui impedit, aperiam asperiores quia?"
          />
          <ArticleBox
            img="https://picsum.photos/id/69/700"
            title="trivia games"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab culpa
            qui impedit, aperiam asperiores quia?"
          />
          <ArticleBox
            img="https://picsum.photos/id/79/700"
            title="trivia games"
            text="Lorem ipsum, dolor sit amet con0sectetur adipisicing elit. Ab culpa
            qui impedit, aperiam asperiores quia?"
          />
          <ArticleBox
            img="https://picsum.photos/id/89/700"
            title="trivia games"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab culpa
            qui impedit, aperiam asperiores quia?"
          />
        </div>
      </div>
    </section>
  );
};

export default Articles;
