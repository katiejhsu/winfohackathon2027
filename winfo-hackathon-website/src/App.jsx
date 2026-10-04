import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

import MentorPortal from "./portals/MentorPortal";

function waitForImages() {
  const imgs = Array.from(document.images);
  return Promise.all(
    imgs.map((img) =>
      img.complete
        ? Promise.resolve()
        : new Promise((resolve) => {
            img.addEventListener("load", resolve, { once: true });
            img.addEventListener("error", resolve, { once: true });
          })
    )
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    let cancelled = false;

    if (hash) {
      const id = hash.replace("#", "");
      Promise.race([
        waitForImages(),
        new Promise((resolve) => setTimeout(resolve, 4000)),
      ]).then(() => {
        if (cancelled) return;
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        });
      });
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      cancelled = true;
    };
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          {/* ---- Main site ---- */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          {/* ---- Portals ---- */}
          <Route path="/mentor-portal" element={<MentorPortal />} />

          {/* ---- 404 ---- */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </main>
    </>
  );
}
