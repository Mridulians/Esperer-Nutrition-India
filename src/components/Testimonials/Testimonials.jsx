import { useEffect, useState } from "react";
import testimonialBackground from "../../assets/TestimoniasImg.png";
import "./Testimonials.css";

const testimonials = [
  {
    quote:
      "The nutrition plan gave me energy and helped me regain my strength during treatment.",
    name: "Priya S.",
    role: "Breast Cancer Survivor",
    initials: "PS",
    tone: "rose",
  },
  {
    quote: "The team’s guidance made a real difference in my recovery journey.",
    name: "Rohit K.",
    role: "Caregiver",
    initials: "RK",
    tone: "sage",
  },
  {
    quote:
      "I feel more confident and healthier with their personalized support.",
    name: "Anjali M.",
    role: "Cancer Patient",
    initials: "AM",
    tone: "peach",
  },
  {
    quote:
      "Having a plan that changed with me made each step feel more manageable.",
    name: "Meera R.",
    role: "Patient",
    initials: "MR",
    tone: "sage",
  },
  {
    quote:
      "We finally had clear, practical answers to our everyday food questions.",
    name: "Arjun D.",
    role: "Family Caregiver",
    initials: "AD",
    tone: "peach",
  },
  {
    quote:
      "Small changes to my meals helped me feel supported throughout treatment.",
    name: "Nisha P.",
    role: "Cancer Patient",
    initials: "NP",
    tone: "rose",
  },
  {
    quote: "The advice was thoughtful, easy to follow, and made for my needs.",
    name: "Kavita T.",
    role: "Patient",
    initials: "KT",
    tone: "peach",
  },
  {
    quote: "Our family felt heard and guided through a very uncertain time.",
    name: "Sameer A.",
    role: "Caregiver",
    initials: "SA",
    tone: "sage",
  },
  {
    quote:
      "I learned how to nourish myself with more confidence and less stress.",
    name: "Farah L.",
    role: "Cancer Survivor",
    initials: "FL",
    tone: "rose",
  },
];

const ArrowIcon = ({ direction }) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    {direction === "left" ? (
      <path d="m14.5 5-7 7 7 7" />
    ) : (
      <path d="m9.5 5 7 7-7 7" />
    )}
  </svg>
);

const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const [motionOverride, setMotionOverride] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const pageCount = Math.ceil(testimonials.length / visibleCount);
  const activePage = page % pageCount;
  const isPlaying = !paused && (!reducedMotion || motionOverride);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.matchMedia("(max-width: 620px)").matches) {
        setVisibleCount(1);
      } else if (window.matchMedia("(max-width: 920px)").matches) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const updateMotionPreference = () =>
      setReducedMotion(motionPreference.matches);

    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);
    return () =>
      motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (!isPlaying) return undefined;

    const timer = window.setInterval(() => {
      setPage((currentPage) => (currentPage + 1) % pageCount);
    }, 2000);

    return () => window.clearInterval(timer);
  }, [isPlaying, pageCount]);

  const changePage = (offset) => {
    setPage((currentPage) => (currentPage + offset + pageCount) % pageCount);
  };

  const startIndex = activePage * visibleCount;
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + visibleCount,
  );

  return (
    <section
      className="testimonials-section"
      id="testimonials"
      aria-labelledby="testimonials-title"
      style={{ "--testimonials-background": `url(${testimonialBackground})` }}
    >
      <div className="testimonials-heading">
        <p className="testimonials-eyebrow">Real Stories</p>
        <h2 id="testimonials-title">Voices of Strength</h2>
        <p className="testimonials-intro">
          Hear from patients and caregivers who found
          <br className="testimonials-desktop-break" /> support, strength and
          hope through Esperer Nutrition.
        </p>
      </div>

      <div
        className="testimonials-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Patient and caregiver testimonials"
      >
        <button
          className="testimonial-arrow testimonial-arrow-previous"
          type="button"
          aria-label="Previous testimonials"
          onClick={() => changePage(-1)}
        >
          <ArrowIcon direction="left" />
        </button>

        <div className="testimonial-cards" aria-live="off">
          {visibleTestimonials.map((testimonial, index) => (
            <article className="testimonial-card" key={testimonial.name}>
              <p className="testimonial-quote">“{testimonial.quote}”</p>
              <div className="testimonial-author">
                <span
                  className={`testimonial-avatar avatar-${testimonial.tone}`}
                  aria-hidden="true"
                >
                  {testimonial.initials}
                </span>
                <span className="testimonial-author-copy">
                  <strong>{testimonial.name}</strong>
                  <small>{testimonial.role}</small>
                </span>
              </div>
              <span className="visually-hidden">
                Testimonial {startIndex + index + 1} of {testimonials.length}
              </span>
            </article>
          ))}
        </div>

        <button
          className="testimonial-arrow testimonial-arrow-next"
          type="button"
          aria-label="Next testimonials"
          onClick={() => changePage(1)}
        >
          <ArrowIcon direction="right" />
        </button>

        <div className="testimonial-controls">
          <div
            className="testimonial-pagination"
            aria-label="Choose testimonial page"
          >
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                className={`testimonial-dot${index === activePage ? " is-current" : ""}`}
                key={index}
                type="button"
                aria-label={`Show testimonial page ${index + 1}`}
                aria-current={index === activePage ? "true" : undefined}
                onClick={() => setPage(index)}
              />
            ))}
          </div>
          <button
            className="testimonial-pause"
            type="button"
            aria-label={isPlaying ? "Pause testimonials" : "Play testimonials"}
            title={isPlaying ? "Pause testimonials" : "Play testimonials"}
            onClick={() => {
              if (isPlaying) {
                setPaused(true);
              } else {
                setPaused(false);
                setMotionOverride(true);
              }
            }}
          >
            {!isPlaying ? (
              <span className="play-icon" aria-hidden="true" />
            ) : (
              <span className="pause-icon" aria-hidden="true">
                <i />
                <i />
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
