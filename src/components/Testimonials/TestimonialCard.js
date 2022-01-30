import React, { Component } from "react";

class TestimonialCard extends Component {
  render() {
    /*       let image = require('../../img/member-01.png');
     */ return (
      <div className="card">
        <h3>{this.props.name}</h3>
        <span className="title">{this.props.position}</span>
        <img src={this.props.img} alt="member" />
        <div className="rate">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
          doloremque ex ullam eum corrupti ut autem enim veritatis nihil ipsum!
          Odio repudiandae optio neque voluptas!
        </p>
      </div>
    );
  }
}

export default TestimonialCard;
