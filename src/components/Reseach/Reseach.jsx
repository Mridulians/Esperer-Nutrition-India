import researchImage from "../../assets/ResearchImage.png";
import "./Reseach.css";

const researchStats = [
  {
    icon: "globe",
    value: "2019",
    text: "Research-led, from India to the world",
  },
  { icon: "countries", value: "14+", text: "Countries" },
  {
    icon: "patents",
    value: "5+",
    text: "Global patents in clinical & allied nutrition research",
  },
];

const ResearchIcon = ({ kind }) => {
  const icons = {
    globe: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M4.5 9h15M4.5 15h15M12 4c2.1 2.2 3 4.9 3 8s-.9 5.8-3 8M12 4c-2.1 2.2-3 4.9-3 8s.9 5.8 3 8" />
      </>
    ),
    countries: (
      <>
        <path d="M12 20s6-5.5 6-10a6 6 0 1 0-12 0c0 4.5 6 10 6 10Z" />
        <circle cx="12" cy="10" r="2" />
        <path d="m5 19 2-1M19 19l-2-1" />
      </>
    ),
    patents: (
      <>
        <path d="M12 3.5 14 5l2.5-.2.8 2.4 2.1 1.4-.8 2.4.8 2.4-2.1 1.4-.8 2.4L14 17l-2 1.5L10 17l-2.5.2-.8-2.4-2.1-1.4.8-2.4-.8-2.4 2.1-1.4.8-2.4L10 5l2-1.5Z" />
        <path d="m9 11.5 2 2 4-4M9.5 17l-1 3 3.5-1M14.5 17l1 3-3.5-1" />
      </>
    ),
  };

  return (
    <span className="research-stat-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        {icons[kind]}
      </svg>
    </span>
  );
};

const Reseach = () => {
  return (
    <section
      className="research-section"
      id="research"
      aria-labelledby="research-title"
    >
      <div className="research-inner">
        <div className="research-copy">
          <p className="research-eyebrow">Our Research</p>
          <h2 id="research-title">
            Science-Backed.
            <br />
            Real-World Impact.
          </h2>
          <p className="research-description">
            We turn research into practical nutrition solutions that make a
            difference in the lives of cancer patients.
          </p>
          <a className="research-link" href="#research-impact">
            Learn More <span aria-hidden="true">→</span>
          </a>
        </div>

        <img
          className="research-image"
          src={researchImage}
          alt="A researcher studying nutrition science through a microscope"
        />

        <div className="research-proof" id="research-impact">
          <ul className="research-stats">
            {researchStats.map((stat) => (
              <li className="research-stat" key={stat.value}>
                <ResearchIcon kind={stat.icon} />
                <div>
                  <strong>{stat.value}</strong>
                  <p>{stat.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div
            className="research-accreditations"
            aria-label="Research standards"
          >
            <div>
              <strong>ICMR</strong>
              <span>Backed</span>
            </div>
            <div>
              <strong>ESPEN / ASPEN</strong>
              <span>Aligned</span>
            </div>
            <div>
              <strong>GMP</strong>
              <span>
                USFDA-affirmed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reseach;
