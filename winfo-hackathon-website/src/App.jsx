import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Tracks from "./pages/Tracks";
import Schedule from "./pages/Schedule";
import People from "./pages/People";
import About from "./pages/About";
import Resources from "./pages/Resources";
import DayOf from "./pages/DayOf";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import TestBackground from "./pages/TestBackground";
import NotFound from "./pages/NotFound";

import SubmissionPortal from "./portals/SubmissionPortal";
import MentorFeedbackPortal from "./portals/MentorFeedbackPortal";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/people" element={<People />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/day-of" element={<DayOf />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/test-background" element={<TestBackground />} />

          {/* ---- Portals ---- */}
          <Route path="/portal/submission" element={<SubmissionPortal />} />
          <Route path="/portal/mentor-feedback" element={<MentorFeedbackPortal />} />

          {/* ---- 404 ---- */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
