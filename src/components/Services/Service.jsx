import serviceBackground from "../../assets/bgforServices.png";
import "./Service.css";

const serviceItems = [
  {
    kind: "consult",
    title: "Clinician Consultations",
    description: "Expert guidance from oncology nutrition specialists.",
  },
  {
    kind: "meal",
    title: "Personalized Meal Plans",
    description: "Tailored to your medical and dietary needs.",
  },
  {
    kind: "symptom",
    title: "Symptom Management",
    description:
      "Help with side effects like nausea, fatigue, loss of appetite.",
  },
  {
    kind: "support",
    title: "Ongoing Support",
    description: "Continuous care throughout your recovery journey.",
  },
];

const ServiceIcon = ({ kind }) => {
  const paths = {
    consult: (
      <>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5.5 19c.4-3.4 2.8-5.2 6.5-5.2s6.1 1.8 6.5 5.2" />
        <path d="M18 6v4M16 8h4" />
      </>
    ),
    meal: (
      <>
        <rect x="5.5" y="4.5" width="13" height="16" rx="2" />
        <path d="M9 4.5v-1h6v1M8.5 10h7M8.5 14l2 2 4-4" />
      </>
    ),
    symptom: (
      <>
        <rect x="5.5" y="4.5" width="13" height="16" rx="2" />
        <path d="M9 4.5v-1h6v1M12 9v6M9 12h6M9 18h6" />
      </>
    ),
    support: (
      <>
        <path d="M12 20s-7-4.1-7-9.1A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7 2.9C19 15.9 12 20 12 20Z" />
        <path d="M9.5 12h5M12 9.5v5" />
      </>
    ),
  };

  return (
    <span className="service-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        {paths[kind]}
      </svg>
    </span>
  );
};

const Service = () => {
  return (
    <section
      className="services-section"
      id="services"
      aria-labelledby="services-title"
      style={{ "--services-background": `url(${serviceBackground})` }}
    >
      <div className="services-inner">
        <div className="services-intro">
          <p className="services-eyebrow">Our Services</p>
          <h2 id="services-title">
            Comprehensive Nutrition
            <br />
            Support for Cancer Care.
          </h2>
          <p className="services-description">
            From diagnosis to recovery, our nutrition solutions are designed to
            meet your needs at every stage of your journey.
          </p>
          <a className="services-link" href="#research">
            Explore All Services <span aria-hidden="true">→</span>
          </a>
        </div>

        <ul className="services-list">
          {serviceItems.map((item) => (
            <li className="service-card" key={item.kind}>
              <ServiceIcon kind={item.kind} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Service;
