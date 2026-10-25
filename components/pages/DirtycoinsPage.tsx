import { DICT, VIDEOS, type Lang } from "../../content/site";
import SiteHeader from "../SiteHeader";
import Label from "../Label";
import Facts from "../Facts";
import DidList from "../DidList";
import Gallery from "../Gallery";
import YouTube from "../YouTube";
import PageNav from "../PageNav";

const PHOTOS = [
  "graffiti-jerseys", "bridge", "blue-jersey", "headphones", "store", "opera-house", "night-phone", "bus-stop",
].map((n) => `/media/dirtycoins/${n}.jpg`);

export default function DirtycoinsPage({ lang }: { lang: Lang }) {
  const d = DICT[lang];
  const t = d.dirtycoins;
  return (
    <>
      <SiteHeader lang={lang} page="dirtycoins" />
      <main id="main">
        <section className="wrap page-hero">
          <div className="eyebrow"><span className="sq" aria-hidden="true" />{t.eyebrow}</div>
          <h1>{t.title}</h1>
          <p>{t.summary}</p>
        </section>
        <section className="wrap">
          <YouTube id={VIDEOS.dirtycoins} title={t.title} cover="/media/dirtycoins/opera-house.jpg" badge={t.videoBadge} playLabel={d.ui.play} big />
        </section>
        <Facts items={t.facts} />

        <section aria-labelledby="did-h" className="bg-beige did coins">
          <div className="wrap">
            <div className="did-intro reveal">
              <Label id="did-h">{t.didLabel}</Label>
              <p className="serif-sub">{t.didTitle}</p>
            </div>
            <DidList items={t.did} />
          </div>
        </section>

        <section aria-labelledby="gal-h" className="wrap gallery-sec">
          <div className="head-row">
            <Label id="gal-h">{t.galleryLabel}</Label>
            <span className="hint">{d.ui.clickPhoto}</span>
          </div>
          <Gallery
            title={t.galleryLabel}
            gridClass="gallery-169"
            photos={PHOTOS.map((src, k) => ({ src, alt: t.photos[k] }))}
            labels={{ open: d.ui.clickPhoto, close: d.ui.close, prev: d.ui.prev, next: d.ui.next }}
          />
        </section>
      </main>
      <PageNav lang={lang} next="tram" nextTitle="Trạm Chuyển Lời Nhà" />
    </>
  );
}
