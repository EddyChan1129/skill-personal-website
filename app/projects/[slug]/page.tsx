import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  isProjectSlug,
  projects,
  type ProjectLocale,
} from "../project-data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string | string[] }>;
};

const labels = {
  en: {
    skip: "Skip to project content",
    back: "Back to projects",
    personalProject: "Personal project",
    openSite: "Open live site",
    switchLanguage: "中文",
    switchLabel: "切換至中文",
  },
  zh: {
    skip: "跳到項目內容",
    back: "返回項目",
    personalProject: "個人項目",
    openSite: "開啟網站",
    switchLanguage: "EN",
    switchLabel: "Switch to English",
  },
} as const;

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isProjectSlug(slug)) return {};

  const project = projects[slug].copy.en;

  return {
    title: `${project.title} | Eddy Chan`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
  searchParams,
}: ProjectPageProps) {
  const [{ slug }, query] = await Promise.all([params, searchParams]);

  if (!isProjectSlug(slug)) notFound();

  const locale: ProjectLocale = query.lang === "zh" ? "zh" : "en";
  const project = projects[slug];
  const copy = project.copy[locale];
  const ui = labels[locale];
  const homeHref = locale === "zh" ? "/?lang=zh" : "/";
  const projectsHref = `${homeHref}#work`;
  const languageHref =
    locale === "en" ? `/projects/${slug}?lang=zh` : `/projects/${slug}`;

  return (
    <div
      className={`site-root project-detail-page locale-${locale}`}
      lang={locale === "zh" ? "zh-HK" : "en"}
    >
      <div className="ambient-effects" aria-hidden="true">
        <span className="ambient-effect ambient-effect-one" />
        <span className="ambient-effect ambient-effect-two" />
      </div>

      <a className="skip-link" href="#project-content">
        {ui.skip}
      </a>

      <header className="project-detail-header">
        <div className="section-shell project-detail-header-inner">
          <Link className="brand" href={homeHref} aria-label="Eddy Chan">
            E<span>C</span>
          </Link>
          <nav aria-label={locale === "zh" ? "項目導覽" : "Project navigation"}>
            <Link className="project-back-link" href={projectsHref}>
              {ui.back}
            </Link>
            <Link
              className="language-toggle project-language-link"
              href={languageHref}
              aria-label={ui.switchLabel}
            >
              {ui.switchLanguage}
            </Link>
          </nav>
        </div>
      </header>

      <main id="project-content">
        <section className="project-detail-hero section-shell">
          <div className="project-detail-heading">
            <p className="case-context">{ui.personalProject}</p>
            <p className="project-detail-context">{copy.context}</p>
            <h1>{copy.title}</h1>
            <p className="project-detail-summary">{copy.summary}</p>
          </div>

          <div className="project-detail-facts">
            <dl className="case-meta">
              {copy.meta.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            {"liveUrl" in project && (
              <a
                className="button button-primary project-live-link"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                {ui.openSite}
              </a>
            )}
          </div>
        </section>

        <section className="project-detail-gallery-section">
          <div className="section-shell project-gallery-heading">
            <h2>{copy.galleryTitle}</h2>
            <p>{copy.galleryIntro}</p>
          </div>

          <div
            className="section-shell project-detail-gallery"
            aria-label={copy.galleryLabel}
          >
            {project.shots.map((shot, index) => {
              const shotCopy = shot.copy[locale];
              const featured = "featured" in shot && shot.featured;

              return (
                <figure
                  className={`project-detail-shot${featured ? " is-featured" : ""}`}
                  key={shot.src}
                >
                  <Image
                    src={shot.src}
                    alt={shotCopy.alt}
                    width={shot.width}
                    height={shot.height}
                    sizes={
                      featured
                        ? "(max-width: 767px) calc(100vw - 40px), (max-width: 1120px) calc(100vw - 80px), 1360px"
                        : "(max-width: 767px) calc(100vw - 40px), (max-width: 1120px) 46vw, 31vw"
                    }
                    preload={index === 0}
                  />
                  <figcaption>
                    <span aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {shotCopy.caption}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <p>© 2026 Eddy Chan</p>
          <Link href={projectsHref}>{ui.back}</Link>
        </div>
      </footer>
    </div>
  );
}
