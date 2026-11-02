import { useState, useRef, useEffect } from "react";
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
  // Bear walks across the mountain when it scrolls into view (same trigger as the home page bear)
  const bearRef = useRef(null);
  const bearTriggered = useRef(false);
  const [bearWalking, setBearWalking] = useState(false);
  useEffect(() => {
    const el = bearRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !bearTriggered.current) {
            bearTriggered.current = true;
            setBearWalking(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // RED-DOT COORDINATE TOOL: click anywhere on the page to drop a dot that shows its left%/top%.
  // Dots are tracked per section (top / bottom) since each section has its own % coordinate space.
  const [anchorPoints, setAnchorPoints] = useState([]);
  const handleAnchorClick = (section) => (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const left = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
    const top = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
    setAnchorPoints((prev) => [...prev, { section, left, top }]);
  };
  const renderDots = (section) =>
    anchorPoints
      .filter((pt) => pt.section === section)
      .map((pt, i) => (
        <div
          key={i}
          className="anchor-marker"
          style={{ left: `${pt.left}%`, top: `${pt.top}%` }}
        >
          <span className="anchor-marker__dot"></span>
          <span className="anchor-marker__label">{section}: left: {pt.left}%, top: {pt.top}%</span>
        </div>
      ));

  return (
    <div className="mentor-portal">
      <section className="mentor-portal__top" onClick={handleAnchorClick("top")}>
        {renderDots("top")}
        <img
          ref={bearRef}
          src="/assets/characters/pink-bear.png"
          alt="Bear hiking across the mountain"
          className={`mentor-bear${bearWalking ? " mentor-bear--walk" : ""}`}
        />
        <div className="mentor-portal__heading">
          <div className="mentor-portal__logo">
            <img src="/assets/logo/star-element.png" alt="Winfo star icon" className="mentor-portal__star" />
            <img src="/assets/logo/winfo-logo.png" alt="Winfo logo" className="mentor-portal__wordmark" />
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

      <section className="mentor-portal__bottom" onClick={handleAnchorClick("bottom")}>
        {renderDots("bottom")}
        <div className="mentor-portal__footer">
          <Footer />
        </div>
      </section>
    </div>
  );
}