import { useState } from "react";

// ============================================================================
// STUB AUTH HOOK — fully static, no backend wired up yet
// ----------------------------------------------------------------------------
// This fakes a sign-in (any @uw.edu-looking email "succeeds" after a short
// delay) purely so the two portal pages are click-through-able in a demo.
// Nothing is persisted or verified. Once a backend is chosen, swap the body
// of `signIn` for a real call (e.g. Firebase `signInWithEmailAndPassword` /
// `signInWithPopup`, or Supabase Auth) and drive `user` off its auth-state
// listener instead of local state.
//
// Recommendation: restrict sign-in to @uw.edu emails for participants/
// mentors, since the hackathon is UW-only.
// ============================================================================

export default function useAuth() {
  const [user, setUser] = useState(null); // { email, displayName, role }
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function signIn(email, _password) {
    setLoading(true);
    setError(null);
    try {
      // TODO: replace with real Firebase/Supabase auth call
      await new Promise((r) => setTimeout(r, 500));
      if (!email.endsWith("@uw.edu")) {
        throw new Error("Please sign in with your @uw.edu email.");
      }
      setUser({ email, displayName: email.split("@")[0] });
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  function signOut() {
    setUser(null);
  }

  return { user, loading, error, signIn, signOut };
}
