import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const NAV_LINKS = [
  {
    key: "home",
    to: "/",
    label: "Home",
    bgImage: "/test-bg/navbar-sign-3.png",
    children: [
      { key: "theme", to: "/#theme", label: "Theme", bgImage: "/test-bg/navbar-sign-3.png" },
      { key: "prize-tracks", to: "/#prize-tracks", label: "Prize Tracks", bgImage: "/test-bg/navbar-sign-3.png" },
      { key: "resources", to: "/#resources", label: "Resources", bgImage: "/test-bg/navbar-sign-3.png" },
    ],
  },
  { key: "schedule", to: "/#schedule", label: "Schedule", bgImage: "/test-bg/navbar-sign-3.png" },
  { key: "faq", to: "/#faq", label: "FAQ", bgImage: "/test-bg/navbar-sign-3.png" },
  {
    key: "about",
    to: "/about",
    label: "About",
    bgImage: "/test-bg/navbar-sign-4.png",
    children: [
      { key: "committee", to: "/about#committee", label: "Committee" },
      { key: "speakers", to: "/about#speakers", label: "Speakers" },
      { key: "past-winners", to: "/about#past-winners", label: "Past Winners" },
    ],
  },
];

const TRACKED_SECTIONS = ["theme", "prize-tracks", "resources", "schedule", "faq"];

const isMobile = () => window.matchMedia("(max-width: 786px)").matches;

function getSection(id) {
  const el = document.getElementById(id);
  return el?.closest("section") || el;
}

function getActiveHomeSection() {
  const middle = window.innerHeight * 0.4;
  let firstExisting = null;
  for (const id of TRACKED_SECTIONS) {
    const section = getSection(id);
    if (!section) continue;
    if (!firstExisting) firstExisting = section;
    const r = section.getBoundingClientRect();
    if (r.top <= middle && r.bottom > middle) return id;
  }
  if (!firstExisting || firstExisting.getBoundingClientRect().top > middle) return "home";
  return null;
}

export default function Navbar() {

  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [homeSection, setHomeSection] = useState("home");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = 0;
    const onScroll = (e) => {
      const t = e.target;
      const y = t === document ? window.scrollY : t.scrollTop;
      if (y > lastY && y > 80) setHidden(true);
      else if (y < lastY) setHidden(false);
      lastY = y;
    };
    document.addEventListener("scroll", onScroll, { passive: true, capture: true });
    return () => document.removeEventListener("scroll", onScroll, { capture: true });
  }, []);
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

  let activeKey = null;
  if (pathname === "/") {
    activeKey = homeSection;
  } else {
    const match = NAV_LINKS.flatMap((l) => l.children || [l]).find(
      (c) => !c.to.includes("#") && c.to !== "/" && pathname.startsWith(c.to)
    );
    activeKey = match?.key ?? null;
  }

  const closeAll = () => {
    setOpen(false);
    setOpenMenu(null);
  };

  const handleParentClick = (e, link) => {
    if (link.children && isMobile()) {
      e.preventDefault();
      setOpenMenu((cur) => (cur === link.key ? null : link.key));
      return;
    }
    closeAll();
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${hidden ? "navbar--hidden" : ""}`}>
      <div className="navbar__inner container">
        <nav className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          {NAV_LINKS.map((link) => {
            const hasMenu = !!link.children;
            const isActive =
              link.key === activeKey || link.children?.some((c) => c.key === activeKey);
            const isMenuOpen = openMenu === link.key;

            return (
              <div
                key={link.key}
                className={`navbar__item ${isMenuOpen ? "navbar__item--open" : ""}`}
                data-sign={link.bgImage.match(/navbar-sign-(\d+)/)?.[1]}

                style={{ "--link-bg-image": `url(${link.bgImage})` }}
                onMouseEnter={() => hasMenu && !isMobile() && setOpenMenu(link.key)}
                onMouseLeave={() => hasMenu && !isMobile() && setOpenMenu(null)}
              >
                <Link
                  to={link.to}
                  className={`navbar__link ${isActive ? "navbar__link--active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                  aria-haspopup={hasMenu ? "true" : undefined}
                  aria-expanded={hasMenu ? isMenuOpen : undefined}
                  onClick={(e) => handleParentClick(e, link)}
                >
                  {link.label}
                </Link>

                {hasMenu && (
                  <div className="navbar__dropdown">
                    <ul className="navbar__dropdown-list">
                      {link.children.map((child) => (
                        <li key={child.key}>
                          <Link
                            to={child.to}
                            className={`navbar__sublink ${child.key === activeKey ? "navbar__sublink--active" : ""
                              }`}
                            onClick={closeAll}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
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