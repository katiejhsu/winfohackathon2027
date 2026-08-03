// ============================================================================
// FIREBASE CONFIG (placeholder — NOT wired up yet)
// ----------------------------------------------------------------------------
// Backend/database is intentionally undecided for now, so this site runs
// fully static with a stubbed auth hook (see useAuth.js). Nothing here is
// imported or active. This file just documents the intended shape for
// whenever the backend (Firebase, Supabase, etc.) is chosen.
//
// This project ships WITHOUT the `firebase` package installed so the skeleton
// builds cleanly out of the box. To wire up real auth/storage/db:
//
//   npm install firebase
//
// Then uncomment the imports below, drop in your project's config (from the
// Firebase console → Project Settings → General → Your apps), and set the
// values as Vite env vars (.env.local, prefixed with VITE_) instead of
// hardcoding them.
//
// Suggested services for this project:
//   - Auth: Email/Password + Google provider restricted to @uw.edu domain
//     for participant/mentor sign-in
//   - Firestore or Realtime DB: `submissions`, `mentorFeedback`, `teams`
//   - Storage: PPT/PDF submission uploads
// ============================================================================

// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();
// export const db = getFirestore(app);
// export const storage = getStorage(app);

export default firebaseConfig;
