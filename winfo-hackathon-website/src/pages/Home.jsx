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
        <img src="/test-bg/section2-badges.png" alt="Triangle tree patch, star bear patch, circle mountain patch" className="section-two-badges" />
        <h2 className="section-two-headline">Ready to<br />Reach New<br />Heights?</h2>
        <p className="section-two-blurb">
          Women in Informatics is excited to invite you to our 15th Annual
          Hackathon, <span className="section-two-blurb__accent">&#8220;Peaks of Possibility, Paths of Progress&#8221;</span>.
          Join us for a day of developing technology solutions for social good
          and celebrating equity and inclusion in the technology field.
        </p>
      </div>
      <div>
        <div className="section-three-content">
          <h2 className="section-three-heading">Hackathon Theme</h2>
          <p className="section-three-body">
            Last year, our theme, <strong>&#8220;Depths of Discovery, Currents of Creation&#8221;</strong> emphasized the power of exploration, creativity, and collaboration in shaping the future of technology.
          </p>
          <p className="section-three-body">This year, we&#8217;re setting out on a new path:</p>
          <p className="section-three-banner">PEAKS OF POSSIBILITY,<br />PATHS OF PROGRESS</p>
          <p className="section-three-body">
            Inspired by the winding trails, towering mountains, and the natural beauty of the Pacific Northwest, our theme reflects the journey of <strong>discovery in technology.</strong> We believe ingenuity emerges when participants venture beyond familiar ground and pursue bold, creative ideas.
          </p>
          <p className="section-three-body">
            Our theme celebrates creativity, collaboration, and problem-solving as powerful forces for shaping the future. We want to encourage our participants to explore emerging technologies, work together through challenges, and build solutions that create meaningful impact.
          </p>
          <p className="section-three-body">
            Just as every trail leads to a new perspective, every project has the potential to guide us toward <strong>bold new possibilities</strong>.
          </p>
        </div>
      </div>
      <div>
        <iframe className="section-four-content" src="https://www.youtube.com/embed/7dFSPF8vwVo?si=d8kmyEUU2H37yE3j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p className="section-four-caption">Highlight Reel From Winfo&#8217;s 2026 Hackathon</p>
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
