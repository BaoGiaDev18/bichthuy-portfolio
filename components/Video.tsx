"use client";
import { useRef, useState } from "react";
import { MEDIA_BASE } from "../content/site";
import { PlayIcon } from "./Icons";
import YouTube from "./YouTube";

type Sources = { hd: string; sd?: string };

// Picks the lighter 720p file on phones and slow connections, 1080p elsewhere.
function pickSource(src: Sources) {
  if (!src.sd) return src.hd;
  const nav = navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } };
  const slow = nav.connection?.saveData || /(^|-)2g|3g/.test(nav.connection?.effectiveType ?? "");
  return slow || window.innerWidth < 820 ? src.sd : src.hd;
}

export default function Video({
  r2, youtubeId, driveUrl, title, cover, badge, playLabel, driveLabel, big = false, className = "",
}: {
  r2?: Sources; youtubeId?: string; driveUrl?: string; title: string; cover: string; badge?: string;
  playLabel: string; driveLabel?: string; big?: boolean; className?: string;
}) {
  const [on, setOn] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);
  const frame = `${big ? "video-frame big" : "video-frame"} ${className}`.trim();

  // Cloudflare R2: play the file directly in the page.
  if (MEDIA_BASE && r2) {
    if (on) {
      return (
        <div className={frame} style={{ cursor: "default" }}>
          {badge ? <span className={big ? "badge badge-lg" : "badge"}>{badge}</span> : null}
          <video ref={ref} controls autoPlay playsInline preload="auto" poster={cover} src={`${MEDIA_BASE}/${pickSource(r2)}`} aria-label={title} />
        </div>
      );
    }
    return (
      <button type="button" className={frame} onClick={() => setOn(true)} aria-label={`${playLabel}: ${title}`}>
        <img className="cover" src={cover} alt="" loading="lazy" />
        {badge ? <span className={big ? "badge badge-lg" : "badge"}>{badge}</span> : null}
        <span className="play-overlay"><span className={big ? "play-btn lg" : "play-btn"}><PlayIcon size={big ? 24 : 22} /></span></span>
      </button>
    );
  }

  // Fallbacks while R2 is not set up yet.
  if (youtubeId) {
    return <div className={className}><YouTube id={youtubeId} title={title} cover={cover} badge={badge} playLabel={playLabel} big={big} /></div>;
  }
  return (
    <a className={frame} href={driveUrl} target="_blank" rel="noopener" aria-label={title}>
      <img className="cover" src={cover} alt="" loading="lazy" />
      {badge ? <span className="badge">{badge}</span> : null}
      <span className="play-overlay">
        <span className="play-btn"><PlayIcon /></span>
        {driveLabel ? <span className="play-note">{driveLabel}</span> : null}
      </span>
    </a>
  );
}
