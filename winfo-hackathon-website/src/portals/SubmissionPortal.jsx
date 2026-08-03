import { useState } from "react";
import useAuth from "../firebase/useAuth";
import { tracks } from "../data/content";
import "./Portal.css";

// ============================================================================
// PROJECT SUBMISSION PORTAL (skeleton)
// ----------------------------------------------------------------------------
// Fields per the sponsorship-packet spec: Group Name, Project Track, PPT/PDF
// submission, optional GitHub URL, UW sign-in.
//
// Open question flagged in planning: should Day 2 presentation time slots
// also be coordinated here? Stubbed below as an optional field — remove or
// build out once decided.
//
// Wiring TODO:
//   - Replace useAuth stub with real UW-restricted auth
//   - Replace handleSubmit with a Firestore/Supabase write + Storage upload
//     for the file, keyed by team id
//   - Add submission-deadline lock (compare against event.hackingDaySchedule
//     "Project Submission Closes" time)
// ============================================================================

export default function SubmissionPortal() {
  const { user, loading, error, signIn, signOut } = useAuth();
  const [authForm, setAuthForm] = useState({ email: "", password: "" });

  const [form, setForm] = useState({
    groupName: "",
    track: tracks[0].id,
    githubUrl: "",
    timeSlot: "",
    file: null,
  });
  const [submitted, setSubmitted] = useState(false);

  function handleAuthSubmit(e) {
    e.preventDefault();
    signIn(authForm.email, authForm.password);
  }

  function handleChange(e) {
    const { name, value, files } = e.target;
    setForm((f) => ({ ...f, [name]: files ? files[0] : value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: upload form.file to Storage, write metadata to Firestore
    console.log("Submission (stub):", { ...form, submittedBy: user?.email });
    setSubmitted(true);
  }

  if (!user) {
    return (
      <section className="portal-hero section--dark">
        <div className="container portal-auth">
          <h1>Project Submission Portal</h1>
          <p>Sign in with your @uw.edu account to submit your project.</p>
          <form onSubmit={handleAuthSubmit} className="portal-auth-form">
            <input
              type="email"
              placeholder="you@uw.edu"
              value={authForm.email}
              onChange={(e) => setAuthForm((f) => ({ ...f, email: e.target.value }))}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={authForm.password}
              onChange={(e) => setAuthForm((f) => ({ ...f, password: e.target.value }))}
              required
            />
            <button className="btn btn--primary" type="submit" disabled={loading}>
              {loading ? "Signing in…" : "Sign In"}
            </button>
            {error && <p className="portal-error">{error}</p>}
          </form>
          <p className="portal-note">
            TODO: replace with real UW sign-in (SAML/Google restricted to
            @uw.edu, or Firebase Auth email/password).
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section section--light">
      <div className="container portal-panel">
        <div className="portal-panel__header">
          <div>
            <h1>Submit Your Project</h1>
            <p>Signed in as {user.email}</p>
          </div>
          <button className="btn btn--outline" style={{ borderColor: "var(--color-sky-deep)", color: "var(--color-sky-deep)" }} onClick={signOut}>
            Sign Out
          </button>
        </div>

        {submitted ? (
          <div className="card card--light">
            <h3>Submission received 🎉</h3>
            <p>Your team's project has been submitted. Good luck!</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Group Name
              <input name="groupName" value={form.groupName} onChange={handleChange} required />
            </label>

            <label>
              Project Track
              <select name="track" value={form.track} onChange={handleChange} required>
                {tracks.map((t) => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </select>
            </label>

            <label>
              Slide Deck (PPT or PDF)
              <input type="file" name="file" accept=".ppt,.pptx,.pdf" onChange={handleChange} required />
            </label>

            <label>
              GitHub URL <span style={{ fontWeight: 400 }}>(optional)</span>
              <input name="githubUrl" value={form.githubUrl} onChange={handleChange} placeholder="https://github.com/..." />
            </label>

            <label>
              Preferred Day 2 Presentation Slot <span style={{ fontWeight: 400 }}>(optional — TBD)</span>
              <input name="timeSlot" value={form.timeSlot} onChange={handleChange} placeholder="e.g. 1:00 PM" />
            </label>

            <button type="submit" className="btn btn--primary">Submit Project</button>
          </form>
        )}
      </div>
    </section>
  );
}
