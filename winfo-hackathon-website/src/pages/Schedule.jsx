import { ScheduleList } from "../components/Reusable";
import { event, hackingDaySchedule, judgingDaySchedule } from "../data/content";

export default function Schedule() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker" style={{ justifyContent: "center" }}>Plan Your Trip</div>
          <h1>Schedule</h1>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="grid grid--2">
            <div>
              <h2>Hacking Day</h2>
              <div className="eyebrow-meta">
                <span>{event.hackingDate}</span>
                <span>{event.hackingLocation}</span>
              </div>
              <ScheduleList items={hackingDaySchedule} />
            </div>
            <div>
              <h2>Judging Day</h2>
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
      </section>
    </>
  );
}
