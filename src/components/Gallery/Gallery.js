import styled from "styled-components"

import GalleryBox from "./GalleryBox"
import SectionTitle from "../UI/SectionTitle"

const Gallery = () => {
  return (
    <Wrapper>
      <section className="gallery" id="gallery">
        <SectionTitle title="gallery" />
        <div className="container">
          <GalleryBox img="https://picsum.photos/id/10/700" />
          <GalleryBox img="https://picsum.photos/id/20/700" />
          <GalleryBox img="https://picsum.photos/id/30/700" />
          <GalleryBox img="https://picsum.photos/id/40/700" />
          <GalleryBox img="https://picsum.photos/id/50/700" />
          <GalleryBox img="https://picsum.photos/id/15/700" />
          <GalleryBox img="https://picsum.photos/id/25/700" />
          <GalleryBox img="https://picsum.photos/id/35/700" />
          <GalleryBox img="https://picsum.photos/id/46/700" />
          <GalleryBox img="https://picsum.photos/id/57/700" />
          <GalleryBox img="https://picsum.photos/id/73/700" />
          <GalleryBox img="https://picsum.photos/id/88/700" />
        </div>
      </section>
    </Wrapper>
  )
}

export default Gallery

const Wrapper = styled.div`
  .gallery {
    background-color: #e6e6e7;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 25px;
  }
`
