# WINFO Hackathon Website

Website for the 15th Annual WINFO Hackathon ("Peaks of Possibility").
Built with **React + Vite**, routed with **React Router**, styled with plain
CSS (no UI framework), and hosted on **Firebase Hosting**.

Live site: https://winfohackathon2027.web.app/

---

## 1. Requirements

- [Node.js](https://nodejs.org/) 18 or newer (includes `npm`)
- [Firebase CLI](https://firebase.google.com/docs/cli) (only needed to deploy)

---

## 2. Run it locally

From this folder (`winfo-hackathon-website/`):

```bash
npm install
npm run dev
```

Open the URL it prints (usually **http://localhost:5173**). Edits in `src/`
update the page instantly. Press `Ctrl + C` to stop.

---

## 3. Build and deploy

```bash
npm run build      # outputs the static site to dist/
npm run preview    # optional: check the build at http://localhost:4173
firebase deploy    # uploads dist/ to Firebase Hosting
```

`firebase.json` serves `dist/` and rewrites every route to `index.html` so
React Router links like `/about` work on refresh. The Firebase project is
set in `.firebaserc` (`winfohackathon2027`). Always run `npm run build`
before `firebase deploy`, or you'll deploy the old build.

---

## 4. Pages

| Route | Page |
|---|---|
| `/` | Home: hero, theme, prize tracks, schedule, FAQ, resources, countdown |
| `/about` | About WINFO, committee, speakers, past winners |
| `/register` | Registration page (links to the Google Form) |
| `/mentor-portal` | Mentor info: notes form, info packet, resources |
| anything else | 404 page |

Navbar dropdown items jump to sections by id:

- **Home:** `#theme`, `#prize-tracks`, `#schedule`, `#faq`, `#resources`
- **About:** `#committee`, `#speakers`, `#past-winners`

---

## 5. Project structure

```
src/
├── App.jsx                # routes
├── main.jsx               # entry point + global CSS imports
├── components/            # Navbar, Footer, Countdown, Reusable
├── pages/                 # Home, About, Register, NotFound (+ their CSS)
├── portals/               # MentorPortal
├── hooks/UseGliderScroll.jsx  # scroll-linked movement for the paragliders
├── data/content.js        # event info, tracks, schedules, FAQ, resources
├── firebase/              # NOT active; placeholder, nothing imports it
└── styles/theme.css       # colors, fonts, shared variables

public/assets/             # all images, grouped by page
```

### Animations

- **Bear, goat and other walking characters:** an `IntersectionObserver`
  adds a `--walk` class once the character scrolls into view, and a CSS
  `@keyframes` animation moves it along its path. To change the path, edit
  the `left`/`top` values in that keyframe.
- **Paragliders (elk, owl):** move with scroll via `UseGliderScroll`.
- **Stars and constellations:** twinkle with the `twinkle` /
  `twinkle-const` keyframes in `Home.css`. About.css uses them too.
- Everything slows down or stops for users with "reduce motion" turned on.

### Breakpoints

The main mobile breakpoint is `max-width: 768px` / `min-width: 769px`. The
prize tracks section is the exception: it switches at `767px`/`768px` so the
iPad mini (768px) gets the desktop layout.

---

## 6. Placeholders to fill in before launch

- `src/portals/MentorPortal.jsx`: the info cards still use lorem ipsum
  descriptions.
- `src/data/content.js` has exports nothing uses yet: `committee`,
  `preHackathonEvents`, `projectResources`, `pastWinnersLinks`.
  Either wire them up or delete them.
