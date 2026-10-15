import heroImage from "../../assets/HeroImg1.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      className="hero-section"
      aria-labelledby="hero-title"
      style={{ "--hero-image": `url(${heroImage})` }}
    >
      <div className="hero-copy">
        <p className="hero-eyebrow">Science / Nutrition / Better Tomorrows</p>
        <h1 id="hero-title">
          Personalized
          <br />
          Nutrition for
          <br />
          Stronger Journeys
        </h1>
        <p className="hero-description">
          Evidence-based nutrition solutions designed
          <br className="desktop-break" /> to support cancer care — because
          better nutrition
          <br className="desktop-break" /> builds better outcomes.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            Book a Consultation
          </a>
          <a className="button button-secondary" href="#services">
            Explore Our Services
          </a>
        </div>
      </div>

      <p
        className="hero-mantra"
        aria-label="Better nutrition. Brighter tomorrows."
      >
        Better
        <br />
        nutrition.
        <br />
        Brighter
        <br />
        tomorrows.
        <span aria-hidden="true" />
      </p>
    </section>
  );
};

export default Hero;
