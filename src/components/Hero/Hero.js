import hero from "../../assets/hero.svg"
import styled, { keyframes } from "styled-components"

const Hero = () => {
  return (
    <Wrapper>
      <div className="container">
        <main>
          <h1>welcome to React js world</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            eligendi harum distinctio saepe. Consequuntur a quas animi rerum
            labore consectetur itaque doloremque enim quisquam explicabo!
            Voluptas animi ex ut incidunt facere sit ipsam dicta beatae adipisci
            et quas nihil quibusdam atque accusantium, velit, ipsum natus
            commodi
          </p>
        </main>
        <figure>
          <img src={hero} alt="hero" />
        </figure>
      </div>
      <a href="#articles" className="go-down">
        <i className="fas fa-angle-double-down"></i>
      </a>
    </Wrapper>
  )
}

export default Hero

const upAndDown = keyframes`
       0%,
        100% {
          top: 0;
        }
        50% {
          top: -50px;
        }
      `
const bouncing = keyframes`
  0%,
  10%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40%,
  60% {
    transform: translateY(-20px);
  }
      `

const Wrapper = styled.section`
  position: relative;
  .container {
    height: calc(100vh - 62px);
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    @media screen and (max-width: 992px) {
      flex-direction: column;
    }
    main {
      padding: 10px 50px;
      h1 {
        font-size: clamp(24px, 6vw, 48px);
        text-transform: capitalize;
        color: #000;
      }
    }
    figure {
      margin: 0 auto;
      text-align: center;
      @media screen and (max-width: 1200px) {
        display: none;
      }
    }
    img {
      position: relative;
      width: 400px;

      animation: ${upAndDown} 5s linear infinite;
    }
    .go-down {
      position: absolute;
      bottom: 15px;
      left: 50%;
      i {
        font-size: 32px;
        color: var(--main-service-color);
        animation: ${bouncing} 1.5s infinite;
      }
    }
  }
`
