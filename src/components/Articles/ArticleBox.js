import React from "react";
import styles from "./articles.module.scss";

const ArticleBox = (props) => {
  return (
    <article>
      <img src={props.img} alt="" />
      <div className={styles.content}>
        <h3 className={styles.title}>{props.title}</h3>
        <p>{props.text}</p>
      </div>
      <div className={styles["read-more"]}>
        <a href="#gallery">read more</a>
        <i className="fas fa-long-arrow-alt-right"></i>
      </div>
    </article>
  );
};

export default ArticleBox;
