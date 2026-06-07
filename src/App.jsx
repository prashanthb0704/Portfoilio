import { useState, useEffect } from "react";
import data from "./data";
import "./App.css";

const navLinks = ["Objective", "Experience", "Education", "Skills", "Projects", "Certifications", "Contact"];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            {data.name}
          </div>
          <ul className="nav-links">
            {navLinks.map((l) => (
              <li key={l}><button onClick={() => scrollTo(l)}>{l}</button></li>
            ))}
          </ul>
          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
            <span /><span /><span />
          </button>
        </div>
        {menuOpen && (
          <ul className="nav-mobile">
            {navLinks.map((l) => (
              <li key={l}><button onClick={() => scrollTo(l)}>{l}</button></li>
            ))}
          </ul>
        )}
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-badge">👋 Welcome to my portfolio</div>
          <h1 className="hero-name">{data.name}</h1>
          <p className="hero-title">{data.title}</p>
          <div className="hero-btns">
            <button className="btn btn-primary" onClick={() => scrollTo("Projects")}>View Projects</button>
            <button className="btn btn-outline" onClick={() => scrollTo("Contact")}>Contact Me</button>
          </div>
        </div>
      </header>

      <main className="main">

        {/* CAREER OBJECTIVE */}
        <Section id="objective" title="Career Objective">
          <div className="objective-card">
            <p>{data.objective}</p>
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" title="Experience">
          <div className="timeline">
            {data.experience.map((ex) => (
              <div className="timeline-item" key={ex.id}>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <div className="tcard-head">
                    <div>
                      <div className="tcard-role">{ex.role}</div>
                      <div className="tcard-company">{ex.company} · {ex.location}</div>
                    </div>
                    <div className="tcard-date">{ex.start} – {ex.end}</div>
                  </div>
                  <ul className="tcard-points">
                    {ex.points.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* EDUCATION */}
        <Section id="education" title="Education" gray>
          {data.education.map((ed) => (
            <div className="edu-card" key={ed.id}>
              <div className="edu-icon">🎓</div>
              <div className="edu-info">
                <div className="edu-degree">{ed.degree}</div>
                <div className="edu-school">{ed.school}</div>
                <div className="edu-meta">{ed.start} – {ed.end} {ed.gpa && `· GPA: ${ed.gpa}`}</div>
              </div>
            </div>
          ))}
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Skills">
          <div className="skills-grid">
            {Object.entries(data.skills).map(([cat, items]) => (
              <div className="skill-card" key={cat}>
                <div className="skill-cat">{cat}</div>
                <div className="skill-tags">
                  {items.map((s) => <span key={s} className="skill-tag">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Projects" gray>
          <div className="projects-grid">
            {data.projects.map((pr) => (
              <div className="project-card" key={pr.id}>
                <div className="project-name">{pr.name}</div>
                <p className="project-desc">{pr.desc}</p>
                <div className="project-tech">
                  {pr.tech.map((t) => <span key={t}>{t}</span>)}
                </div>
                <div className="project-links">
                  {pr.github && <a href={pr.github} target="_blank" rel="noreferrer">GitHub →</a>}
                  {pr.live && <a href={pr.live} target="_blank" rel="noreferrer">Live Site →</a>}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CERTIFICATIONS */}
        <Section id="certifications" title="Certifications">
          <div className="cert-grid">
            {data.certifications.map((c) => (
              <div className="cert-card" key={c.id}>
                <div className="cert-icon">🏅</div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-issuer">{c.issuer}</div>
                <div className="cert-date">{c.date}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Contact" gray>
          <div className="contact-grid">
            <a className="contact-card" href={`mailto:${data.email}`}>
              <span className="contact-icon">✉️</span>
              <div className="contact-label">Email</div>
              <div className="contact-value">{data.email}</div>
            </a>
            <a className="contact-card" href={`tel:${data.phone}`}>
              <span className="contact-icon">📞</span>
              <div className="contact-label">Phone</div>
              <div className="contact-value">{data.phone}</div>
            </a>
            <a className="contact-card" href={data.linkedin} target="_blank" rel="noreferrer">
              <span className="contact-icon">💼</span>
              <div className="contact-label">LinkedIn</div>
              <div className="contact-value">View Profile</div>
            </a>
            <a className="contact-card" href={data.github} target="_blank" rel="noreferrer">
              <span className="contact-icon">⌨️</span>
              <div className="contact-label">GitHub</div>
              <div className="contact-value">View Repos</div>
            </a>
          </div>
          <p className="contact-location">📍 {data.location}</p>
        </Section>

      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {data.name} · Built with React</p>
      </footer>
    </div>
  );
}

function Section({ id, title, children, gray }) {
  return (
    <section id={id} className={`section ${gray ? "section--gray" : ""}`}>
      <div className="section-inner">
        <div className="section-heading">
          <h2>{title}</h2>
          <div className="section-line" />
        </div>
        {children}
      </div>
    </section>
  );
}
