import { people } from "../data/content";
import "./People.css";

function PersonCard({ person }) {
  return (
    <div className="person-card card--light card">
      <div className="person-card__photo">
        {person.photo ? <img src={person.photo} alt={person.name} /> : <span>📷</span>}
      </div>
      <h3>{person.name}</h3>
      <p className="person-card__role">{person.role}</p>
      <p className="person-card__company">{person.company}</p>
      {person.email && <a href={`mailto:${person.email}`}>{person.email}</a>}
    </div>
  );
}

function PeopleSection({ title, list, emptyLabel }) {
  return (
    <div style={{ marginBottom: "3.5rem" }}>
      <h2>{title}</h2>
      {list.length === 0 ? (
        <p className="people-empty">
          {emptyLabel} — TODO: add confirmed names, roles, companies, and
          (optionally) headshots/emails here once finalized.
        </p>
      ) : (
        <div className="grid grid--4">
          {list.map((p) => (
            <PersonCard person={p} key={p.name} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function People() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker" style={{ justifyContent: "center" }}>The People</div>
          <h1>Meet Our Experts</h1>
          <p style={{ maxWidth: 620, margin: "0 auto", color: "var(--color-text-muted)" }}>
            Our speakers, mentors, and judges make this hackathon possible.
            Note: only include mentor/judge info after confirming they're
            comfortable being listed publicly.
          </p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <PeopleSection title="Speakers" list={people.speakers} emptyLabel="Speaker list coming soon" />
          <PeopleSection title="Mentors" list={people.mentors} emptyLabel="Mentor list coming soon" />
          <PeopleSection title="Judges" list={people.judges} emptyLabel="Judge list coming soon" />
        </div>
      </section>
    </>
  );
}
