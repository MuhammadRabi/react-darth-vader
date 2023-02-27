import styled from "styled-components"

const GalleryBox = ({ img }) => {
  return (
    <Wrapper>
      <div className="box">
        <figure>
          <div className="animation">
            <img src={img} alt="img" />
          </div>
        </figure>
      </div>
    </Wrapper>
  )
}

export default GalleryBox

const Wrapper = styled.div`
  .box {
    margin-bottom: 16px;
    padding: 16px;
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
        animation: flashing 0.7s;
      }
      img {
        transition: $mainTransition;
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
