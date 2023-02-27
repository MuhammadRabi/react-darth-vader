/* import "./hero.scss"
 */ import hero from "../../img/hero.svg"
import styled from "styled-components"

const Hero = () => {
  return (
    <Wrapper>
      <div className="container">
        <main>
          <h1>welcome to React js world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            minima?
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

const Wrapper = styled.section`
  position: relative;
  .container {
    height: calc(100vh - 62px);
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    h1 {
      font-size: 48px;
      text-transform: capitalize;
      color: #000;
    }
      img {
        position: relative;
        width: 500px;
        animation: up-and-down 5s linear infinite;
  }
  .go-down {
    position: absolute;
    bottom: 15px;
    left: 50%;
    i {
      font-size: 32px;
      color: var(--main-service-color);
      animation: bouncing 1.5s infinite;
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
