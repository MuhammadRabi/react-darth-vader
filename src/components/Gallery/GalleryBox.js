import React, { Component } from "react";

class GalleryBox extends Component {
  render() {
    return (
      <div className="box">
        <figure>
          <img src={this.props.img} alt="img" />
        </figure>
      </div>
    );
  }
}
export default GalleryBox;
