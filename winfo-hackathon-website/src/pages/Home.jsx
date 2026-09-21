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
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="home-hero-wrap">
        <img src="/test-bg/home-page.jpg" id="home-background" loading="eager" fetchpriority="high" alt="" />
        <img
          src="/test-bg/section-1-content.png"
          className="home-hero-content"
          alt="Women in Informatics 15th Annual Hackathon, January 30-31 2027, University of Washington HUB"
        />
      </div>
      {/* ---------------- TRACKS PREVIEW ---------------- */}
      {/* <section className="section section--light">
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
      </section> */}

      {/* ---------------- SCHEDULE PREVIEW ---------------- */}
      {/* <section className="section section--dark">
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
      </section> */}

      {/* ---------------- COUNTDOWN / REGISTER ---------------- */}
      {/* <section className="section section--light countdown-section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Are You Ready to Reach New Heights?</h2>
          <Countdown target={event.countdownTarget} />
          <div style={{ marginTop: "2rem" }}>
            <a className="btn btn--primary" href={event.registerUrl}>Register Now</a>
          </div>
        </div>
      </section> */}
      {/* <Footer/> */}
    </>
  );
}
