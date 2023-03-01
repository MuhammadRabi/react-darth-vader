import styled, { keyframes } from "styled-components"

const GalleryBox = ({ img }) => {
  return (
    <GalleryWrapper>
      <div className="box">
        <figure>
          <div className="animation">
            <img src={img} alt="img" />
          </div>
        </figure>
      </div>
    </GalleryWrapper>
  )
}

export default GalleryBox

const flashing = keyframes`
     0%,
  40% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    width: 200%;
    height: 200%;
  }
      `

const GalleryWrapper = styled.div`
  .box {
    margin-bottom: 8px;
    padding: 8px;
    background-color: #fff;
    position: relative;
    box-shadow: 0px 12px 20px 0px rgb(0 0 0 /13%),
      0px 2px 4px 0px rgb(0 0 0 / 12%);
  }
  figure {
    position: relative;
    display: flex;
    overflow: hidden;
    .animation {
      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0;
        height: 0;
        background-color: rgb(255 255 255/ 20%);
        z-index: 2;
      }
      &:hover:before {
        animation: ${flashing} 0.7s;
      }
      img {
        display: flex;
        transition: 0.3s ease-in-out;
      }
      &:hover img {
        transform: rotate(2deg) scale(1.1);
      }
    }
    img {
      max-width: 100%;
      object-fit: cover;
    }
  }
`
