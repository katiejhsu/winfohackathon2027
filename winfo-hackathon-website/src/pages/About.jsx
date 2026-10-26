import Footer from "../components/Footer";
import { aboutWinfo, pastWinners, whatIsWinfo } from "../data/content";
import "./About.css";
import { useRef, useState, useEffect } from "react";
import UseGliderScroll from "../hooks/UseGliderScroll";

const BADGE_ROWS = [2, 3, 4, 3];

const badges = [
  "/assets/about/badge-18.png",
  "/assets/about/badge-19.png",
  "/assets/about/badge-6.png",
  "/assets/about/badge-7.png",
  "/assets/about/badge-21.png",
  "/assets/about/badge-11.png",
  "/assets/about/badge-12.png",
  "/assets/about/badge-20.png",
  "/assets/about/badge-8.png",
  "/assets/about/badge-9.png",
  "/assets/about/badge-15.png",
  "/assets/about/badge-16.png",
];

const badgeRows = [];
let idx = 0;
for (const n of BADGE_ROWS) {
  badgeRows.push(badges.slice(idx, idx + n));
  idx += n;
}

export default function About() {

  const elkRef = useRef(null);
  const owlRef = useRef(null);
  const rayRefs = useRef([]);
  const rayTriggered = useRef(new Set());
  const [raysVisible, setRaysVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.dataset.rayIndex);
          if (entry.isIntersecting && !rayTriggered.current.has(idx)) {
            rayTriggered.current.add(idx);
            setRaysVisible((prev) => ({ ...prev, [idx]: true }));
          }
        });
      },
      { threshold: 0.15 }
    );
    rayRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);
  UseGliderScroll([
    { ref: elkRef, sway: 24 },
    { ref: owlRef, sway: -30 },
  ]);
  return (
    <>

      <main className="about">
        {/* 1. mountain */}
        <section className="bg-slice mountain">
          <div className="light-rays" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                ref={(el) => (rayRefs.current[i] = el)}
                data-ray-index={i}
                className={`light-ray about-ray--${i + 1}${raysVisible[i] ? " light-ray--visible" : ""}`}
              ></span>
            ))}
          </div>
          <div className="about-intro">
            <img src="/assets/about/about-title.png" alt="about WINFO" />
            <p>Learn more about WINFO and the team behind our latest hackathon!</p>
          </div>
        </section>

        {/* 2. black cliff */}
        <section className="bg-slice cliff">
          <div className="about-winfo">
            <h2 className="what-is-winfo-header">WHAT IS WINFO?</h2>
            <p>
              {whatIsWinfo.aboutParagraph1}
            </p>
            <p>
              {whatIsWinfo.aboutParagraph2}
            </p>
            <a
              className="btn-outline"
              href={aboutWinfo.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              VISIT WINFO.ISCHOOL.UW.EDU
            </a>
            <div className="about-gallery">
              <img src="assets/about/about-winfo-1.png" alt="WINFO team" />
              <img src="assets/about/about-winfo-2.png" alt="WINFO event" />
              <img src="assets/about/about-winfo-3.png" alt="WINFO team" />
            </div>
          </div>

        </section>

        {/* 3. sunset */}
        <section className="bg-slice sunset">
          <img ref={elkRef} src="assets/characters/elk-paragliding.png" alt="elk paragliding" className="elk-paragliding-about" />
          <img ref={owlRef} src="assets/characters/owl-paragliding.png" alt="owl" className="owl-paragliding-about" />

          <div className="committee-intro">
            <h2 className="committee-header">The WINFO Hackathon <br /> Committee</h2>
            <p>Our team of 12 organizers are brought together by a shared passion for building spaces where everyone feels welcome to create, connect, and learn.</p>
          </div>
        </section>

        {/* 4. orange */}
        <section className="bg-slice orange">
          <div id="committee" className="committee-badges">
            <h2 className="meet-committee-header">Meet the 2026-2027 <br /> Hackathon Committee!</h2>
            <div className="badge-grid">
              {badgeRows.map((row, r) => (
                <div className="badge-row" key={r}>
                  {row.map((src, i) => (
                    <img key={`${r}-${i}`} src={src} alt="" />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div id="speakers" className="speakers">
            <h2 className="speakers-header">Speakers</h2>
            <p className="speakers-intro">Stay tuned for the announcement of our upcoming hackathon speakers!</p>
            <div className="speakers-container">
              <div className="speakers-list">
                <div className="speaker-card">
                  <img src="assets/about/badge-placeholder.png" className="speaker-badge" alt="" />
                  <div className="speaker-info">
                    <h4>Speaker Name</h4>
                    <p>lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                  </div>
                </div>
                <div className="speaker-card">
                  <img src="assets/about/badge-placeholder.png" className="speaker-badge" alt="" />
                  <div className="speaker-info">
                    <h4>Speaker Name</h4>
                    <p>lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                  </div>
                </div>
                <div className="speaker-card">
                  <img src="assets/about/badge-placeholder.png" className="speaker-badge" alt="" />
                  <div className="speaker-info">
                    <h4>Speaker Name</h4>
                    <p>lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. night sky */}
        <section className="bg-slice sky">
          <img src="assets/characters/stars1.png" alt="star" className="stars1-0-about" />
          <img src="assets/characters/stars1.png" alt="star" className="stars1-1-about" />
          <img src="assets/characters/stars1.png" alt="star" className="stars1-2-about" />
          <img src="assets/characters/stars3.png" alt="3 stars" className="stars3-0-about" />
          <img src="assets/characters/stars3.png" alt="3 stars" className="stars3-1-about" />
          <img src="assets/characters/owl-const.png" alt="owl constellation" className="owl-const-about" />
          <img src="assets/characters/goat-const.png" alt="goat constellation" className="goat-const-about" />
          <div className="last-years-winners">
            <h2 className="last-years-winners-header">Last Year's Winners</h2>
            <h3 className="winner-heading">{pastWinners[0].track} – “{pastWinners[0].project}”</h3>
            <p>{pastWinners[0].about}</p>
            <p>By: {pastWinners[0].team}</p>
            <img src={pastWinners[0].image} alt={`${pastWinners[0].project} project poster`} className="project-poster" />
            <h3 className="winner-heading">{pastWinners[1].track} – “{pastWinners[1].project}”</h3>
            <p>{pastWinners[1].about}</p>
            <p>By: {pastWinners[1].team}</p>
            <img src={pastWinners[1].image} alt={`${pastWinners[1].project} project poster`} className="project-poster" />    <h3 className="winner-heading">{pastWinners[2].track} – “{pastWinners[2].project}”</h3>
            <p>{pastWinners[2].about}</p>
            <p>By: {pastWinners[2].team}</p>
            <img src={pastWinners[2].image} alt={`${pastWinners[2].project} project poster`} className="project-poster" />    <h3 className="winner-heading">{pastWinners[3].track} – “{pastWinners[3].project}”</h3>
            <p>{pastWinners[3].about}</p>
            <p>By: {pastWinners[3].team}</p>
            <img src={pastWinners[3].image} alt={`${pastWinners[3].project} project poster`} className="project-poster" />
            <p className="congrats-text">Congratulations to all of our winners and their incredible projects! Thank you to everyone who dove into our 14th Hackathon with us 🤍</p>
          </div>
        </section>

        {/* 6. fire */}
        <section className="bg-slice fire">
          <div className="campfire-mascots-section">
            <div>
              <img alt="animals around a campfire" src="assets/about/campfire-mascots.png" className="campfire-mascots" />
            </div>
            <div className="campfire-fx" aria-hidden="true">
              <span className="campfire-glow"></span>
              <span className="spark spark--1"></span>
              <span className="spark spark--2"></span>
              <span className="spark spark--3"></span>
              <span className="spark spark--4"></span>
              <span className="spark spark--5"></span>
              <span className="spark spark--6"></span>
              <span className="spark spark--7"></span>
              <span className="spark spark--8"></span>
            </div>
          </div>
          <Footer />
        </section>
      </main>

    </>
  );
}