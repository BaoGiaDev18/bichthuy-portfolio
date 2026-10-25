import Link from "next/link";
import { DICT, PATHS, type Lang, type PageKey } from "../content/site";

export default function PageNav({ lang, next, nextTitle, nextKind = "project" }: { lang: Lang; next: PageKey; nextTitle: string; nextKind?: "project" | "work" }) {
  const t = DICT[lang].ui;
  return (
    <section className="bg-beige page-nav">
      <div className="wrap">
        <Link href={PATHS.home[lang]} className="back-link">{t.backHome}</Link>
        <Link href={PATHS[next][lang]} className="next-link">
          <span className="k">{nextKind === "project" ? t.nextProject : t.seeMyWork}</span>
          <span className="v">{nextTitle} →</span>
        </Link>
      </div>
    </section>
  );
}
