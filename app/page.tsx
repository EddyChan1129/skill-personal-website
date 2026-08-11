"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { ContactForm } from "./contact-form";

type Locale = "en" | "zh";
type LoaderState = "checking" | "active" | "exiting" | "done";

const content = {
  en: {
    skip: "Skip to content",
    nav: ["Work", "Experience", "Skills"],
    contact: "Contact",
    heroKicker: "Full-stack software developer, Hong Kong",
    heroTitle: "Software for business operations.",
    heroSummary:
      "I build enterprise workflows and reliable web applications with React, Next.js and Node.js.",
    viewWork: "View work",
    resume: "Download resume",
    portraitAlt: "Portrait of Eddy Chan",
    developer: "Software Developer",
    loaderLabels: [
      "FULL-STACK SYSTEMS",
      "WORKFLOW AUTOMATION",
      "SAP INTEGRATION",
      "MOBILE APPLICATIONS",
      "PRODUCTION DELIVERY",
    ],
    workTitle: "Selected systems.",
    workIntro:
      "Two production projects spanning enterprise integration and customer operations.",
    enterpriseContext: "Enterprise platform",
    enterpriseTitle: "HR workflow and SAP integration.",
    enterpriseSummary:
      "Built eForm, approval and queued worker flows that validate and deliver employee records to SAP.",
    enterpriseMeta: [
      ["Role", "Programmer"],
      ["Stack", "React, Next.js, Express, BullMQ, Docker"],
      ["Contribution", "Frontend, APIs, workflow logic and production support"],
    ],
    workflow: [
      ["eForm", "Sales submission"],
      ["Approval", "HR validation"],
      ["BullMQ", "Queued record"],
      ["Worker", "Docker service"],
      ["SAP", "Verified handoff"],
    ],
    workflowLabel: "SAP integration workflow",
    productContext: "Production administration portal",
    productTitle: "My Bae Gel production admin.",
    productSummary:
      "A production administration portal for managing café bookings, products and partner access.",
    productMeta: [
      ["Role", "Full-stack development"],
      ["Stack", "Next.js, Firebase"],
      ["Features", "Calendar booking, catalogue management, café accounts"],
    ],
    dashboardAlt:
      "My Bae Gel café booking interface with a production calendar and order builder",
    dashboardCaption: "Café booking calendar and order builder",
    itemsAlt: "My Bae Gel catalogue creation and product management interface",
    itemsCaption: "Catalogue creation and product availability",
    availableDateAlt:
      "My Bae Gel admin form for blocking an available production date",
    availableDateCaption: "Block an available production date",
    blockedDateAlt:
      "My Bae Gel admin view showing a blocked production date",
    blockedDateCaption: "Blocked date state and reopen action",
    accountsAlt: "My Bae Gel café account onboarding form",
    accountsCaption: "Café account onboarding",
    successAlt: "My Bae Gel booking confirmation with an order summary",
    successCaption: "Booking confirmation and order summary",
    emailAlt: "My Bae Gel order notification email",
    emailCaption: "Order notification email delivery",
    openSite: "Open live site",
    experienceTitle: "Experience.",
    experience: [
      {
        dates: "Feb 2026 - Present",
        role: "Programmer",
        company: "Midland Realty",
        summary:
          "Ship and maintain enterprise HR workflows, integrations and production features across the stack.",
      },
      {
        dates: "Jul 2024 - Nov 2024",
        role: "Frontend Developer",
        company: "HKNova",
        summary:
          "Built Vue.js CRM features, integrated APIs and delivered updates through GitLab CI/CD.",
      },
      {
        dates: "Jan 2023 - Jun 2024",
        role: "IT Intern",
        company: "China Mobile",
        summary:
          "Built internal automation tools and a PHP/MySQL project tracker.",
      },
    ],
    skillsTitle: "Capabilities.",
    skills: [
      ["Frontend", "TypeScript, React, Next.js, Vue.js, React Native"],
      ["Backend", "Node.js, Express, REST APIs, BullMQ, worker services"],
      ["Data and integration", "MySQL, PostgreSQL, MongoDB, Firebase, SAP"],
      ["Delivery", "Docker, Git, GitLab CI/CD, Vercel, Agile"],
    ],
    educationTitle: "Education and applied projects.",
    education: [
      {
        dates: "2025",
        qualification: "Postgraduate Certificate in Mobile Application Development",
        school: "George Brown College",
        project:
          "Built a Firebase and React Native e-commerce app. Also worked with Kotlin, Swift and Android Studio.",
      },
      {
        dates: "2022 - 2024",
        qualification: "BSc in Computing",
        school: "The Hong Kong Polytechnic University",
        project: "Completed a stock prediction system as the final-year project.",
      },
    ],
    contactTitle: "Software roles and project enquiries.",
    contactIntro: "Contact me by email or send a short project brief.",
    switchLanguage: "切換至中文",
  },
  zh: {
    skip: "跳到主要內容",
    nav: ["作品", "經驗", "技能"],
    contact: "聯絡",
    heroKicker: "全端軟件開發員，香港",
    heroTitle: "支援業務營運的軟件系統。",
    heroSummary:
      "使用 React、Next.js 及 Node.js 開發企業流程和可靠的網絡應用程式。",
    viewWork: "查看作品",
    resume: "下載履歷",
    portraitAlt: "Eddy Chan 的人像照片",
    developer: "軟件開發員",
    loaderLabels: [
      "全端系統",
      "流程自動化",
      "SAP 系統整合",
      "流動應用程式",
      "正式環境交付",
    ],
    workTitle: "精選系統。",
    workIntro: "兩個正式項目，涵蓋企業整合及客戶營運。",
    enterpriseContext: "企業平台",
    enterpriseTitle: "人力資源流程及 SAP 整合。",
    enterpriseSummary:
      "建立 eForm、審批及背景工作流程，驗證員工資料並傳送至 SAP。",
    enterpriseMeta: [
      ["角色", "程式員"],
      ["技術", "React、Next.js、Express、BullMQ、Docker"],
      ["負責範圍", "前端、API、流程邏輯及正式環境支援"],
    ],
    workflow: [
      ["eForm", "銷售提交"],
      ["審批", "人力資源驗證"],
      ["BullMQ", "建立背景工作"],
      ["Worker", "Docker 服務"],
      ["SAP", "確認資料傳送"],
    ],
    workflowLabel: "SAP 系統整合流程",
    productContext: "生產管理平台",
    productTitle: "My Bae Gel 生產管理系統。",
    productSummary:
      "管理咖啡店預約、產品目錄及合作夥伴帳戶的生產管理平台。",
    productMeta: [
      ["角色", "全端開發"],
      ["技術", "Next.js、Firebase"],
      ["功能", "日曆預約、產品管理、咖啡店帳戶"],
    ],
    dashboardAlt: "My Bae Gel 咖啡店預約介面，顯示生產日曆及訂單建立功能",
    dashboardCaption: "咖啡店預約日曆及訂單建立",
    itemsAlt: "My Bae Gel 產品目錄建立及管理介面",
    itemsCaption: "產品目錄建立及供應狀態管理",
    availableDateAlt: "My Bae Gel 管理員封鎖可用生產日期的表格",
    availableDateCaption: "封鎖可用生產日期",
    blockedDateAlt: "My Bae Gel 管理員查看已封鎖生產日期的畫面",
    blockedDateCaption: "已封鎖日期及重新開放操作",
    accountsAlt: "My Bae Gel 咖啡店帳戶登記表格",
    accountsCaption: "咖啡店帳戶登記",
    successAlt: "My Bae Gel 預約成功及訂單摘要畫面",
    successCaption: "預約確認及訂單摘要",
    emailAlt: "My Bae Gel 訂單通知電郵",
    emailCaption: "訂單通知電郵發送",
    openSite: "開啟網站",
    experienceTitle: "工作經驗。",
    experience: [
      {
        dates: "2026年2月至今",
        role: "程式員",
        company: "美聯物業",
        summary: "交付及維護企業人力資源流程、系統整合及正式環境功能。",
      },
      {
        dates: "2024年7月至11月",
        role: "前端開發員",
        company: "HKNova",
        summary: "開發 Vue.js CRM 功能、整合 API，並透過 GitLab CI/CD 發布。",
      },
      {
        dates: "2023年1月至2024年6月",
        role: "資訊科技實習生",
        company: "中國移動",
        summary: "建立內部自動化工具，以及 PHP/MySQL 項目追蹤系統。",
      },
    ],
    skillsTitle: "技術能力。",
    skills: [
      ["前端開發", "TypeScript、React、Next.js、Vue.js、React Native"],
      ["後端開發", "Node.js、Express、REST API、BullMQ、worker services"],
      ["數據及整合", "MySQL、PostgreSQL、MongoDB、Firebase、SAP"],
      ["交付及部署", "Docker、Git、GitLab CI/CD、Vercel、Agile"],
    ],
    educationTitle: "教育背景及應用項目。",
    education: [
      {
        dates: "2025年",
        qualification: "流動應用程式開發深造證書",
        school: "George Brown College",
        project:
          "使用 Firebase 及 React Native 開發電商應用程式，亦接觸 Kotlin、Swift 及 Android Studio。",
      },
      {
        dates: "2022至2024年",
        qualification: "電腦學理學士",
        school: "香港理工大學",
        project: "以股票預測系統作為畢業專題。",
      },
    ],
    contactTitle: "軟件職位及項目查詢。",
    contactIntro: "可透過電郵聯絡，或提交簡短項目資料。",
    switchLanguage: "Switch to English",
  },
} as const;

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const [loaderState, setLoaderState] =
    useState<LoaderState>("checking");
  const [loaderStep, setLoaderStep] = useState(0);
  const loaderMarkRef = useRef<HTMLDivElement>(null);
  const t = content[locale];
  const productShots = [
    {
      src: "/my-bae-gel-booking.png",
      alt: t.dashboardAlt,
      caption: t.dashboardCaption,
      width: 2428,
      height: 2002,
      className: "product-shot-wide",
    },
    {
      src: "/my-bae-gel-date-available.png",
      alt: t.availableDateAlt,
      caption: t.availableDateCaption,
      width: 986,
      height: 1426,
      className: "product-shot-portrait",
    },
    {
      src: "/my-bae-gel-date-blocked.png",
      alt: t.blockedDateAlt,
      caption: t.blockedDateCaption,
      width: 986,
      height: 1188,
      className: "product-shot-portrait",
    },
    {
      src: "/my-bae-gel-catalogue.png",
      alt: t.itemsAlt,
      caption: t.itemsCaption,
      width: 1420,
      height: 1820,
      className: "product-shot-portrait",
    },
    {
      src: "/my-bae-gel-account.png",
      alt: t.accountsAlt,
      caption: t.accountsCaption,
      width: 1414,
      height: 1564,
      className: "product-shot-portrait",
    },
    {
      src: "/my-bae-gel-booking-success.png",
      alt: t.successAlt,
      caption: t.successCaption,
      width: 1218,
      height: 1738,
      className: "product-shot-portrait",
    },
  ] as const;

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-HK" : "en";
  }, [locale]);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.14 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      const skipTimer = window.setTimeout(() => {
        setLoaderState("done");
      }, 0);
      return () => window.clearTimeout(skipTimer);
    }

    const activateTimer = window.setTimeout(() => {
      setLoaderState("active");
    }, 0);

    const stepTimer = window.setInterval(() => {
      setLoaderStep((step) => Math.min(step + 1, 4));
    }, 220);

    const exitTimer = window.setTimeout(() => {
      window.clearInterval(stepTimer);
      setLoaderStep(4);

      const mark = loaderMarkRef.current;
      const brand = document.querySelector<HTMLElement>(".brand");

      if (mark && brand) {
        const from = mark.getBoundingClientRect();
        const to = brand.getBoundingClientRect();
        const translateX = to.left + to.width / 2 - (from.left + from.width / 2);
        const translateY = to.top + to.height / 2 - (from.top + from.height / 2);
        const scale = Math.max(to.width / from.width, 0.22);

        mark.animate(
          [
            { transform: "translate3d(0, 0, 0) scale(1)" },
            {
              transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`,
            },
          ],
          {
            duration: 360,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            fill: "forwards",
          },
        );
      }

      setLoaderState("exiting");
    }, 1100);

    const doneTimer = window.setTimeout(() => {
      setLoaderState("done");
    }, 1480);

    return () => {
      window.clearTimeout(activateTimer);
      window.clearInterval(stepTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

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
    <div
      className={`site-root locale-${locale}${loaderState === "done" ? " intro-complete" : ""}`}
      lang={locale === "zh" ? "zh-HK" : "en"}
    >
      {loaderState !== "done" && (
        <div
          className={`preloader is-${loaderState}`}
          aria-hidden="true"
        >
          <div className="preloader-center">
            <div className="preloader-mark" ref={loaderMarkRef}>
              E<span>C</span>
            </div>
            <div className="preloader-status">
              <p>{t.loaderLabels[loaderStep]}</p>
              <span>{loaderStep * 25}%</span>
            </div>
            <div className="preloader-track">
              <span style={{ transform: `scaleX(${loaderStep / 4})` }} />
            </div>
          </div>
        </div>
      )}

      <div className="ambient-effects" aria-hidden="true">
        <span className="ambient-effect ambient-effect-one" />
        <span className="ambient-effect ambient-effect-two" />
        <span className="ambient-effect ambient-effect-three" />
      </div>

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

        <section className="work-section" id="work">
          <div className="section-shell section-heading" data-reveal="left">
            <h2>{t.workTitle}</h2>
            <p>{t.workIntro}</p>
          </div>

          <article
            className="case-study enterprise-case section-shell"
            data-reveal="right"
          >
            <div className="case-copy">
              <p className="case-context">{t.enterpriseContext}</p>
              <h3>{t.enterpriseTitle}</h3>
              <p>{t.enterpriseSummary}</p>
              <dl className="case-meta">
                {t.enterpriseMeta.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <ol className="workflow" aria-label={t.workflowLabel}>
              {t.workflow.map(([title, detail], index) => (
                <li key={title} style={{ transitionDelay: `${index * 50}ms` }}>
                  <strong>{title}</strong>
                  <span>{detail}</span>
                </li>
              ))}
            </ol>
          </article>

          <article
            className="case-study product-case section-shell"
            data-reveal="left"
          >
            <div className="case-copy product-case-copy">
              <p className="case-context">{t.productContext}</p>
              <h3>{t.productTitle}</h3>
              <p>{t.productSummary}</p>
              <dl className="case-meta">
                {t.productMeta.map(([label, value]) => (
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

            <div className="product-gallery">
              <div className="product-marquee">
                <div className="product-marquee-track">
                  {[0, 1, 2].map((copyIndex) => (
                    <div
                      className="product-marquee-set"
                      aria-hidden={copyIndex > 0}
                      key={copyIndex}
                    >
                      {productShots.map((shot) => (
                        <figure
                          className={`product-shot ${shot.className}`}
                          key={shot.src}
                        >
                          <Image
                            src={shot.src}
                            alt={copyIndex > 0 ? "" : shot.alt}
                            width={shot.width}
                            height={shot.height}
                            sizes="(max-width: 900px) min(86vw, 360px), min(28vw, 396px)"
                            loading={
                              copyIndex === 0 &&
                              shot.src === "/my-bae-gel-booking.png"
                                ? "eager"
                                : "lazy"
                            }
                          />
                          <figcaption>{shot.caption}</figcaption>
                        </figure>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="experience-section section-shell" id="experience">
          <div className="section-heading" data-reveal="right">
            <h2>{t.experienceTitle}</h2>
          </div>
          <div className="experience-list">
            {t.experience.map((item, index) => (
              <article
                key={index}
                data-reveal={index % 2 === 0 ? "left" : "right"}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <time>{item.dates}</time>
                <div>
                  <h3>{item.role}</h3>
                  <p className="experience-company">{item.company}</p>
                </div>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-shell skills-layout">
            <div className="section-heading" data-reveal="left">
              <h2>{t.skillsTitle}</h2>
            </div>
            <div className="skills-grid">
              {t.skills.map(([title, list], index) => (
                <article
                  key={index}
                  data-reveal={index % 2 === 0 ? "right" : "left"}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <h3>{title}</h3>
                  <p>{list}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="education-section">
          <div className="section-shell">
            <div className="section-heading" data-reveal="right">
              <h2>{t.educationTitle}</h2>
            </div>
            <div className="education-grid">
              {t.education.map((item, index) => (
                <article
                  key={index}
                  data-reveal={index % 2 === 0 ? "left" : "right"}
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <time>{item.dates}</time>
                  <h3>{item.qualification}</h3>
                  <p className="education-school">{item.school}</p>
                  <p>{item.project}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-shell contact-inner" data-reveal="left">
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
