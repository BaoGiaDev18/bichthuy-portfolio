import Link from "next/link";
import { CONTACT, DICT, PATHS, R2_VIDEOS, VIDEOS, type Lang } from "../../content/site";
import SiteHeader from "../SiteHeader";
import Label from "../Label";
import { PlayIcon } from "../Icons";
import Video from "../Video";

const SPARKLE = (cx: number, cy: number, rx: number, ry: number) => {
  const k = 0.14;
  return `M${cx} ${cy - ry} C${cx + rx * k} ${cy - ry * k} ${cx + rx * k} ${cy - ry * k} ${cx + rx} ${cy} C${cx + rx * k} ${cy + ry * k} ${cx + rx * k} ${cy + ry * k} ${cx} ${cy + ry} C${cx - rx * k} ${cy + ry * k} ${cx - rx * k} ${cy + ry * k} ${cx - rx} ${cy} C${cx - rx * k} ${cy - ry * k} ${cx - rx * k} ${cy - ry * k} ${cx} ${cy - ry} Z`;
};

const COLLAGE = [
  { src: "/media/tram/audience.jpg", style: { gridColumn: "1", gridRow: "1" } },
  { src: "/media/tram/singer.jpg", style: { gridColumn: "1", gridRow: "2 / span 2", objectPosition: "50% 30%" } },
  { src: "/media/tram/mother-message.jpg", style: { gridColumn: "2", gridRow: "1 / span 2", objectPosition: "50% 35%" } },
  { src: "/media/tram/booth-visitors.jpg", style: { gridColumn: "2", gridRow: "3" } },
  { src: "/media/tram/sponsor-table.jpg", style: { gridColumn: "3", gridRow: "1" } },
  { src: "/media/tram/families-screening.jpg", style: { gridColumn: "3", gridRow: "2" } },
  { src: "/media/tram/main-stage.jpg", style: { gridColumn: "3", gridRow: "3" } },
];

