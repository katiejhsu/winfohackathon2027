import { contact, aboutWinfo } from "../data/content";
import "./Footer.css";

const socials = [
  { label: "website", icon: "website", href: aboutWinfo?.website },
  { label: "email", icon: "email", href: contact?.email ? `mailto:${contact.email}` : null },
  { label: "instagram", icon: "instagram", href: contact?.instagram },
  { label: "linkedin", icon: "linkedin", href: contact?.linkedin },
  { label: "youTube", icon: "youtube", href: contact?.youtube },
  { label: "facebook", icon: "facebook", href: contact?.facebook ?? "https://www.facebook.com/groups/winfouw/" },
].filter((s) => s.href); // skip any link that isn't defined

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <h2 className="footer-contact__heading">Contact Us</h2>
        <p className="footer-contact__text">
          Reach out to <a href="mailto:winfo@uw.edu">winfo@uw.edu</a> — we're happy to help.
        </p>
      </div>
      <div className="sponsors-section">
        <img src="assets/about/sponsors.png" alt="sponsor logos" />
      </div>
      <div className="footer__inner">
        <hr className="footer__divider" />
        <div className="footer__legal">
          <p>
            The University of Washington is committed to providing access, equal
            opportunity, and reasonable accommodations in its services, programs,
            activities, education, and employment for individuals with disabilities.
            To request disability accommodation, contact the Disability Service
            Office at least one day in advance by phone at 206.543.6450,
            206.543.6452/TTY, 206.685.7264/FAX, or email at dso@uw.edu.
          </p>
          <p>
            The views expressed at this program are not necessarily those of the
            Kelly Ethnic Cultural Center, Office of Minority Affairs &amp; Diversity,
            and the Services and the Activities Fee Committee.
          </p>
          <p>
            Special thanks to the HUB and iAffiliates. Made in Seattle, Washington
            with ⊹ ࣪⋆.˚ 🥾🌲🏔️
          </p>
          <div className="footer__right">
            <div className="footer__socials" aria-label="Social media">
              {socials.map(({ label, icon, href }) => {
                const isMail = href.startsWith("mailto:");
                return (
                  <a key={icon} href={href} aria-label={label} target={isMail ? undefined : "_blank"} rel={isMail ? undefined : "noopener noreferrer"}>
                    <img src={`/assets/about/icons/${icon}.png`} alt="" />
                  </a>
                );
              })}
            </div>
            <p className="footer__copyright">©2026 Women in Informatics</p>
          </div>
        </div>
      </div>
    </footer>
  );
}