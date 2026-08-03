import { TrackCard } from "../components/Reusable";
import { tracks } from "../data/content";

export default function Tracks() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker" style={{ justifyContent: "center" }}>Compete</div>
          <h1>Prize Tracks</h1>
          <p style={{ maxWidth: 620, margin: "0 auto", color: "var(--color-text-muted)" }}>
            Four tracks, four ways to make your mark. Pick the path that fits your
            team's strengths — or aim for all of them.
          </p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="grid grid--2">
            {tracks.map((t) => (
              <TrackCard track={t} key={t.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Diamond Sponsor Tracks</h2>
          <p style={{ maxWidth: 700, margin: "0 auto" }}>
            Diamond sponsors have the opportunity to create a sponsored track —
            an exclusive way to spotlight their company's values, tools, or new
            technologies, including a custom judging rubric, a Fall Quarter
            workshop, and dedicated judges for the winning team.
          </p>
        </div>
      </section>
    </>
  );
}
