"use client";
import { useState } from "react";
import { PlayIcon } from "./Icons";

// Shows a cover image first; the YouTube player loads only after the visitor presses play.
export default function YouTube({ id, title, cover, badge, playLabel, big = false }: { id: string; title: string; cover: string; badge?: string; playLabel: string; big?: boolean }) {
  const [on, setOn] = useState(false);
  if (on) {
    return (
      <div className={big ? "video-frame big" : "video-frame"}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <button type="button" className={big ? "video-frame big" : "video-frame"} onClick={() => setOn(true)} aria-label={`${playLabel}: ${title}`}>
      <img className="cover" src={cover} alt="" loading="lazy" />
      {badge ? <span className={big ? "badge badge-lg" : "badge"}>{badge}</span> : null}
      <span className="play-overlay">
        <span className={big ? "play-btn lg" : "play-btn"}><PlayIcon size={big ? 24 : 22} /></span>
      </span>
    </button>
  );
}
