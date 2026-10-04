import { useState } from "react";
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
  faqs,
} from "../data/content";
import Footer from "../components/Footer";

function linkifyEmail(text) {
  const parts = text.split(/(\S+@\S+\.\S+)/g);
  return parts.map((part, i) =>
    /\S+@\S+\.\S+/.test(part) ? (
      <a key={i} href={`mailto:${part}`} className="section-faq__email-link">
        {part}
      </a>
    ) : (
      part
    )
  );
}
const workshops = [
  {
    icon: "/assets/resources/icon-design.png",
    title: "Design Workshop",
    when: "Thursday, January 15, from 5:30 to 7pm | HUB 214",
    desc: "🏔️ Interested in leveling up your Figma skills before the WINFO Hackathon? Now's your chance!\n\nJoin Figma Campus Leaders for a hands-on workshop covering Auto Layout, Components, and Variables! These are three essential tools for designing faster, smarter, and more scalable interfaces.\n\nWhether you’re new to Figma or looking to sharpen your skills, this workshop will help you build flexible designs, collaborate more efficiently, and move seamlessly from idea to prototype. Come learn, ask questions, and get hackathon-ready with confidence.",
  },
  {
    icon: "/assets/resources/icon-code.png",
    title: "All about ‘Best Implementation’",
    when: "Thursday, January 15, from 5:30 to 7pm | HUB 214",
    desc: "lorem ipsum dolor sit amet consectetur adipiscing elit voluptas anim accusamus quas optio in adipiscing optio officia.",
  },
];

const events = [
  {
    icon: "/assets/resources/icon-team.png",
    title: "Team Formation",
    when: "Thursday, January 15, from 5:30 to 7pm | HUB 214",
    desc: "lorem ipsum dolor sit amet consectetur adipiscing elit voluptas anim accusamus quas optio in adipiscing optio officia.",
  },
  {
    icon: "/assets/resources/icon-laptop.png",
    title: "Hack the Hackathon",
    when: "Thursday, January 15, from 5:30 to 7pm | HUB 214",
    desc: "New to the hackathon or still searching for a team? Hack the Hackathon has you covered 🥾\n\nThis session gives you the opportunity to:\n🥾 Meet other participants and potential teammates\n🌲 Learn more about the hackathon structure, expectations, and tips & tricks\n🏔️ Get your brain working on early ideation and making the most out of our hackathon!\n\nDive in early, explore new ideas, and kick off the hackathon with confidence.",
  },
];

const designResources = [
  { label: "Design Basics", url: "https://www.figma.com/resource-library/design-basics/" },
  { label: "How to use Figma", url: "https://www.figma.com/resource-library/k-12-design-basics/" },
];
const devResources = [
  { label: "How to collaborate with Github", url: "https://medium.com/@jonathanmines/the-ultimate-github-collaboration-guide-df816e98fb67" },
  { label: "Intro to Web Dev", url: "https://www.youtube.com/watch?v=ysEN5RaKOlA" },
  { label: "Intro to CSS Animations", url: "https://www.youtube.com/watch?v=z2LQYsZhsFw" },
];

