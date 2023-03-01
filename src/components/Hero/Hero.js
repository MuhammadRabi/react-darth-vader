import hero from "../../assets/hero.svg"
import styled, { keyframes } from "styled-components"

const Hero = () => {
  return (
    <Wrapper>
      <div className="container">
        <main>
          <h1>welcome to React js world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            minima? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officia, minima? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Officia, minima? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Officia, minima?
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
    flex-wrap: wrap;
    gap: 50px;
    main {
      flex: 1;
    }
    h1 {
      font-size: clamp(24px, 6vw, 48px);
      text-transform: capitalize;
      color: #000;
    }
    figure {
      flex: 1;
      margin: 0 auto;
      text-align: center;
    }
    img {
      position: relative;
      width: 500px;
      animation: ${upAndDown} 5s linear infinite;
      @media screen and (max-width: 768px) {
        width: 300px;
      }
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

/* function scrollToRef(ref) {
  ref.current.scrollIntoView({ behavior: "smooth" })
}


  const myRef = useRef(null)

  return (
    <div>
      <section ref={myRef}>Scroll to me</section>
      <button onClick={() => scrollToRef(myRef)}>Scroll to section</button>
    </div>
  )

 */
