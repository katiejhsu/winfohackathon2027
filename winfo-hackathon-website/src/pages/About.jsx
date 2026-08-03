import { aboutWinfo, committee, pastWinners, pastWinnersLinks, testimonials, impactStats } from "../data/content";
import "./About.css";

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker" style={{ justifyContent: "center" }}>About</div>
          <h1>Women in Informatics</h1>
        </div>
      </section>

      {/* ---------------- MISSION ---------------- */}
      <section className="section section--light">
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: "1.1rem" }}>{aboutWinfo.blurb}</p>
          <a className="btn btn--outline" style={{ borderColor: "var(--color-sky-deep)", color: "var(--color-sky-deep)" }} href={aboutWinfo.website} target="_blank" rel="noreferrer">
            Visit winfo.ischool.uw.edu
          </a>
        </div>
      </section>

      {/* ---------------- HACKATHON HISTORY (placeholder) ---------------- */}
      <section className="section section--dark">
        <div className="container">
          <h2>Hackathon History</h2>
          <p style={{ maxWidth: 700 }}>
            WINFO has hosted an annual hackathon for 15 years running, each
            year exploring a new theme. {/* TODO: expand with a short timeline
            of past themes / milestones, e.g. 2024–25 "Breaking Grounds,
            Discovering Solutions," 2025–26 "Depths of Discovery, Currents of
            Creation." */}
          </p>
        </div>
      </section>

      {/* ---------------- COMMITTEE ---------------- */}
      <section className="section section--light">
        <div className="container">
          <h2>The WINFO Hackathon Committee</h2>
          <p style={{ maxWidth: 700 }}>{committee.intro}</p>

          {committee.groups.map((group) => (
            <div key={group.role} className="committee-group">
              <h3>{group.role}</h3>
              {group.members.length === 0 ? (
                <p className="people-empty">TODO: add names + headshots</p>
              ) : (
                <div className="grid grid--4">
                  {group.members.map((name) => (
                    <div className="card card--light committee-card" key={name}>
                      <div className="person-card__photo"><span>📷</span></div>
                      <p>{name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- PHOTOS (placeholder gallery) ---------------- */}
      <section className="section section--dark">
        <div className="container">
          <h2>Photos From Last Year</h2>
          <div className="grid grid--3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div className="photo-placeholder" key={n}>Photo {n}</div>
            ))}
          </div>
          <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginTop: "1rem" }}>
            TODO: replace with real event photography.
          </p>
        </div>
      </section>

      {/* ---------------- IMPACT ---------------- */}
      <section className="section section--light">
        <div className="container">
          <h2>Last Year's Impact</h2>
          <div className="grid grid--3 impact-stats">
            {impactStats.map((s) => (
              <div className="impact-stats__item" key={s.label}>
                <span className="impact-stats__number">{s.number}</span>
                <span className="impact-stats__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PAST WINNERS ---------------- */}
      <section className="section section--dark">
        <div className="container">
          <h2>Last Year's Winners</h2>
          <div className="grid grid--2">
            {pastWinners.map((w) => (
              <div className="card winner-card" key={w.project}>
                <span className="winner-card__emoji">{w.emoji}</span>
                <div>
                  <h3>{w.track} — {w.project}</h3>
                  <p>{w.team}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            Congratulations to all of our winners and their incredible
            projects! Thank you to everyone who dove into our 14th Hackathon
            with us 🤍
          </p>
          <p>
            <a href={pastWinnersLinks.recap} target="_blank" rel="noreferrer">Recap post</a>
            {" · "}
            <a href={pastWinnersLinks.judgingSlides} target="_blank" rel="noreferrer">Judging slides</a>
          </p>
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="section section--light">
        <div className="container">
          <h2>User Testimonials</h2>
          <div className="grid grid--3">
            {testimonials.map((t) => (
              <div className="card card--light testimonial" key={t.name}>
                <p>"{t.quote}"</p>
                <p className="testimonial__name">— {t.name}{t.role ? `, ${t.role}` : ""}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
