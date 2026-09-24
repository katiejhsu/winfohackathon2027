import Footer from "../components/Footer";
import { aboutWinfo, committee, pastWinners, pastWinnersLinks, testimonials, impactStats } from "../data/content";
import "./About.css";
const BADGE_ROWS = [2, 3, 3, 2, 1];

const badges = [
  // "/assets/about/badge-1.png",
  // "/assets/about/badge-2.png",
  // "/assets/about/badge-3.png",
  // "/assets/about/badge-4.png",
  // "/assets/about/badge-5.png",
  // "/assets/about/badge-6.png",
  // "/assets/about/badge-7.png",
  // "/assets/about/badge-8.png",
  // "/assets/about/badge-9.png",
  // "/assets/about/badge-10.png",
  "/assets/about/badge-11.png",
  "/assets/about/badge-11.png",
  "/assets/about/badge-11.png",
  "/assets/about/badge-11.png",
  "/assets/about/badge-11.png",
  "/assets/about/badge-11.png",
  "/assets/about/badge-11.png",
  "/assets/about/badge-11.png",
  "/assets/about/badge-11.png",
  "/assets/about/badge-11.png",
  "/assets/about/badge-11.png",
  "/assets/about/badge-11.png",
];

// split the flat list into rows
const badgeRows = [];
let idx = 0;
for (const n of BADGE_ROWS) {
  badgeRows.push(badges.slice(idx, idx + n));
  idx += n;
}
export default function About() {
  return (
    <>

      <main className="about">
        {/* 1. mountain */}
        <section className="bg-slice mountain">
          <div className="about-intro">
            <img src="/assets/about/about-title.png" alt="about WINFO" />
            <p>Learn more about WINFO and the team behind our latest hackathon!</p>
          </div>
        </section>

        {/* 2. black cliff */}
        <section className="bg-slice cliff">
          <div className="about-winfo">
            <h2>What is WINFO?</h2>
            <p>
              Women in Informatics (WINFO) is a diversity organization at the Information
              School at the University of Washington, Seattle, dedicated to empowering
              women and non-binary individuals to thrive as producers of technology.
            </p>
            <p>
              The purpose of our hackathon is to provide participants with a fun, safe,
              beginner-friendly, and collaborative environment in which they can develop
              new skills, network with industry professionals, and learn more about the
              tech industry.
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
          <div className="committee-intro">
            <h2>The WINFO Hackathon Committee</h2>
            <p>Our team of 12 organizers are brought together by a shared passion for building spaces where everyone feels welcome to create, connect, and learn.</p>
          </div>
        </section>

        {/* 4. orange */}
        <section className="bg-slice orange">
          <div className="committee-badges">
            <h2>Meet the 2026-2027<br /> Hackathon Committee!</h2>

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
        </section>

        {/* 5. night sky */}
        <section className="bg-slice sky">
          {/* testimonials, impact stats, etc. */}
        </section>

        {/* 6. fire */}
        <section className="bg-slice fire">
          {/* campfire content */}
          <Footer />
        </section>
      </main>

    </>
  );
}