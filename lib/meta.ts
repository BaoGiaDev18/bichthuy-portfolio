import type { Metadata } from "next";
import { DICT, PATHS, type Lang, type PageKey } from "../content/site";

export const SITE_URL = "https://bichthuyportfolio.vercel.app";

const PAGE_TITLES: Record<PageKey, Record<Lang, string | null>> = {
  home: { en: null, vi: null },
  tram: { en: "Trạm Chuyển Lời Nhà", vi: "Trạm Chuyển Lời Nhà" },
  dirtycoins: { en: "DirtyCoins Lookbook", vi: "DirtyCoins Lookbook" },
  htv: { en: "HTV internship", vi: "Thực tập tại HTV" },
};

export function pageMeta(lang: Lang, page: PageKey): Metadata {
  const m = DICT[lang].meta;
  const sub = PAGE_TITLES[page][lang];
  const title = sub ? `${sub} · Trần Bích Thủy` : m.title;
  const url = PATHS[page][lang];
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description: m.description,
    alternates: { canonical: url, languages: { en: PATHS[page].en, vi: PATHS[page].vi } },
    openGraph: {
      type: "website",
      url,
      title,
      description: m.description,
      siteName: "Trần Bích Thủy · Portfolio",
      locale: lang === "vi" ? "vi_VN" : "en_US",
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Trần Bích Thủy · Content Creator" }],
    },
    twitter: { card: "summary_large_image", title, description: m.description, images: ["/og.jpg"] },
    icons: {
      icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon-192.png", type: "image/png", sizes: "192x192" }],
      apple: "/apple-icon.png",
    },
    robots: { index: true, follow: true },
  };
}
