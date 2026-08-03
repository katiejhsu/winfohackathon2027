import { useState } from "react";
import { contact } from "../data/content";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire up to a real endpoint (e.g. Formspree, a Cloud Function, or
    // mailto fallback). For now this just confirms locally.
    setSubmitted(true);
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker" style={{ justifyContent: "center" }}>Say Hi</div>
          <h1>Contact Us</h1>
        </div>
      </section>

      <section className="section section--light">
        <div className="container" style={{ maxWidth: 640 }}>
          {submitted ? (
            <p>Thanks for reaching out! We'll get back to you soon 💌</p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input name="name" value={form.name} onChange={handleChange} required />
              </label>
              <label>
                Email
                <input type="email" name="email" value={form.email} onChange={handleChange} required />
              </label>
              <label>
                Message
                <textarea name="message" rows={5} value={form.message} onChange={handleChange} required />
              </label>
              <button type="submit" className="btn btn--primary">Send Message</button>
            </form>
          )}

          <div className="contact-alt">
            <p>Or reach us directly:</p>
            <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
            <p>
              <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a>{" · "}
              <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>{" · "}
              <a href={contact.youtube} target="_blank" rel="noreferrer">YouTube</a>{" · "}
              <a href={contact.facebook} target="_blank" rel="noreferrer">Facebook</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
