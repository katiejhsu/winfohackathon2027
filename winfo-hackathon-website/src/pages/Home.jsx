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
        <img src="/test-bg/star-element.png" alt="Winfo star icon" className="hero-star" />
        <img src="/test-bg/winfo-logo.png" alt="Winfo logo" className="hero-logo" />
        <img src="/test-bg/headline-line1.svg" alt="Women in Informatics' 15th Annual Hackathon banner logo" className="hero-headline hero-headline--1" />
        <img src="/test-bg/headline-line2.svg" alt="" className="hero-headline hero-headline--2" />
        <p className="hero-meta hero-meta--1">
          <img src="/test-bg/image106.png" alt="" className="hero-meta__icon" /> {event.heroDates}
        </p>
        <p className="hero-meta hero-meta--2">
          <img src="/test-bg/navigation.png" alt="" className="hero-meta__icon hero-meta__icon--pin" /> {event.heroLocation}
        </p>
        <a className="hero-register-btn" href={event.registerUrl}>Register Now!</a>
        <img src="/test-bg/bear.png" className="home-asset home-asset--bear" alt="" />
        <img src="/test-bg/ribbon.png" className="home-asset home-asset--ribbon" alt="Hikers, get ready to trek" />
        <img src="/test-bg/goat.png" className="home-asset home-asset--goat" alt="" />
      </div>
      <div>
        <img src="/test-bg/section-2-content.png" className="section-two-content" />
      </div>
      <div>
        <img src="/test-bg/section-3-content.png" className="section-three-content" />
      </div>
      <div>
        <iframe className="section-four-content" src="https://www.youtube.com/embed/7dFSPF8vwVo?si=d8kmyEUU2H37yE3j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div>
        <img src="/test-bg/section-5-content.png" className="section-five-content" />
      </div>
      <div>
        <img id="schedule" src="/test-bg/section-6-content.png" className="section-six-content" />
      </div>
      <div>
        <img id="faq" src="/test-bg/section-7-content.png" className="section-seven-content" />
      </div>
      <div>
        <img src="/test-bg/section-8-content.png" className="section-eight-content" />
      </div>
       <div>
        <img src="/test-bg/section-9-content.png" className="section-nine-content" />
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
