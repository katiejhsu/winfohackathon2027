import { useState } from "react";
import useAuth from "../firebase/useAuth";
import "./Portal.css";

// ============================================================================
// MENTOR FEEDBACK PORTAL (skeleton)
// ----------------------------------------------------------------------------
// Fields per spec: Mentor Name, Group Name, Categories of Feedback, UW sign-in.
//
// Open questions flagged in planning (still need answers before this is
// production-ready):
//   1. How is mentor feedback delivered back to the hackers? Options: emailed
//      summary post-event, or a logged-in "team view" where hackers can see
//      their own feedback.
//   2. Do we build that team view? Stubbed as a route idea below, not built.
//
// Feedback categories are placeholders — swap in the real rubric from last
// year's feedback guidelines doc.
// ============================================================================

const FEEDBACK_CATEGORIES = [
  "Technical Execution",
  "Design & UX",
  "Presentation & Storytelling",
  "Real-World Impact",
  "Overall Comments",
];

export default function MentorFeedbackPortal() {
  const { user, loading, error, signIn, signOut } = useAuth();
  const [authForm, setAuthForm] = useState({ email: "", password: "" });

  const [form, setForm] = useState({
    mentorName: "",
    groupName: "",
    ratings: {},
    comments: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleAuthSubmit(e) {
    e.preventDefault();
    signIn(authForm.email, authForm.password);
  }

  function handleRatingChange(category, value) {
    setForm((f) => ({ ...f, ratings: { ...f.ratings, [category]: value } }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: write to Firestore/Supabase, keyed by groupName + mentorName +
    // timestamp, and decide on the delivery mechanism (see notes above).
    console.log("Mentor feedback (stub):", { ...form, submittedBy: user?.email });
    setSubmitted(true);
  }

  if (!user) {
    return (
      <section className="portal-hero section--dark">
        <div className="container portal-auth">
          <h1>Mentor Feedback Portal</h1>
          <p>Sign in with your @uw.edu account to leave feedback for a team.</p>
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
        </div>
      </section>
    );
  }

  return (
    <section className="section section--light">
      <div className="container portal-panel">
        <div className="portal-panel__header">
          <div>
            <h1>Leave Mentor Feedback</h1>
            <p>Signed in as {user.email}</p>
          </div>
          <button className="btn btn--outline" style={{ borderColor: "var(--color-sky-deep)", color: "var(--color-sky-deep)" }} onClick={signOut}>
            Sign Out
          </button>
        </div>

        {submitted ? (
          <div className="card card--light">
            <h3>Feedback submitted 🙌</h3>
            <p>Thank you for mentoring! You can submit feedback for another team below.</p>
            <button className="btn btn--outline" style={{ borderColor: "var(--color-sky-deep)", color: "var(--color-sky-deep)" }} onClick={() => setSubmitted(false)}>
              Add Another
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Mentor Name
              <input
                value={form.mentorName}
                onChange={(e) => setForm((f) => ({ ...f, mentorName: e.target.value }))}
                required
              />
            </label>

            <label>
              Group Name
              <input
                value={form.groupName}
                onChange={(e) => setForm((f) => ({ ...f, groupName: e.target.value }))}
                required
              />
            </label>

            <div className="feedback-categories">
              {FEEDBACK_CATEGORIES.map((cat) => (
                <label key={cat}>
                  {cat}
                  <textarea
                    rows={2}
                    value={form.ratings[cat] || ""}
                    onChange={(e) => handleRatingChange(cat, e.target.value)}
                  />
                </label>
              ))}
            </div>

            <button type="submit" className="btn btn--primary">Submit Feedback</button>
          </form>
        )}
      </div>
    </section>
  );
}
