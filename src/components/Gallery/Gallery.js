import React from "react"
import GalleryBox from "./GalleryBox"
import "./gallery.scss"

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h2 className="section-title">gallery</h2>
      <div className="container">
        <div className="grid-content">
          <GalleryBox img="https://picsum.photos/id/10/700" />
          <GalleryBox img="https://picsum.photos/id/20/700" />
          <GalleryBox img="https://picsum.photos/id/30/700" />
          <GalleryBox img="https://picsum.photos/id/40/700" />
          <GalleryBox img="https://picsum.photos/id/50/700" />
          <GalleryBox img="https://picsum.photos/id/15/700" />
          <GalleryBox img="https://picsum.photos/id/25/700" />
          <GalleryBox img="https://picsum.photos/id/35/700" />
          <GalleryBox img="https://picsum.photos/id/45/700" />
          <GalleryBox img="https://picsum.photos/id/57/700" />
        </div>
      </div>
    </section>
  )
}

export default Gallery