function ResourceCard({ icon, title, when, desc }) {
  return (
    <div className="res-card">
      <div className="res-card__icon">
        <img src={icon} alt="" />
      </div>
      <div className="res-card__body">
        <h5 className="res-card__title">{title}</h5>
        <p className="res-card__when">{when}</p>
        <p className="res-card__desc">{desc}</p>
      </div>
    </div>
  );
}
export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      <main className="home">
        {/* 1. mountain: hero */}
        <section className="bg-slice home-s1">
          <div className="section-one-content">
            <div className="winfo-logo">
              <img src="/test-bg/star-element.png" alt="Winfo star icon" className="hero-star" />
              <img src="/test-bg/winfo-logo.png" alt="Winfo logo" className="hero-logo" />
            </div>
            <img src="/test-bg/headline-line1.svg" alt="Women in Informatics' 15th Annual Hackathon banner logo" className="hero-headline hero-headline--1" />
            <img src="/test-bg/headline-line2.svg" alt="" className="hero-headline hero-headline--2" />
            <p className="hero-meta hero-meta--1">
              <img src="/test-bg/image106.png" alt="" className="hero-meta__icon" /> {event.heroDates}
            </p>
            <p className="hero-meta hero-meta--2">
              <a href={event.hubMapUrl} target="_blank" rel="noopener noreferrer" className="location-link location-link--plain"><img src="/test-bg/navigation.png" alt="" className="hero-meta__icon hero-meta__icon--pin" /> {event.heroLocation}</a>
            </p>
            <a className="hero-register-btn" href={event.registerUrl}>Register Now!</a>
          </div>
          <img src="/test-bg/ribbon.png" className="home-asset home-asset--ribbon" alt="Hikers, get ready to trek" />
        </section>

        {/* 2. giant tree: section two */}
        <section className="bg-slice home-s2">
          <img src="/test-bg/section2-badges.png" alt="Triangle tree patch, star bear patch, circle mountain patch" className="section-two-badges" />
          <img src="/test-bg/section2-headline.png" className="section-two-headline" alt="ready to reach new heights" />
          <p className="section-two-blurb">
            Women in Informatics is excited to invite you to our 15th Annual
            Hackathon, <span className="section-two-blurb__accent">&#8220;Peaks of Possibility&#8221;</span>.
            Join us for a day of developing technology solutions for social good
            and celebrating equity and inclusion in the technology field.
          </p>
        </section>

        {/* 3. dark forest to cave: theme + video */}
        <section className="bg-slice home-s3">
          <div className="section-three-content">
            <h2 className="section-three-heading">Hackathon Theme</h2>
            <p className="section-three-body">
              Last year, our theme, <strong>&#8220;Depths of Discovery, Currents of Creation&#8221;</strong> emphasized the power of exploration, creativity, and collaboration in shaping the future of technology.
            </p>
            <p className="section-three-body">This year, we&#8217;re setting out on a new path:</p>
            <p className="section-three-banner">PEAKS OF POSSIBILITY</p>
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
          <iframe
            className="section-four-content"
            src="https://www.youtube.com/embed/7dFSPF8vwVo?si=d8kmyEUU2H37yE3j"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <p className="section-four-caption">Highlight Reel From Winfo&#8217;s 2026 Hackathon</p>
        </section>

        {/* 4. clouds: prize tracks */}
        <section className="bg-slice home-s4">
          <div className="section-five-content">
            <h2 className="tracks-heading">Prize Tracks</h2>
            <hr className="tracks-divider" />
            {tracks.map((t, i) => (
              <div key={t.id}>
                <h3 className="tracks-title">{i + 1}. {t.name}</h3>
                <div className="tracks-row">
                  <img
                    src={`/assets/characters/track-${["goat", "otter", "moose", "owl"][i]}.png`}
                    alt={`${t.name} track badge`}
                    className="tracks-badge"
                  />
                  <div className="tracks-copy">
                    <p className="tracks-description">{t.description}</p>
                    <p className="tracks-focus-label">THIS TRACK FOCUSES ON:</p>
                    <ul className="tracks-focus-list">
                      {t.focus.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {i < tracks.length - 1 && <hr className="tracks-divider" />}
              </div>
            ))}
          </div>
        </section>

        {/* 5. blue sky to mountain lake: schedules */}
        <section className="bg-slice home-s5">
          <img src="assets/characters/elk-paragliding.png" alt="elk paragliding" className="elk-paragliding" />
          <div id="schedule" className="section-six-content">
            <h2 className="section-schedule-heading">Schedules</h2>
            <h3 className="section-schedule-day-title">Hackathon Day</h3>
            <p className="section-schedule-meta">
              <img src="/test-bg/schedule-clock.png" alt="" className="section-schedule__icon" /> {event.hackingDate} | Saturday
            </p>
            <p className="section-schedule-meta section-schedule-meta--location">
              <a href={event.hubMapUrl} target="_blank" rel="noopener noreferrer" className="location-icon-link" aria-hidden="true" tabIndex={-1}><img src="/test-bg/schedule-pin.png" alt="" className="section-schedule__icon" /></a> <a href={event.hubMapUrl} target="_blank" rel="noopener noreferrer" className="location-link">{event.hackingLocation}</a>
            </p>
            <ul className="section-schedule-list">
              {hackingDaySchedule.map((item) => (
                <li key={item.time + item.label}>
                  <span className="section-schedule__time">{item.time}</span>
                  <span className="section-schedule__label">{item.label}</span>
                </li>
              ))}
            </ul>

            <h3 className="section-schedule-day-title section-schedule-day-title--judging">Judging Day</h3>
            <p className="section-schedule-meta">
              <img src="/test-bg/schedule-clock.png" alt="" className="section-schedule__icon" /> {event.judgingDate} | Sunday
            </p>
            <p className="section-schedule-meta section-schedule-meta--location">
              <a href={event.mapleMapUrl} target="_blank" rel="noopener noreferrer" className="location-icon-link" aria-hidden="true" tabIndex={-1}><img src="/test-bg/schedule-pin.png" alt="" className="section-schedule__icon" /></a> <a href={event.mapleMapUrl} target="_blank" rel="noopener noreferrer" className="location-link">{event.judgingLocation}</a>
            </p>
            <ul className="section-schedule-list">
              {judgingDaySchedule.map((item) => (
                <li key={item.time + item.label}>
                  <span className="section-schedule__time">{item.time}</span>
                  <span className="section-schedule__label">{item.label}</span>
                </li>
              ))}
            </ul>
            <p className="schedules-disclaimer">The exact schedule will be sent out closer to the hackathon date</p>
          </div>
          <img src="assets/characters/owl-paragliding.png" className="owl-paragliding" alt="owl paragliding"/>
        </section>

        {/* 6. water fading to black: FAQ */}
        <section className="bg-slice home-s6">
          <div id="faq" className="section-seven-content">
            <h2 className="section-faq__heading">Frequently Asked Questions</h2>
            <div className="section-faq__list">
              {faqs.map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <div className="section-faq__item" key={item.q}>
                    <button
                      className="section-faq__question"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.q}</span>
                      <span className="section-faq__chevron" aria-hidden="true">{isOpen ? "\u2303" : "\u2304"}</span>
                    </button>
                    {isOpen && (
                      <div className="section-faq__answer">{linkifyEmail(item.a)}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 7. night sky: resources */}
        <section className="bg-slice home-s7">
          <img src="assets/characters/stars1.png" alt="star" className="stars1-0"/>
          <img src="assets/characters/stars1.png" alt="star" className="stars1-1"/>
          <img src="assets/characters/stars1.png" alt="star" className="stars1-2"/>
          <img src="assets/characters/stars3.png" alt="3 stars" className="stars3-0"/>
          <img src="assets/characters/stars3.png" alt="3 stars" className="stars3-1"/>
          <img src="assets/characters/owl-const.png" alt="owl constellation" className="owl-const"/>
          <img src="assets/characters/goat-const.png" alt="goat constellation" className="goat-const"/>
          <div className="section-eight-content">
            <h2 className="res-heading">Resources</h2>

            <h3 className="res-subheading">Pre-Hackathon Workshops and Events</h3>
            <h4 className="res-label">Workshops</h4>
            {workshops.map((w) => <ResourceCard key={w.title} {...w} />)}

            <h4 className="res-label res-label--spaced">Events</h4>
            {events.map((e) => <ResourceCard key={e.title} {...e} />)}

            <h3 className="res-subheading res-subheading--spaced">Project Resources</h3>
            <h4 className="res-label">Design</h4>
            <div className="res-tiles">
              {designResources.map((r) => (
                <a className="res-tile" key={r.label} href={r.url} target="_blank" rel="noopener noreferrer">{r.label}</a>
              ))}
            </div>

            <h4 className="res-label res-label--spaced">Development</h4>
            <div className="res-tiles">
              {devResources.map((r) => (
                <a className="res-tile" key={r.label} href={r.url} target="_blank" rel="noopener noreferrer">{r.label}</a>
              ))}
            </div>
          </div>
        </section>

        {/* 8. fire: countdown */}
        <section className="bg-slice home-s8">
          <div className="section-nine-content">
            <h2 className="section-nine-heading">Are You Ready To Reach New Heights?</h2>
            <Countdown target={event.countdownTarget} showSeconds={false} />
            <a className="section-nine-register-btn" href={event.registerUrl}>Register Now!</a>
          </div>
          <div className="campfire-mascots-section-home">
            <div>
              <img alt="animals around a campfire" src="assets/about/campfire-mascots.png" className="campfire-mascots-home" />
            </div>
          </div>
          <div className="footer-home" >
            <Footer />
          </div>
        </section>
      </main>
    </>
  );
}