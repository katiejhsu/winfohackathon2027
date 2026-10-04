import Footer from "../components/Footer";
import "./MentorPortal.css";

const infoCards = [
  {
    icon: "/assets/resources/icon-design.png",
    title: "Notes",
    subtitle: "Google Form",
    desc: "lorem ipsum dolor sit amet consectetur adipiscing elit voluptas anim accusamus quas optio in adipiscing optio officia.",
  },
  {
    icon: "/assets/resources/icon-code.png",
    title: "Mentor Info Packet",
    subtitle: "PDF",
    desc: "lorem ipsum dolor sit amet consectetur adipiscing elit voluptas anim accusamus quas optio in adipiscing optio officia.",
  },
];

const devLinks = [
  { label: "How to collaborate with Github", url: "https://medium.com/@jonathanmines/the-ultimate-github-collaboration-guide-df816e98fb67" },
  { label: "Intro to Web Dev", url: "https://www.youtube.com/watch?v=ysEN5RaKOlA" },
  { label: "Intro to CSS Animations", url: "https://www.youtube.com/watch?v=z2LQYsZhsFw" },
];

function MentorCard({ icon, title, subtitle, desc }) {
  return (
    <div className="mentor-card">
      <div className="mentor-card__icon">
        <img src={icon} alt="" />
      </div>
      <div className="mentor-card__body">
        <h5 className="mentor-card__title">{title}</h5>
        <p className="mentor-card__subtitle">{subtitle}</p>
        <p className="mentor-card__desc">{desc}</p>
      </div>
    </div>
  );
}

function MentorTiles({ items }) {
  return (
    <div className="mentor-tiles">
      {items.map((item) => (
        <a
          className="mentor-tile"
          key={item.label}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

export default function MentorPortal() {
  return (
    <div className="mentor-portal">
      <section className="mentor-portal__top">
        <div className="mentor-portal__heading">
          <div className="mentor-portal__logo">
            <img src="/test-bg/star-element.png" alt="Winfo star icon" className="mentor-portal__star" />
            <img src="/test-bg/winfo-logo.png" alt="Winfo logo" className="mentor-portal__wordmark" />
          </div>
          <h2>Mentor Portal</h2>
          <p>Welcome mentors!</p>
          <p>Explore our resources below.</p>
        </div>

        <div className="mentor-portal__resources">
          <h2 className="mentor-portal__title">Mentor Resources</h2>

          <h3 className="mentor-portal__subtitle">Information</h3>
          <h4 className="mentor-portal__label">Workshops</h4>
          {infoCards.map((card) => (
            <MentorCard key={card.title} {...card} />
          ))}

          <h3 className="mentor-portal__subtitle mentor-portal__subtitle--spaced">Project Resources</h3>
          <h4 className="mentor-portal__label mentor-portal__label--spaced">Development</h4>
          <MentorTiles items={devLinks} />
        </div>
      </section>

      <section className="mentor-portal__bottom">
        <div className="mentor-portal__footer">
          <Footer />
        </div>
      </section>
    </div>
  );
}