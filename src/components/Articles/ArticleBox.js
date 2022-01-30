import React, { Component } from "react";

class ArticleBox extends Component {
  render() {
    return (
      <article>
        <img src={this.props.img} alt="" />
        <div className="content">
          <h3 className="title">{this.props.title}</h3>
          <p>{this.props.text}</p>
        </div>
        <div className="read-more">
          <a href="#gallery">read more</a>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </article>
    );
  }
}

export default ArticleBox;
