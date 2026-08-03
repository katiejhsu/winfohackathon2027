# WINFO Hackathon Website — Skeleton

Static front-end skeleton for the 15th Annual WINFO Hackathon
("Peaks of Possibility, Paths of Progress"). Built with **React + Vite**,
routed with **React Router**, and styled with plain CSS (no UI framework).

No backend is wired up yet — the two portal pages (Project Submission,
Mentor Feedback) use a fake local "sign-in" stub just so their forms are
click-through-able. See **"About the portals"** below.

---

## 1. Requirements

- [Node.js](https://nodejs.org/) 18 or newer (includes `npm`)

Check your version:

```bash
node -v
```

---

## 2. Run it locally (recommended way to view it)

From the project folder:

```bash
npm install
npm run dev
```

Then open the URL it prints — usually **http://localhost:5173** — in your
browser. This is a live dev server: edit any file in `src/` and the page
updates instantly.

To stop the server, press `Ctrl + C` in the terminal.

---

## 3. Build a static, deployable version

If you want a plain set of HTML/CSS/JS files (e.g. to preview without a dev
server, or to hand off to hosting like Netlify/Vercel/GitHub Pages):

```bash
npm install
npm run build
```

This outputs everything into a new `dist/` folder. To double-check it looks
right before deploying, serve it locally:

```bash
npm run preview
```

and open the URL it prints (usually **http://localhost:4173**).

`dist/` is a completely static site — you can drag that folder into Netlify,
push it to GitHub Pages, or upload it to any static host.

---

## 4. Project structure

```
src/
├── App.jsx              # route definitions (all pages live here)
├── main.jsx              # entry point, global CSS imports
├── components/           # Navbar, Footer, Countdown, shared UI bits
├── pages/                 # one file per site page (Home, Tracks, About, ...)
├── portals/                # Submission Portal + Mentor Feedback Portal
├── firebase/               # NOT active — placeholder for future backend
├── data/content.js         # ALL site copy lives here — edit this file first
└── styles/theme.css         # colors, fonts, spacing, shared classes
```

**To update text/content**, start with `src/data/content.js` — nearly every
page pulls its copy from there instead of hardcoding it, so most edits
(dates, schedule, FAQ, sponsor list, committee names, etc.) only need to
happen in one place.

**To restyle**, colors/fonts/spacing are CSS variables at the top of
`src/styles/theme.css`.

---

## 5. Pages included

| Route | Page |
|---|---|
| `/` | Home — mission, theme, goals, tracks preview, schedule preview, sponsors, countdown |
| `/tracks` | Full prize track descriptions |
| `/schedule` | Hacking Day + Judging Day timelines |
| `/people` | Speakers / mentors / judges (empty — TODO once roster is confirmed) |
| `/about` | About WINFO, committee, past winners, testimonials, photos |
| `/resources` | Pre-hackathon workshops, project resources, FAQ |
| `/day-of` | Day-of hub: today's timeline + submission portal link |
| `/register` | Registration page |
| `/contact` | Contact form + social links |
| `/portal/submission` | Project Submission Portal (stub auth + form) |
| `/portal/mentor-feedback` | Mentor Feedback Portal (stub auth + form) |

---

## 6. About the portals

The Submission and Mentor Feedback portals are **UI-only** right now:

- "Signing in" just fakes a short delay and accepts any `@uw.edu`-looking
  email — nothing is verified or stored.
- Submitting either form just logs the data to the browser console
  (`console.log`) — nothing is saved anywhere.

This is intentional since the backend (Firebase vs. Supabase vs. something
else) hasn't been decided yet. The `src/firebase/` folder contains commented-
out placeholder code showing one way to wire up real auth + a database later
— nothing in it is active or imported by the running app.

Two open decisions are flagged with `TODO` comments directly in
`src/portals/MentorFeedbackPortal.jsx`:
1. How mentor feedback gets delivered back to hackers (emailed summary vs. a
   logged-in team view).
2. Whether Day-2 presentation time slots should be coordinated through the
   Submission Portal.

---

## 7. Known placeholders to fill in before launch

- `src/pages/People.jsx` — speaker/mentor/judge lists are empty
- `src/data/content.js` → `committee.groups` — Directors list is empty
- `src/data/content.js` → `sponsors` — logos are placeholders (text only, no images)
- `src/pages/About.jsx` — photo gallery is placeholder boxes
- Hero "highlight reel" video on the Home page — not yet embedded
- `event.registerUrl` in `src/data/content.js` — points to `#`, swap for the real registration form link
