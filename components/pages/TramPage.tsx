import { DICT, R2_VIDEOS, VIDEOS, type Lang } from "../../content/site";
import SiteHeader from "../SiteHeader";
import Label from "../Label";
import Facts from "../Facts";
import DidList from "../DidList";
import Gallery from "../Gallery";
import Video from "../Video";
import PageNav from "../PageNav";

const PHOTOS = [
  { src: "/media/tram/mother-message.jpg", cls: "span-row-2" },
  { src: "/media/tram/audience.jpg" },
  { src: "/media/tram/father-message.jpg", cls: "span-row-2" },
  { src: "/media/tram/sponsor-table.jpg" },
  { src: "/media/tram/singer.jpg", cls: "span-row-2" },
  { src: "/media/tram/families-screening.jpg" },
  { src: "/media/tram/photo-booth.jpg" },
  { src: "/media/tram/booth-visitors.jpg" },
  { src: "/media/tram/main-stage.jpg" },
];
const CHARTS = ["/media/tram/chart-followers.jpg", "/media/tram/chart-views.jpg", "/media/tram/chart-viewers.jpg"];
const CLIPS = [
  { key: "10", cls: "tall", ratio: "9 / 16" },
  { key: "3", cls: "wide", ratio: "16 / 9" },
  { key: "6", cls: "wide", ratio: "16 / 9" },
];

function GroupHead({ num, label, sub }: { num: string; label: string; sub: string }) {
  return (
    <div className="group-head">
      <span className="num">{num}</span>
      <h3>{label}</h3>
      <span className="sub">{sub}</span>
    </div>
  );
}

export default function TramPage({ lang }: { lang: Lang }) {
  const d = DICT[lang];
  const t = d.tram;
  const clipNo = (k: string) => t.social.items.find((i) => i.no.endsWith(` ${k}`))?.no ?? k;
  return (
    <>
      <SiteHeader lang={lang} page="tram" />
      <main id="main">
        <section className="wrap page-hero">
          <div className="eyebrow"><span className="sq" aria-hidden="true" />{t.eyebrow}</div>
          <h1>{t.title}</h1>
          <p>{t.summary}</p>
        </section>
        <section className="wrap">
          <img className="hero-photo" src="/media/tram/main-stage.jpg" alt={t.heroAlt} fetchPriority="high" />
        </section>
        <Facts items={t.facts} />

        <section aria-labelledby="did-h" className="bg-beige did">
          <div className="wrap">
            <div className="did-intro reveal">
              <Label id="did-h">{t.didLabel}</Label>
              <p className="serif-sub">{t.didTitle}</p>
            </div>
            <DidList items={t.did} />
          </div>
        </section>

        <section aria-labelledby="proc-h" className="wrap process">
          <img className="deco-vine" src="/media/deco/butterfly-vine.png" alt="" aria-hidden="true" />
          <Label id="proc-h">{t.processLabel}</Label>
          <ol className="steps">
            {t.steps.map((s, k) => (
              <li key={s} className="reveal" style={{ transitionDelay: `${k * 60}ms` }}>
                <span className="k">{t.stepLabel} {k + 1}</span>
                <span className="v">{s}</span>
              </li>
            ))}
          </ol>
          <img className="deco-pair" src="/media/deco/butterfly-pair.png" alt="" aria-hidden="true" />
        </section>

        <section aria-labelledby="vid-h" className="wrap stack gap-56" style={{ paddingTop: 56, paddingBottom: 72 }}>
          <div className="head-row">
            <Label id="vid-h">{t.videosLabel}</Label>
            <span className="hint">{t.videosHint}</span>
          </div>

          <div className="stack gap-28">
            <GroupHead num="01" label={t.groups.film.label} sub={t.groups.film.title} />
            <div className="media-row reveal">
              <div className="media-main">
                <Video r2={R2_VIDEOS.film} youtubeId={VIDEOS.film} title={t.film.title} cover="/media/tram/film-cover.jpg" badge="Film" playLabel={d.ui.play} />
              </div>
              <div className="media-text">
                <span className="meta">{t.film.meta}</span>
                <h4>{t.film.title}</h4>
                <p>{t.film.text}</p>
              </div>
            </div>
          </div>

          <div className="stack gap-28">
            <GroupHead num="02" label={t.groups.event.label} sub={t.groups.event.title} />
            <div className="media-row reverse reveal">
              <div className="media-main">
                <Video r2={R2_VIDEOS.recap} youtubeId={VIDEOS.recap} title={t.recap.title} cover="/media/tram/recap-cover.jpg" badge="Recap" playLabel={d.ui.play} />
              </div>
              <div className="media-text">
                <span className="meta">{t.recap.meta}</span>
                <h4>{t.recap.title}</h4>
                <p>{t.recap.text}</p>
              </div>
            </div>
          </div>

          <div className="stack gap-28">
            <GroupHead num="03" label={t.groups.social.label} sub={t.groups.social.title} />
            <div className="media-row reveal">
              <div className="media-main social-grid">
                {CLIPS.map((c) => (
                  <div className={`clip ${c.cls}`} key={c.key}>
                    <span className="badge">{clipNo(c.key)}</span>
                    <video controls playsInline preload="metadata" poster={`/media/tram/don-hang-${c.key}.jpg`} src={`/media/tram/don-hang-${c.key}.mp4`} aria-label={clipNo(c.key)} />
                  </div>
                ))}
              </div>
              <div className="media-text">
                <span className="meta">{t.social.meta}</span>
                <h4>{t.social.title}</h4>
                <p>{t.social.text}</p>
                <ol className="clip-list">
                  {t.social.items.map((i) => (
                    <li key={i.no}><span className="meta">{i.no}</span><span>{i.title} <span className="len">· {i.length}</span></span></li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="res-h" className="bg-dark results">
          <div className="wrap">
            <Label id="res-h" light>{t.resultsLabel}</Label>
            <div className="big-stats">
              {t.stats.map((s, k) => (
                <div key={s.label} className="reveal" style={{ transitionDelay: `${k * 80}ms` }}><strong>{s.value}</strong><span>{s.label}</span></div>
              ))}
            </div>
            <p className="results-note">{t.resultsNote}</p>
            <div className="charts">
              {t.charts.map((c, k) => (
                <figure key={c.caption} className="reveal">
                  <img src={CHARTS[k]} alt={c.alt} loading="lazy" />
                  <figcaption>{c.caption}</figcaption>
                </figure>
              ))}
            </div>
            <a className="btn btn-beige" style={{ alignSelf: "flex-start" }} href={VIDEOS.tramFanpage} target="_blank" rel="noopener">{t.fanpage}</a>
          </div>
        </section>

        <section aria-labelledby="gal-h" className="wrap gallery-sec">
          <div className="head-row">
            <Label id="gal-h">{t.galleryLabel}</Label>
            <span className="hint">{d.ui.clickPhoto}</span>
          </div>
          <Gallery
            title={t.galleryLabel}
            gridClass="gallery-auto"
            photos={PHOTOS.map((p, k) => ({ ...p, alt: t.photos[k] }))}
            labels={{ open: d.ui.clickPhoto, close: d.ui.close, prev: d.ui.prev, next: d.ui.next }}
          />
        </section>
      </main>
      <PageNav lang={lang} next="dirtycoins" nextTitle="DirtyCoins Lookbook" />
    </>
  );
}
