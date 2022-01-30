import "./hero.scss";
import hero from "../../img/hero.svg";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <main>
          <h1>welcome to elzero world</h1>
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
    </section>
  );
};

export default Hero;
