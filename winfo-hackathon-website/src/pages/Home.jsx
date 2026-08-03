import { Link } from "react-router-dom";
import Countdown from "../components/Countdown";
import { SectionHeader, TrackCard, ScheduleList, SponsorGrid } from "../components/Reusable";
import {
  event,
  mission,
  themeStory,
  goals,
  tracks,
  hackingDaySchedule,
  judgingDaySchedule,
  sponsors,
  impactStats,
} from "../data/content";

export default function Home() {
  return (
    <>
      {/* ---------------- HERO / MISSION ---------------- */}
      <section className="hero">
        <div className="container hero__inner fade-in-up">
          <div className="section-kicker">2026–2027 · 15th Annual Hackathon</div>
          <h1>{event.name}</h1>
          <p className="hero__theme">"{event.theme}"</p>
          <div className="eyebrow-meta" style={{ justifyContent: "center" }}>
            <span>📅 {event.dates}</span>
            <span>📍 {event.hackingLocation}</span>
          </div>
          <p className="hero__blurb">{mission.blurb}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={event.registerUrl}>Register Now</a>
            <Link className="btn btn--outline" to="/tracks">See the Tracks</Link>
          </div>
        </div>
      </section>

      {/* ---------------- THEME ---------------- */}
      <section className="section section--light">
        <div className="container">
          <SectionHeader kicker="Our Theme" title={themeStory.heading} />
          <div className="grid grid--2">
            <div>
              {themeStory.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="theme-media card--light card" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* TODO: swap for the highlight reel <video> or embed once available */}
              <span style={{ color: "var(--color-sky-mid)", textAlign: "center" }}>
                🎞️ Highlight reel from WINFO's 2026 Hackathon — coming soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- GOALS ---------------- */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeader kicker="Our Hackathon" title="Goals" />
          <div className="grid grid--2">
            {goals.map((g) => (
              <div className="goal" key={g.number}>
                <span className="goal__number">{g.number}</span>
                <div>
                  <h3>{g.title}</h3>
                  <p>{g.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TRACKS PREVIEW ---------------- */}
      <section className="section section--light">
        <div className="container">
          <SectionHeader kicker="Compete" title="Prize Tracks" />
          <div className="grid grid--2">
            {tracks.map((t) => (
              <TrackCard track={t} key={t.id} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link className="btn btn--outline" to="/tracks" style={{ borderColor: "var(--color-sky-deep)", color: "var(--color-sky-deep)" }}>
              Full track details →
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- SCHEDULE PREVIEW ---------------- */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeader kicker="Plan Your Trip" title="Schedule" />
          <div className="grid grid--2">
            <div>
              <h3>Hacking Day</h3>
              <div className="eyebrow-meta">
                <span>{event.hackingDate}</span>
                <span>{event.hackingLocation}</span>
              </div>
              <ScheduleList items={hackingDaySchedule} />
            </div>
            <div>
              <h3>Judging Day</h3>
              <div className="eyebrow-meta">
                <span>{event.judgingDate}</span>
                <span>{event.judgingLocation}</span>
              </div>
              <ScheduleList items={judgingDaySchedule} />
              <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                *Judging day attendance is only required for track sponsors and finalists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- IMPACT STATS ---------------- */}
      <section className="section section--light">
        <div className="container">
          <SectionHeader kicker="Last Year" title="Our Impact" center />
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

      {/* ---------------- SPONSORS ---------------- */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeader kicker="With Gratitude" title="Our Sponsors" center />
          <SponsorGrid sponsors={sponsors} />
        </div>
      </section>

      {/* ---------------- COUNTDOWN / REGISTER ---------------- */}
      <section className="section section--light countdown-section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Are You Ready to Reach New Heights?</h2>
          <Countdown target={event.countdownTarget} />
          <div style={{ marginTop: "2rem" }}>
            <a className="btn btn--primary" href={event.registerUrl}>Register Now</a>
          </div>
        </div>
      </section>
    </>
  );
}
