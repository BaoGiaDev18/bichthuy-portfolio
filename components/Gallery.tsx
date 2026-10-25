"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronIcon, CloseIcon } from "./Icons";

export type Photo = { src: string; alt: string; cls?: string };

export default function Gallery({ photos, title, gridClass, labels }: { photos: Photo[]; title: string; gridClass: string; labels: { open: string; close: string; prev: string; next: string } }) {
  const [i, setI] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const n = photos.length;

  const close = useCallback(() => {
    setI(null);
    lastFocus.current?.focus();
  }, []);
  const go = useCallback((d: number) => setI((v) => (v === null ? v : (v + d + n) % n)), [n]);

  useEffect(() => {
    if (i === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [i, close, go]);

  return (
    <>
      <div className={`gallery ${gridClass}`}>
        {photos.map((p, k) => (
          <button
            key={p.src}
            type="button"
            className={`tile ${p.cls ?? ""}`}
            aria-label={`${labels.open}: ${p.alt}`}
            onClick={(e) => {
              lastFocus.current = e.currentTarget;
              setI(k);
            }}
          >
            <img src={p.src} alt={p.alt} loading="lazy" />
          </button>
        ))}
      </div>
      {i !== null ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={title} onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
          <div className="lb-top">
            <span>{title}</span>
            <button ref={closeRef} type="button" className="circle-btn" onClick={close} aria-label={labels.close}><CloseIcon /></button>
          </div>
          <div className="lb-mid">
            <button type="button" className="circle-btn" onClick={() => go(-1)} aria-label={labels.prev}><ChevronIcon dir="left" /></button>
            <img key={photos[i].src} src={photos[i].src} alt={photos[i].alt} />
            <button type="button" className="circle-btn" onClick={() => go(1)} aria-label={labels.next}><ChevronIcon dir="right" /></button>
          </div>
          <span className="lb-count">{i + 1} / {n}</span>
        </div>
      ) : null}
    </>
  );
}
