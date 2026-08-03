import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "70vh" }}>
      <div className="container">
        <h1>You've Wandered Off the Trail</h1>
        <p style={{ color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
          404 — this page doesn't exist.
        </p>
        <Link className="btn btn--primary" to="/">Back to Basecamp</Link>
      </div>
    </section>
  );
}
