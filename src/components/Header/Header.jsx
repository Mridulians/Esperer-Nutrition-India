import logo from "../../assets/Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="site-header">
      <nav className="header-nav header-nav-left" aria-label="Main navigation">
        <a className="nav-link is-active" href="#home">
          Home
        </a>
        <a className="nav-link" href="#about">
          About Us
        </a>
        <a className="nav-link" href="#services">
          Our Services
        </a>
      </nav>

      <a className="brand" href="#home" aria-label="Esperer Nutrition home">
        <span className="brand-image-window">
          <img src={logo} alt="Esperer Nutrition" />
        </span>
        <span className="brand-leaf" aria-hidden="true" />
      </a>

      <nav className="header-nav header-nav-right" aria-label="More navigation">
        <a className="nav-link" href="#products">
          Products &amp; Solutions
        </a>
        <a className="nav-link" href="#resources">
          Resources
        </a>
        <a className="nav-link" href="#contact">
          Contact
        </a>
        <a className="header-cta" href="#contact">
          Book a Consultation
        </a>
      </nav>

      <details className="mobile-menu">
        <summary aria-label="Open navigation menu">
          <span />
          <span />
        </summary>
        <nav className="mobile-menu-panel" aria-label="Mobile navigation">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Our Services</a>
          <a href="#products">Products &amp; Solutions</a>
          <a href="#resources">Resources</a>
          <a href="#contact">Contact</a>
          <a className="mobile-menu-cta" href="#contact">
            Book a Consultation
          </a>
        </nav>
      </details>
    </header>
  );
};

export default Header;
