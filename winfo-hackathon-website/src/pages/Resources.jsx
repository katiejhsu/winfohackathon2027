import { FaqAccordion } from "../components/Reusable";
import { faqs, preHackathonEvents, projectResources, contact } from "../data/content";

export default function Resources() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker" style={{ justifyContent: "center" }}>Get Ready</div>
          <h1>Resources &amp; FAQ</h1>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <h2>Pre-Hackathon Workshops &amp; Events</h2>
          <p style={{ fontSize: "0.85rem", color: "var(--color-sky-mid)" }}>
            TODO: confirm which of these we're holding this year.
          </p>
          <div className="grid grid--4">
            {preHackathonEvents.map((e) => (
              <div className="card card--light" key={e} style={{ textAlign: "center" }}>{e}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <h2>Project Resources</h2>
          <ul className="resource-list">
            {projectResources.map((r) => (
              <li key={r.label}>
                <a href={r.url} target="_blank" rel="noreferrer">{r.label} ↗</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <FaqAccordion items={faqs} />
          <p style={{ marginTop: "2rem" }}>
            My question isn't here! Feel free to shoot us an email at{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </div>
      </section>
    </>
  );
}
