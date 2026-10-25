import { DICT, VIDEOS, type Lang } from "../../content/site";
import SiteHeader from "../SiteHeader";
import Label from "../Label";
import Facts from "../Facts";
import DidList from "../DidList";
import Gallery from "../Gallery";
import PageNav from "../PageNav";

const PHOTOS = [
  { src: "/media/htv/hosts-wide.jpg", cls: "span-col-2" },
  { src: "/media/htv/hosts-lights.jpg", cls: "span-row-2" },
  { src: "/media/htv/studio-cameras.jpg" },
  { src: "/media/htv/program-monitor.jpg" },
  { src: "/media/htv/viewfinder.jpg" },
  { src: "/media/htv/teleprompter.jpg", cls: "span-col-2" },
];

export default function HtvPage({ lang }: { lang: Lang }) {
  const d = DICT[lang];
  const t = d.htv;
  return (
    <>
      <SiteHeader lang={lang} page="htv" />
      <main id="main">
        <section className="wrap page-hero">
          <div className="eyebrow"><span className="sq" aria-hidden="true" />{t.eyebrow}</div>
          <h1>{t.title}</h1>
          <p>{t.summary}</p>
        </section>
        <section className="wrap">
          <div className="video-frame big" style={{ cursor: "default" }}>
            <span className="badge badge-lg">{t.videoBadge}</span>
            <video controls playsInline preload="metadata" poster="/media/htv/bts-cover.jpg" src="/media/htv/behind-the-scenes.mp4" aria-label={t.videoLabel} />
          </div>
        </section>
        <Facts items={t.facts} />

        <section aria-labelledby="did-h" className="bg-beige did">
          <div className="wrap">
            <div className="did-intro reveal">
              <Label id="did-h">{t.didLabel}</Label>
              <p className="serif-sub">{t.didTitle}</p>
              <p className="note">{t.feedback}</p>
              <div className="tags" style={{ marginTop: 4 }}>{t.tools.map((x) => <span className="tag tag-lg tag-white" key={x}>{x}</span>)}</div>
            </div>
            <DidList items={t.did} />
          </div>
        </section>

        <section aria-labelledby="gal-h" className="wrap gallery-sec" style={{ paddingBottom: 56 }}>
          <div className="head-row">
            <Label id="gal-h">{t.galleryLabel}</Label>
            <span className="hint">{d.ui.clickPhoto}</span>
          </div>
          <Gallery
            title={t.galleryLabel}
            gridClass="gallery-3"
            photos={PHOTOS.map((p, k) => ({ ...p, alt: t.photos[k] }))}
            labels={{ open: d.ui.clickPhoto, close: d.ui.close, prev: d.ui.prev, next: d.ui.next }}
          />
        </section>

        <section aria-labelledby="ojt-h" className="wrap journal">
          <div className="journal-card reveal">
            <div className="txt">
              <Label id="ojt-h" light>{t.journalLabel}</Label>
              <p>{t.journalTitle}</p>
            </div>
            <a className="btn btn-light" style={{ borderColor: "#fff" }} href={VIDEOS.ojtJournal} target="_blank" rel="noopener">{t.journalButton}</a>
          </div>
        </section>
      </main>
      <PageNav lang={lang} next="tram" nextTitle="Trạm Chuyển Lời Nhà" nextKind="work" />
    </>
  );
}
