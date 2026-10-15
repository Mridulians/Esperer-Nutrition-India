import "./App.css";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/HeroSection/Hero.jsx";
import Purpose from "./components/Purpose/Purpose.jsx";
import Service from "./components/Services/Service.jsx";
import Reseach from "./components/Reseach/Reseach.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <div className="app-shell">
      <main id="home" className="home-page">
        <Header />
        <Hero />
        <Purpose />
        <Service />
        <Reseach />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
