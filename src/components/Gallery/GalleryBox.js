import React from "react"
import "./gallery.scss"

const GalleryBox = ({ img }) => {
  return (
    <div className="col-sm-6 col-md-3">
      <div className="box mb-4 p-2 bg-white position-relative">
        <div className="position-relative d-flex overflow-hidden">
          <img src={img} alt="img" className="mw-100" />
        </div>
      </div>
    </div>
  )
}

export default GalleryBox
