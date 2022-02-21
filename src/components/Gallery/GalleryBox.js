import React from "react"
import "./gallery.scss"

const GalleryBox = (props) => {
  return (
    <div className="box">
      <figure>
        <img src={props.img} alt="img" />
      </figure>
    </div>
  )
}

export default GalleryBox
