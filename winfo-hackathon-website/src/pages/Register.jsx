import { Link } from "react-router-dom";
import { event } from "../data/content";

export default function Register() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker" style={{ justifyContent: "center" }}>Join Us</div>
          <h1>Registration</h1>
          <p style={{ maxWidth: 620, margin: "0 auto", color: "var(--color-text-muted)" }}>
            {event.dates} · {event.hackingLocation}
          </p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="grid grid--2">
            <div className="card card--light">
              <h3>Participant Sign-Up</h3>
              <p>
                Register as a hackathon participant. No coding experience
                required — teams of up to 4.
              </p>
              {/* TODO: swap for an embedded form (Google Form / Typeform / custom) */}
              <a className="btn btn--primary" href={event.registerUrl}>Register Now</a>
              <p style={{ fontSize: "0.8rem", marginTop: "0.75rem" }}>
                Registration full? <a href="#">Join the waitlist</a>
              </p>
            </div>

            <div className="card card--light">
              <h3>Already Have a Team?</h3>
              <p>Head to the portals below once the event begins.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Link className="btn btn--outline" style={{ borderColor: "var(--color-sky-deep)", color: "var(--color-sky-deep)" }} to="/portal/submission">
                  Project Submission Portal
                </Link>
                <Link className="btn btn--outline" style={{ borderColor: "var(--color-sky-deep)", color: "var(--color-sky-deep)" }} to="/portal/mentor-feedback">
                  Mentor Feedback Portal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
