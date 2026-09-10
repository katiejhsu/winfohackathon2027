import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NAV_LINKS = [
  { to: "/", label: "Home", bgImage: "/test-bg/navbar-sign-1.png" },
  { to: "/schedule", label: "Schedule", bgImage: "/test-bg/navbar-sign-2.png" },
  { to: "/resources", label: "FAQ", bgImage: "/test-bg/navbar-sign-3.png" },
  { to: "/about", label: "About",  bgImage: "/test-bg/navbar-sign-4.png" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <nav className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              style={{ "--link-bg-image": `url(${link.bgImage})` }}
              className={({ isActive }) =>
                `navbar__link ${isActive ? "navbar__link--active" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
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
