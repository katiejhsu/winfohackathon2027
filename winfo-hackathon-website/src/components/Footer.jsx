import { Link } from "react-router-dom";
import { contact, aboutWinfo } from "../data/content";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__col">
          <div className="footer__brand">winfo hackathon</div>
          <p className="footer__blurb">
            Women in Informatics · Information School · University of Washington
          </p>
          <a className="footer__link" href={aboutWinfo.website} target="_blank" rel="noreferrer">
            winfo.ischool.uw.edu
          </a>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Explore</h4>
          <Link to="/tracks">Tracks</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/people">The People</Link>
          <Link to="/resources">Resources &amp; FAQ</Link>
          <Link to="/about">About WINFO</Link>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Portals</h4>
          <Link to="/register">Register</Link>
          <Link to="/portal/submission">Project Submission</Link>
          <Link to="/portal/mentor-feedback">Mentor Feedback</Link>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Connect</h4>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={contact.youtube} target="_blank" rel="noreferrer">YouTube</a>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>
          The University of Washington is committed to providing access, equal
          opportunity, and reasonable accommodations for individuals with
          disabilities. To request accommodation, contact the Disability
          Services Office at least one day in advance.
        </p>
        <p>© {new Date().getFullYear()} Women in Informatics — Made in Seattle, WA</p>
      </div>
    </footer>
  );
}