export default function HomePage({ lang }: { lang: Lang }) {
  const d = DICT[lang];
  const h = d.home;
  return (
    <>
      <SiteHeader lang={lang} page="home" />
      <main id="main">
        <section id="top" className="hero">
          <div className="wrap">
            <div className="hero-text">
              <div className="eyebrow"><span className="sq" aria-hidden="true" />{h.eyebrow}</div>
              <h1>{h.name}</h1>
              <p className="tagline">{h.tagline}</p>
              <p className="subline">{h.subline}</p>
              <div className="ctas">
                <a className="btn btn-dark" href="#work">{h.ctaWork}</a>
                <a className="btn btn-light" href="#contact">{h.ctaContact}</a>
              </div>
              <div className="avail"><span className="dot" aria-hidden="true" /><span>{h.available}</span></div>
            </div>
            <div className="portrait-wrap">
              <img className="portrait" src="/media/home/portrait.jpg" alt={h.portraitAlt} width={1200} height={1500} fetchPriority="high" />
              <div className="butterfly" aria-hidden="true">
                <img src="/media/deco/butterfly.png" alt="" />
                <svg viewBox="0 0 168 168" width="168" height="168">
                  <g fill="#5F7BA6" opacity="0.85">
                    <path className="sparkle" d={SPARKLE(14, 46, 7, 12)} />
                    <path className="sparkle" d={SPARKLE(158, 120, 6, 10)} />
                    <path className="sparkle" d={SPARKLE(134, 10, 4, 7)} />
                    <path className="sparkle" d={SPARKLE(44, 150, 4, 7)} />
                    <circle cx="24" cy="80" r="3" />
                    <circle cx="160" cy="70" r="2.4" />
                    <circle cx="118" cy="160" r="2.2" />
                    <circle cx="62" cy="14" r="1.8" />
                  </g>
                  <g fill="#FFFFFF" opacity="0.9">
                    <circle cx="14" cy="46" r="1.2" />
                    <circle cx="158" cy="120" r="1" />
                  </g>
                </svg>
              </div>
              <div className="hero-badge">
                <svg className="ring" viewBox="0 0 120 120" width="116" height="116" role="img" aria-label={h.badge}>
                  <defs><path id="heroBadgeCircle" d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" /></defs>
                  <text style={{ fontFamily: "Montserrat, sans-serif", fontSize: lang === "vi" ? 8.2 : 9.5, fontWeight: 600, letterSpacing: "0.16em", fill: "#46616F" }}>
                    <textPath href="#heroBadgeCircle" textLength="272" lengthAdjust="spacing">{h.badge}</textPath>
                  </text>
                </svg>
                <span className="play" aria-hidden="true"><PlayIcon size={14} color="#FFFFFF" /></span>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="about-h" className="bg-beige about">
          <div className="wrap">
            <div className="about-text reveal">
              <Label id="about-h">{h.aboutLabel}</Label>
              <p>{h.about}</p>
            </div>
            <div className="strengths">
              {h.strengths.map((s, k) => (
                <div className="strength reveal" key={s.title} style={{ transitionDelay: `${k * 80}ms` }}>
                  <span className="num">{String(k + 1).padStart(2, "0")}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" aria-labelledby="exp-h" className="bg-white exp">
          <div className="wrap section">
            <div className="exp-col">
              <Label id="exp-h">{h.experienceLabel}</Label>
              <article className="exp-card tinted reveal">
                <div className="exp-top"><h3>{h.htv.company}</h3><span className="dates">{h.htv.dates}</span></div>
                <p className="role">{h.htv.role}</p>
                <ul className="bullets">{h.htv.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <Video className="exp-media" src="/media/htv/behind-the-scenes.mp4" title={h.htv.videoTitle} cover="/media/htv/program-monitor.jpg" badge={h.htv.videoBadge} playLabel={d.ui.play} />
                <div className="row">
                  <span className="chip">{h.htv.score}</span>
                  <Link className="text-link" href={PATHS.htv[lang]}>{h.htv.link}</Link>
                </div>
              </article>
              <article className="exp-card tinted reveal">
                <div className="exp-top"><h3>{h.studentVideo.company}</h3><span className="dates">{h.studentVideo.dates}</span></div>
                <p className="role">{h.studentVideo.role}</p>
                <ul className="bullets">{h.studentVideo.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <a className="text-link" style={{ paddingTop: 0 }} href={VIDEOS.studentVideo} target="_blank" rel="noopener">{h.studentVideo.link}</a>
              </article>
            </div>
            <div className="edu-col">
              <Label>{h.educationLabel}</Label>
              <div className="edu-block reveal">
                <h3>{h.school}</h3>
                <p>{h.degree}<br />{h.degreeStatus}</p>
                <ul className="edu-list">{h.eduPoints.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
              <div className="edu-block reveal">
                <h3 className="small-caps">{h.languagesLabel}</h3>
                <div className="tags">{h.languages.map((l) => <span className="tag tag-lg tag-white" key={l}>{l}</span>)}</div>
              </div>
              <div className="edu-block reveal">
                <h3 className="small-caps">{h.awardsLabel}</h3>
                <ul className="edu-list" style={{ marginTop: 0 }}>{h.awards.map((a) => <li key={a}>{a}</li>)}</ul>
              </div>
            </div>
          </div>
        </section>

        <section id="work" aria-labelledby="work-h" className="bg-beige">
          <div className="wrap section stack gap-40">
            <div className="stack gap-14 reveal">
              <Label id="work-h">{h.workLabel}</Label>
              <p className="serif-title">{h.workTitle}</p>
            </div>

            <Link href={PATHS.tram[lang]} className="work-card on-beige reveal">
              <div className="collage zoom">
                {COLLAGE.map((c, k) => (
                  <img key={c.src} src={c.src} alt={d.tram.collageAlt[k]} style={c.style} loading="lazy" />
                ))}
              </div>
              <div className="work-body">
                <div className="tags">{h.tram.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
                <h3>{h.tram.title}</h3>
                <p className="work-summary">{h.tram.summary}</p>
                <p className="work-role">{h.tram.role}</p>
                <div className="mini-stats">
                  {h.tram.stats.map((s) => <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}
                </div>
                <span className="cta-text">{d.ui.viewCaseStudy}</span>
              </div>
            </Link>

            <Link href={PATHS.dirtycoins[lang]} className="work-card outlined reveal">
              <div className="work-body">
                <div className="tags">{h.dirtycoins.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
                <h3>{h.dirtycoins.title}</h3>
                <p className="work-summary">{h.dirtycoins.summary}</p>
                <p className="work-role">{h.dirtycoins.role}</p>
                <span className="cta-text">{d.ui.viewCaseStudy}</span>
              </div>
              <div className="zoom" style={{ flex: "1 1 420px", minWidth: 0 }}>
                <img className="cover-img" src="/media/dirtycoins/home-cover.jpg" alt={h.dirtycoins.imageAlt} loading="lazy" />
              </div>
            </Link>
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-h" className="bg-white">
          <div className="wrap section stack gap-36">
            <Label id="skills-h">{h.skillsLabel}</Label>
            <div className="skills-grid">
              {h.skillGroups.map((g) => (
                <div className="skill-group reveal" key={g.title}>
                  <h3>{g.title}</h3>
                  <div className="tags">{g.items.map((s) => <span className="tag tag-lg" key={s}>{s}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="other" aria-labelledby="other-h" className="bg-beige">
          <div className="wrap section stack gap-36" style={{ paddingTop: 88 }}>
            <div className="stack gap-14 reveal">
              <Label id="other-h">{h.otherLabel}</Label>
              <p className="serif-title">{h.otherTitle}</p>
            </div>
            <div className="media-row reveal">
              <Video className="media-main" r2={R2_VIDEOS.mv} driveUrl={VIDEOS.mvDrive} title={h.mv.title} cover="/media/other/cu-tho-di.jpg" badge={h.mv.badge} playLabel={d.ui.play} driveLabel={d.ui.watchOnDrive} />
              <div className="media-text">
                <span className="meta">{h.mv.meta}</span>
                <h3>{h.mv.title}</h3>
                <p>{h.mv.summary}</p>
                <p className="role-line"><strong>{h.mv.roleLabel}</strong> {h.mv.role}</p>
                <div className="tags">{h.mv.tags.map((t) => <span className="tag tag-white" key={t}>{t}</span>)}</div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-h" className="bg-dark contact">
          <div className="wrap">
            <div className="contact-top reveal">
              <div className="stack" style={{ flex: "1 1 520px", minWidth: 0, gap: 18 }}>
                <Label id="contact-h" light>{h.contactLabel}</Label>
                <p className="contact-title">{h.contactTitle}</p>
              </div>
              <div className="row" style={{ gap: 12 }}>
                <a className="btn btn-beige" href={`mailto:${CONTACT.email}`}>{h.emailMe}</a>
                <a className="btn btn-outline-white" href={CONTACT.cv} download>{d.ui.downloadCv}</a>
              </div>
            </div>
            <div className="contact-grid">
              <div><span className="k">{h.emailLabel}</span><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
              <div><span className="k">{h.facebookLabel}</span><a href={CONTACT.facebook} target="_blank" rel="noopener">{CONTACT.facebookLabel}</a></div>
              <div><span className="k">{h.basedLabel}</span><span className="v">{h.based}</span></div>
            </div>
            <div className="footer-line">
              <span className="logo-word">Bích Thủy</span>
              <span>© 2026 Trần Bích Thủy</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
