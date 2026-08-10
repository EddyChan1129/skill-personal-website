"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { ContactForm } from "./contact-form";

type Locale = "en" | "zh";

const content = {
  en: {
    skip: "Skip to content",
    nav: ["Work", "Experience", "Skills"],
    contact: "Contact",
    portfolio: "Portfolio",
    heroKicker: "Full-stack software developer · Hong Kong",
    heroTitle: "Full-stack engineering for enterprise systems.",
    heroSummary:
      "Software developer specialising in enterprise HR platforms, workflow automation and system integration using React, Next.js and Node.js.",
    viewWork: "View work",
    resume: "Download resume",
    portraitAlt: "Editorial portrait of Eddy Chan",
    developer: "Software Developer",
    snapshot: "Enterprise systems, delivered across the stack.",
    snapshotFacts: [
      ["Current role", "Programmer at Midland Realty"],
      ["Specialisation", "Enterprise workflows"],
      ["Scope", "Frontend, backend and integration"],
    ],
    workLabel: "Current role",
    workTitle: "HR platform engineering and SAP integration.",
    workIntro:
      "Maintain and extend a large-scale HR platform across frontend features, backend services and SAP integration.",
    systemLabel: "HRD Firsthand",
    systemTitle: "HR workflow and SAP integration.",
    systemIntro:
      "Developed the sales eForm, HR approval workflow and asynchronous data handoff to SAP.",
    workflow: [
      ["eForm", "Sales submission"],
      ["Approval", "HR validation"],
      ["BullMQ", "Queued record"],
      ["Worker", "Docker service"],
      ["SAP", "Verified handoff"],
    ],
    workFacts: [
      ["IR56F", "Frontend, APIs, validation and workflow logic"],
      ["Integration", "BullMQ, Docker worker, SAP and Postman"],
      ["Maintenance", "Production issues, existing modules and new features"],
    ],
    projectLabel: "Selected project",
    projectTitle: "Partner booking platform.",
    projectAlt: "My Bae Gel partner booking login screen",
    projectType: "Partner booking system",
    projectName: "My Bae Gel Booking",
    projectIntro:
      "Developed and deployed a portal for business partners to reserve and manage production dates.",
    projectFacts: [
      ["Access", "Authenticated partner portal"],
      ["Workflow", "Production-day reservations"],
      ["Rule", "1:00 PM America/Toronto cut-off"],
    ],
    openSite: "Open live site",
    experienceLabel: "Employment history",
    experienceTitle: "Software development experience.",
    experience: [
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
    ],
    skillsLabel: "Technical skills",
    skillsTitle: "Full-stack technology stack.",
    skillsIntro:
      "Technologies used across enterprise platforms, mobile applications and production deployments.",
    skills: [
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
    ],
    academicTitle: "Academic projects and mobile development training.",
    academicProjects: [
      {
        institution: "George Brown College",
        title: "Mobile e-commerce app",
        summary:
          "Built with React Native and Firebase. Coursework also covered Kotlin, Swift and Android Studio.",
      },
      {
        institution: "PolyU",
        title: "Stock prediction FYP",
        summary:
          "Developed a stock prediction system as my final-year project in the BSc in Computing.",
      },
    ],
    educationLabel: "Education",
    education: [
      ["2022 - 2024", "BSc in Computing", "The Hong Kong Polytechnic University"],
      [
        "2025",
        "Postgraduate Certificate",
        "Mobile Application Development, George Brown College",
      ],
    ],
    contactTitle: "Software roles and project enquiries.",
    contactIntro:
      "For software development roles or project enquiries, contact me by email or use the form.",
    switchLanguage: "切換至中文",
  },
  zh: {
    skip: "跳到主要內容",
    nav: ["作品", "經驗", "技能"],
    contact: "聯絡",
    portfolio: "作品集",
    heroKicker: "全端軟件開發員 · 香港",
    heroTitle: "企業系統全端工程。",
    heroSummary:
      "專注企業人力資源平台、流程自動化及系統整合，主要使用 React、Next.js 及 Node.js。",
    viewWork: "查看作品",
    resume: "下載履歷",
    portraitAlt: "Eddy Chan 的編輯風格人像",
    developer: "軟件開發員",
    snapshot: "涵蓋企業系統前端、後端及整合開發。",
    snapshotFacts: [
      ["現職", "美聯物業程式員"],
      ["專長", "企業工作流程"],
      ["範圍", "前端、後端及系統整合"],
    ],
    workLabel: "現職工作",
    workTitle: "人力資源平台工程及 SAP 整合。",
    workIntro:
      "維護及擴展大型人力資源平台，涵蓋前端功能、後端服務及 SAP 系統整合。",
    systemLabel: "HRD Firsthand",
    systemTitle: "人力資源流程及 SAP 整合。",
    systemIntro:
      "開發銷售 eForm、人力資源審批流程，以及傳送至 SAP 的非同步資料處理。",
    workflow: [
      ["eForm", "銷售提交資料"],
      ["審批", "人力資源驗證"],
      ["BullMQ", "建立背景工作"],
      ["Worker", "Docker 服務"],
      ["SAP", "驗證資料傳送"],
    ],
    workFacts: [
      ["IR56F", "前端、API、資料驗證及流程邏輯"],
      ["系統整合", "BullMQ、Docker worker、SAP 及 Postman"],
      ["系統維護", "處理正式環境問題、既有模組及新功能"],
    ],
    projectLabel: "精選項目",
    projectTitle: "合作夥伴預約平台。",
    projectAlt: "My Bae Gel 合作夥伴預約系統登入畫面",
    projectType: "合作夥伴預約系統",
    projectName: "My Bae Gel Booking",
    projectIntro:
      "開發及部署網上平台，供業務合作夥伴預約及管理生產日期。",
    projectFacts: [
      ["存取", "已驗證身分的合作夥伴平台"],
      ["流程", "生產日期預約"],
      ["規則", "多倫多時間下午 1 時截止"],
    ],
    openSite: "開啟網站",
    experienceLabel: "工作履歷",
    experienceTitle: "軟件開發工作經驗。",
    experience: [
      {
        dates: "2026年2月至今",
        role: "程式員",
        company: "美聯物業",
        summary:
          "維護大型企業人力資源平台，並使用 React、Next.js、TypeScript、Express、BullMQ 及 Docker 交付正式功能。",
      },
      {
        dates: "2024年7月至11月",
        role: "前端開發員",
        company: "HKNova",
        summary:
          "為 CRM 平台開發 Vue.js 正式功能、整合後端 API，並透過 GitLab CI/CD 發布更新。",
      },
      {
        dates: "2023年1月至2024年6月",
        role: "資訊科技實習生",
        company: "中國移動",
        summary:
          "為內部團隊建立 Node.js 及 React 自動化工具，以及 PHP 和 MySQL 項目追蹤系統。",
      },
    ],
    skillsLabel: "技術能力",
    skillsTitle: "全端開發技術組合。",
    skillsIntro: "曾應用於企業平台、流動應用程式及正式環境部署的技術。",
    skills: [
      {
        title: "前端開發",
        list: "TypeScript、React、Next.js、Vue.js、React Native",
        evidence: "企業人力資源、CRM 及流動應用程式",
      },
      {
        title: "後端開發",
        list: "Node.js、Express、REST API、BullMQ、worker services",
        evidence: "審批流程及背景工作處理",
      },
      {
        title: "數據及整合",
        list: "MySQL、PostgreSQL、MongoDB、Firebase、SAP、Postman",
        evidence: "業務系統及外部系統整合",
      },
      {
        title: "交付及部署",
        list: "Docker、Git、GitLab CI/CD、Vercel、Agile",
        evidence: "正式環境維護及功能發布",
      },
    ],
    academicTitle: "學術項目及流動開發培訓。",
    academicProjects: [
      {
        institution: "George Brown College",
        title: "流動電商應用程式",
        summary:
          "使用 React Native 及 Firebase 開發，課程亦涵蓋 Kotlin、Swift 及 Android Studio。",
      },
      {
        institution: "香港理工大學",
        title: "股票預測畢業專題",
        summary: "在電腦學理學士課程中，以股票預測系統作為畢業專題。",
      },
    ],
    educationLabel: "教育背景",
    education: [
      ["2022至2024年", "電腦學理學士", "香港理工大學"],
      ["2025年", "深造證書", "流動應用程式開發，George Brown College"],
    ],
    contactTitle: "軟件職位及項目查詢。",
    contactIntro:
      "如有軟件開發職位或項目合作查詢，可透過電郵或表格聯絡。",
    switchLanguage: "Switch to English",
  },
} as const;

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = content[locale];

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-HK" : "en";
  }, [locale]);

  function toggleLocale() {
    const nextLocale = locale === "en" ? "zh" : "en";
    const sections = [...document.querySelectorAll<HTMLElement>("main > section")];
    const headerOffset = 84;
    const anchor = sections.reduce<HTMLElement | undefined>((closest, section) => {
      if (!closest) return section;

      const distance = Math.abs(section.getBoundingClientRect().top - headerOffset);
      const closestDistance = Math.abs(
        closest.getBoundingClientRect().top - headerOffset,
      );

      return distance < closestDistance ? section : closest;
    }, undefined);

    const anchorTop = anchor?.getBoundingClientRect().top;
    const update = () => {
      flushSync(() => setLocale(nextLocale));
      if (anchor && anchorTop !== undefined) {
        requestAnimationFrame(() => {
          window.scrollBy(0, anchor.getBoundingClientRect().top - anchorTop);
        });
      }
    };
    const startViewTransition = (
      document as Document & {
        startViewTransition?: (callback: () => void) => void;
      }
    ).startViewTransition;

    if (
      startViewTransition &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      startViewTransition.call(document, update);
    } else {
      update();
    }
  }

  return (
    <div className={`site-root locale-${locale}`} lang={locale === "zh" ? "zh-HK" : "en"}>
      <a className="skip-link" href="#main-content">
        {t.skip}
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a
            className="brand"
            href="#top"
            aria-label={locale === "zh" ? "Eddy Chan 首頁" : "Eddy Chan, home"}
          >
            E<span>C</span>
          </a>
          <nav
            className="site-nav"
            aria-label={locale === "zh" ? "主要導覽" : "Primary navigation"}
          >
            <a href="#work">{t.nav[0]}</a>
            <a href="#experience">{t.nav[1]}</a>
            <a href="#skills">{t.nav[2]}</a>
          </nav>
          <div className="header-actions">
            <button
              className="language-toggle"
              type="button"
              onClick={toggleLocale}
              aria-label={t.switchLanguage}
            >
              {locale === "en" ? "中文" : "EN"}
            </button>
            <a className="header-contact" href="#contact">
              {t.contact}
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <p className="hero-word" aria-hidden="true">
            {t.portfolio}
          </p>
          <div className="section-shell hero-grid">
            <div className="hero-copy">
              <p className="hero-kicker">{t.heroKicker}</p>
              <h1>{t.heroTitle}</h1>
              <p className="hero-summary">{t.heroSummary}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  {t.viewWork}
                </a>
                <a
                  className="button button-secondary"
                  href="/Eddy_Chan_Resume_2026.pdf"
                  download
                >
                  {t.resume}
                </a>
              </div>
            </div>

            <figure className="portrait-frame">
              <Image
                src="/eddy-chan.png"
                alt={t.portraitAlt}
                width={1086}
                height={1448}
                sizes="(max-width: 767px) 100vw, 52vw"
                preload
              />
              <figcaption>
                <strong>Eddy Chan</strong>
                <span>{t.developer}</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          className="snapshot"
          aria-label={locale === "zh" ? "招聘人員摘要" : "Recruiter snapshot"}
        >
          <div className="section-shell snapshot-layout">
            <p className="snapshot-statement">
              {t.snapshot}
            </p>
            <dl className="snapshot-facts">
              {t.snapshotFacts.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section-shell work-section" id="work">
          <div className="work-intro">
            <p className="eyebrow">{t.workLabel}</p>
            <h2>{t.workTitle}</h2>
            <p>{t.workIntro}</p>
          </div>

          <div className="system-stage">
            <div className="system-stage-copy">
              <p className="project-type">{t.systemLabel}</p>
              <h3>{t.systemTitle}</h3>
              <p>{t.systemIntro}</p>
            </div>
            <ol
              className="workflow"
              aria-label={locale === "zh" ? "SAP 整合流程" : "SAP integration workflow"}
            >
              {t.workflow.map(([title, detail]) => (
                <li key={title}>
                  <strong>{title}</strong>
                  <p>{detail}</p>
                </li>
              ))}
            </ol>
          </div>

          <dl className="work-facts">
            {t.workFacts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="projects-section" aria-labelledby="projects-title">
          <div className="section-shell">
            <div className="projects-heading">
              <p className="eyebrow">{t.projectLabel}</p>
              <h2 id="projects-title">{t.projectTitle}</h2>
            </div>
            <article className="project-feature">
              <div className="project-image">
                <Image
                  src="/my-bae-gel-booking.jpg"
                  alt={t.projectAlt}
                  width={1280}
                  height={720}
                  sizes="100vw"
                />
              </div>

              <div className="project-copy">
                <p className="project-type">{t.projectType}</p>
                <h3>{t.projectName}</h3>
                <p>{t.projectIntro}</p>
                <dl className="project-facts">
                  {t.projectFacts.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
                <a
                  className="text-link"
                  href="https://my-bae-gel-booking.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.openSite}
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="section-shell experience-section" id="experience">
          <div className="experience-heading">
            <p className="eyebrow">{t.experienceLabel}</p>
            <h2>{t.experienceTitle}</h2>
          </div>
          <div className="experience-grid">
            <article className="experience-current">
              <time>{t.experience[0].dates}</time>
              <p>{t.experience[0].company}</p>
              <h3>{t.experience[0].role}</h3>
              <div>{t.experience[0].summary}</div>
            </article>
            <div className="experience-history">
              {t.experience.slice(1).map((item) => (
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
              <p className="eyebrow">{t.skillsLabel}</p>
              <h2>{t.skillsTitle}</h2>
              <p>{t.skillsIntro}</p>
            </div>
            <div className="skills-grid">
              {t.skills.map((skill) => (
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
            <div className="academic-projects">
              <h2>{t.academicTitle}</h2>
              <div className="academic-project-list">
                {t.academicProjects.map((project) => (
                  <article key={project.title}>
                    <p className="academic-institution">{project.institution}</p>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="education-column">
              <p className="eyebrow">{t.educationLabel}</p>
              {t.education.map(([dates, qualification, school]) => (
                <article key={qualification}>
                  <time>{dates}</time>
                  <h3>{qualification}</h3>
                  <p>{school}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-shell contact-inner">
            <div className="contact-copy">
              <h2>{t.contactTitle}</h2>
              <p>{t.contactIntro}</p>
              <a href="mailto:eddychan1129@gmail.com">
                eddychan1129@gmail.com
              </a>
            </div>
            <ContactForm key={locale} locale={locale} />
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
            <a href="mailto:eddychan1129@gmail.com">{t.contact}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
