import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const NAV_LINKS = [
  { key: "home", to: "/", label: "Home", bgImage: "/test-bg/navbar-sign-1.png" },
  { key: "schedule", to: "/#schedule", label: "Schedule", bgImage: "/test-bg/navbar-sign-2.png" },
  { key: "faq", to: "/#faq", label: "FAQ", bgImage: "/test-bg/navbar-sign-3.png" },
  { key: "about", to: "/about", label: "About", bgImage: "/test-bg/navbar-sign-4.png" },
];

// Home-page sections the nav tracks while scrolling (element id -> nav key)
const TRACKED_SECTIONS = ["schedule", "faq"];

function getActiveHomeSection() {
  const middle = window.innerHeight * 0.4;
  for (const id of TRACKED_SECTIONS) {
    const el = document.getElementById(id);
    const section = el?.closest("section") || el;
    if (!section) continue;
    const r = section.getBoundingClientRect();
    if (r.top <= middle && r.bottom > middle) return id;
  }
  const first = document.getElementById(TRACKED_SECTIONS[0]);
  const firstSection = first?.closest("section") || first;
  if (!firstSection || firstSection.getBoundingClientRect().top > middle) return "home";
  return null;
}

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [homeSection, setHomeSection] = useState("home");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 12);
      if (pathname === "/") setHomeSection(getActiveHomeSection());
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  const activeKey =
    pathname === "/" ? homeSection : pathname.startsWith("/about") ? "about" : null;

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <nav className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          {NAV_LINKS.map((link) => {
            const isActive = link.key === activeKey;
            return (
              <Link
                key={link.key}
                to={link.to}
                style={{ "--link-bg-image": `url(${link.bgImage})` }}
                className={`navbar__link ${isActive ? "navbar__link--active" : ""}`}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="navbar__toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
