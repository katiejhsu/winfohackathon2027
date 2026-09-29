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
            <img src="assets/about/what-is-winfo.png" alt="what is winfo" className="what-is-winfo-header" />
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
          <img src="assets/characters/elk-paragliding.png" alt="elk paragliding" className="elk-paragliding-about" />
          <img src="assets/characters/owl-paragliding.png" alt="owl" className="owl-paragliding-about" />

          <div className="committee-intro">
            <img src="assets/about/winfo-hackathon-committee.png" alt="the winfo hackathon committee" className="committee-header" />
            <p>Our team of 12 organizers are brought together by a shared passion for building spaces where everyone feels welcome to create, connect, and learn.</p>
          </div>
        </section>

        {/* 4. orange */}
        <section className="bg-slice orange">
          <div className="committee-badges">
            <img src="assets/about/meet-committee.png" alt="meet the committee" className="meet-committee-header" />
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
          <div className="speakers">
            <img src="assets/about/speakers.png" alt="speakers" className="speakers-header" />
            <p className="speakers-intro">Stay tuned for the announcement of our upcoming hackathon speakers!</p>
            <div className="speakers-container">
              <div className="speakers-list">
                <div className="speaker-card">
                  <img src="assets/about/badge-11.png" className="speaker-badge" alt="" />
                  <div className="speaker-info">
                    <h4>Speaker Name</h4>
                    <p>lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                  </div>
                </div>
                <div className="speaker-card">
                  <img src="assets/about/badge-11.png" className="speaker-badge" alt="" />
                  <div className="speaker-info">
                    <h4>Speaker Name</h4>
                    <p>lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                  </div>
                </div>
                <div className="speaker-card">
                  <img src="assets/about/badge-11.png" className="speaker-badge" alt="" />
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
          <div className="section-eight-content"></div>
          <div className="last-years-winners">
            <img src="assets/about/last-years-winners.png" alt="last years winners" className="last-years-winners-header" />
            <img src="assets/about/best-impact-header1.png" alt="best impact" className="best-impact-header" />
            <p>lorem ipsum dolor sit amet consectetur adipiscing elit voluptas anim accusamus quas optio in adipiscing optio officia.</p>
            <p>By: Vania Benitez Salgado, Kai Barnum, Pimnipa Thawai</p>
            <div className="past-project-section">
              <div>
                <img src="assets/about/blank-placeholder.png" alt="blank" className="project-img" />
                <p>“Canario” Logo</p>
              </div>
              <div>
                <img src="assets/about/blank-placeholder.png" alt="blank" className="project-img" />
                <p>Prototyped Screens</p>
              </div>
            </div>
            <img src="assets/about/best-impact-header1.png" alt="best impact" className="best-impact-header" />
            <p>lorem ipsum dolor sit amet consectetur adipiscing elit voluptas anim accusamus quas optio in adipiscing optio officia.</p>
            <p>By: Sophia Wei, Angela Yang, Thu Doan, Thu Nguyen</p>
            <div className="past-project-section">
              <div>
                <img src="assets/about/blank-placeholder.png" alt="blank" className="project-img" />
                <p>“NewFuse” Logo </p>
              </div>
              <div>
                <img src="assets/about/blank-placeholder.png" alt="blank" className="project-img" />
                <p>Prototyped Screens</p>
              </div>
            </div>    <img src="assets/about/best-impact-header1.png" alt="best impact" className="best-impact-header" />
            <p>lorem ipsum dolor sit amet consectetur adipiscing elit voluptas anim accusamus quas optio in adipiscing optio officia.</p>
            <p>By: Sacchin Saravanan, Abhinav Vallabhaneni, Achintya Agrawal, Aashi Juneja</p>
            <div className="past-project-section">
              <div>
                <img src="assets/about/blank-placeholder.png" alt="blank" className="project-img" />
                <p>Nudge Logo</p>
              </div>
              <div>
                <img src="assets/about/blank-placeholder.png" alt="blank" className="project-img" />
                <p>Prototyped Screens</p>
              </div>
            </div>    <img src="assets/about/best-impact-header1.png" alt="best impact" className="best-impact-header" />
            <p>lorem ipsum dolor sit amet consectetur adipiscing elit voluptas anim accusamus quas optio in adipiscing optio officia.</p>
            <p>By: Isaiah Hoagland, Sunny Tian, Farrel Sudrajat</p>
            <div className="past-project-section">
              <div>
                <img src="assets/about/blank-placeholder.png" alt="blank" className="project-img" />
                <p>WNBA Logo</p>
              </div>
              <div>
                <img src="assets/about/blank-placeholder.png" alt="blank" className="project-img" />
                <p>Prototyped Screens</p>
              </div>
            </div>
            <p className="congrats-text">Congratulations to all of our winners and their incredible projects! Thank you to everyone who dove into our 14th Hackathon with us 🤍</p>
          </div>
        </section>

        {/* 6. fire */}
        <section className="bg-slice fire">
          <div className="campfire-mascots-section">
            <div>
              <img alt="animals around a campfire" src="assets/about/campfire-mascots.png" className="campfire-mascots" />
            </div>
          </div>
          <Footer />
        </section>
      </main>

    </>
  );
}