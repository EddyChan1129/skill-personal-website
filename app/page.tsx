import Image from "next/image";
import { ContactForm } from "./contact-form";

const workflow = [
  ["eForm", "Sales submission"],
  ["Approval", "HR validation"],
  ["BullMQ", "Queued record"],
  ["Worker", "Docker service"],
  ["SAP", "Verified handoff"],
] as const;

const experience = [
  {
    dates: "Feb 2026 - Present",
    role: "Programmer",
    company: "Midland Realty",
    summary:
      "Maintain a large-scale enterprise HR platform and deliver production features across React, Next.js, TypeScript, Express, BullMQ and Docker.",
  },
  {
    dates: "Jul 2024 - Nov 2024",
    role: "Frontend Developer",
    company: "HKNova",
    summary:
      "Built production Vue.js features for a CRM platform, integrated backend APIs and delivered updates through GitLab CI/CD.",
  },
  {
    dates: "Jan 2023 - Jun 2024",
    role: "IT Intern",
    company: "China Mobile",
    summary:
      "Built Node.js and React automation tools plus a PHP and MySQL project tracker for internal teams.",
  },
] as const;

const skills = [
  {
    title: "Frontend",
    list: "TypeScript, React, Next.js, Vue.js, React Native",
    evidence: "Enterprise HR, CRM and mobile applications",
  },
  {
    title: "Backend",
    list: "Node.js, Express, REST APIs, BullMQ, worker services",
    evidence: "Approval workflows and background processing",
  },
  {
    title: "Data and integration",
    list: "MySQL, PostgreSQL, MongoDB, Firebase, SAP, Postman",
    evidence: "Business systems and external integration",
  },
  {
    title: "Delivery",
    list: "Docker, Git, GitLab CI/CD, Vercel, Agile",
    evidence: "Production maintenance and feature releases",
  },
] as const;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Eddy Chan, home">
            E<span>C</span>
          </a>
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
          </nav>
          <a className="header-contact" href="#contact">
            Contact
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <p className="hero-word" aria-hidden="true">
            Portfolio
          </p>
          <div className="section-shell hero-grid">
            <div className="hero-copy">
              <h1>Software for real business workflows.</h1>
              <p className="hero-summary">
                Full-stack developer shipping reliable HR workflows,
                integrations and production features with React, Next.js and
                Node.js.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  View work
                </a>
                <a
                  className="button button-secondary"
                  href="/Eddy_Chan_Resume_2026.pdf"
                  download
                >
                  Download resume
                </a>
              </div>
            </div>

            <figure className="portrait-frame">
              <Image
                src="/eddy-chan.png"
                alt="Editorial portrait of Eddy Chan"
                width={1086}
                height={1448}
                sizes="(max-width: 767px) 100vw, 52vw"
                preload
              />
              <figcaption>
                <strong>Eddy Chan</strong>
                <span>Software Developer</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="snapshot" aria-label="Recruiter snapshot">
          <div className="section-shell snapshot-layout">
            <p className="snapshot-statement">
              Enterprise HR systems, owned across the stack.
            </p>
            <dl className="snapshot-facts">
              <div>
                <dt>Now</dt>
                <dd>Programmer at Midland Realty</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Business-critical workflows</dd>
              </div>
              <div>
                <dt>Range</dt>
                <dd>Interface to integration</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="section-shell work-section" id="work">
          <div className="work-intro">
            <p className="eyebrow">Current production work</p>
            <h2>Enterprise software with operational weight.</h2>
            <p>
              I work inside an established HR platform, from user-facing forms
              to asynchronous SAP integration.
            </p>
          </div>

          <div className="system-stage">
            <div className="system-stage-copy">
              <p className="project-type">HRD Firsthand</p>
              <h3>From approval to SAP.</h3>
              <p>
                I built the sales eForm, HR approval flow and asynchronous
                handoff behind this production workflow.
              </p>
            </div>
            <ol className="workflow" aria-label="SAP integration workflow">
              {workflow.map(([title, detail]) => (
                <li key={title}>
                  <strong>{title}</strong>
                  <p>{detail}</p>
                </li>
              ))}
            </ol>
          </div>

          <dl className="work-facts">
            <div>
              <dt>IR56F</dt>
              <dd>Frontend, APIs, validation and workflow logic</dd>
            </div>
            <div>
              <dt>Integration</dt>
              <dd>BullMQ, Docker worker, SAP and Postman</dd>
            </div>
            <div>
              <dt>Maintenance</dt>
              <dd>Production issues, existing modules and new features</dd>
            </div>
          </dl>
        </section>

        <section className="projects-section" aria-labelledby="projects-title">
          <div className="section-shell">
            <div className="projects-heading">
              <p className="eyebrow">Selected project</p>
              <h2 id="projects-title">A real product, not a mock-up.</h2>
            </div>
            <article className="project-feature">
              <div className="project-image">
                <Image
                  src="/my-bae-gel-booking.jpg"
                  alt="My Bae Gel partner booking login screen"
                  width={1280}
                  height={720}
                  sizes="100vw"
                />
              </div>

              <div className="project-copy">
                <p className="project-type">Partner booking system</p>
                <h3>My Bae Gel Booking</h3>
                <p>
                  A live portal that gives business partners one clear place to
                  reserve and manage production days.
                </p>
                <dl className="project-facts">
                  <div>
                    <dt>Access</dt>
                    <dd>Authenticated partner portal</dd>
                  </div>
                  <div>
                    <dt>Workflow</dt>
                    <dd>Production-day reservations</dd>
                  </div>
                  <div>
                    <dt>Rule</dt>
                    <dd>1:00 PM America/Toronto cut-off</dd>
                  </div>
                </dl>
                <a
                  className="text-link"
                  href="https://my-bae-gel-booking.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open live site
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="section-shell experience-section" id="experience">
          <div className="experience-heading">
            <p className="eyebrow">Experience</p>
            <h2>Built in production.</h2>
          </div>
          <div className="experience-grid">
            <article className="experience-current">
              <time>{experience[0].dates}</time>
              <p>{experience[0].company}</p>
              <h3>{experience[0].role}</h3>
              <div>{experience[0].summary}</div>
            </article>
            <div className="experience-history">
              {experience.slice(1).map((item) => (
                <article key={item.company}>
                  <time>{item.dates}</time>
                  <h3>{item.role}</h3>
                  <p className="experience-company">{item.company}</p>
                  <p>{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-shell skills-layout">
            <div className="skills-intro">
              <p className="eyebrow">Technical range</p>
              <h2>I work across the handoffs.</h2>
              <p>
                Each group maps to systems I have built, maintained or shipped.
              </p>
            </div>
            <div className="skills-grid">
              {skills.map((skill) => (
                <article key={skill.title}>
                  <h3>{skill.title}</h3>
                  <p>{skill.list}</p>
                  <small>{skill.evidence}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="background-section">
          <div className="section-shell background-layout">
            <div className="communication-note">
              <blockquote>
                Clear software starts with a clear understanding of the people
                using it.
              </blockquote>
              <p>
                Teaching Scratch to primary school students strengthened how I
                explain technical ideas and spot where users get stuck.
              </p>
            </div>
            <div className="education-column">
              <p className="eyebrow">Education</p>
              <article>
                <time>2022 - 2024</time>
                <h3>BSc in Computing</h3>
                <p>The Hong Kong Polytechnic University</p>
              </article>
              <article>
                <time>2025</time>
                <h3>Postgraduate Certificate</h3>
                <p>Mobile Application Development, George Brown College</p>
              </article>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-shell contact-inner">
            <div className="contact-copy">
              <h2>Let&apos;s talk about the role.</h2>
              <p>
                Need a developer who can understand an existing system and own
                features across the stack? I&apos;d be glad to talk.
              </p>
              <a href="mailto:eddychan1129@gmail.com">
                eddychan1129@gmail.com
              </a>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <p>© 2026 Eddy Chan</p>
          <div>
            <a
              href="https://github.com/EddyChan1129"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a href="mailto:eddychan1129@gmail.com">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
