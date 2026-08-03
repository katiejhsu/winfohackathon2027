import { Link } from "react-router-dom";
import { projectResources, hackingDaySchedule } from "../data/content";
import { ScheduleList } from "../components/Reusable";

export default function DayOf() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker" style={{ justifyContent: "center" }}>Hacking Day</div>
          <h1>Day-Of Hub</h1>
          <p style={{ maxWidth: 620, margin: "0 auto", color: "var(--color-text-muted)" }}>
            Everything you need while you're building — quick links, live
            resources, and the submission portal.
          </p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="grid grid--2">
            <div className="card card--light">
              <h3>Submit Your Project</h3>
              <p>Submissions close at 07:00 PM on Hacking Day. Have your slides and GitHub link ready.</p>
              <Link className="btn btn--primary" to="/portal/submission">Go to Submission Portal</Link>
            </div>
            <div className="card card--light">
              <h3>Mentor Check-Ins</h3>
              <p>Raise your team's flag when you're ready for a mentoring round — check the schedule for round times.</p>
              <Link className="btn btn--outline" style={{ borderColor: "var(--color-sky-deep)", color: "var(--color-sky-deep)" }} to="/schedule">
                View Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <h2>Today's Timeline</h2>
          <ScheduleList items={hackingDaySchedule} />
        </div>
      </section>

      <section className="section section--light">
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
    </>
  );
}
