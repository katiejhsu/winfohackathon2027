import { useState } from "react";

export function SectionHeader({ kicker, title, center }) {
  return (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: "2.5rem" }}>
      {kicker && <div className="section-kicker">{kicker}</div>}
      <h2>{title}</h2>
    </div>
  );
}

export function TrackCard({ track }) {
  return (
    <div className="card card--light wiggle-on-hover" id={track.id}>
      <h3>{track.name}</h3>
      <p>{track.description}</p>
      <p style={{ fontFamily: "var(--font-display)", fontSize: "0.8rem", letterSpacing: "0.08em" }}>
        THIS TRACK FOCUSES ON:
      </p>
      <ul>
        {track.focus.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </div>
  );
}

export function ScheduleList({ items }) {
  return (
    <ul className="schedule-list">
      {items.map((item) => (
        <li key={item.time + item.label} className="schedule-list__item">
          <span className="schedule-list__time">{item.time}</span>
          <span className="schedule-list__label">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

export function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div className={`faq__item ${isOpen ? "faq__item--open" : ""}`} key={item.q}>
            <button className="faq__question" onClick={() => setOpenIndex(isOpen ? null : i)}>
              <span>{item.q}</span>
              <span className="faq__icon">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <div className="faq__answer">{item.a}</div>}
          </div>
        );
      })}
    </div>
  );
}

export function SponsorGrid({ sponsors }) {
  return (
    <div className="sponsor-grid">
      {sponsors.map((s) => (
        <div className="sponsor-grid__item wiggle-on-hover" key={s.name} title={s.name}>
          {s.logo ? (
            <img src={s.logo} alt={s.name} />
          ) : (
            <span className="sponsor-grid__placeholder">{s.name}</span>
          )}
        </div>
      ))}
    </div>
  );
}
