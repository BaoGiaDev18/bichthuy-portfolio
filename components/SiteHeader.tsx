import Link from "next/link";
import { CONTACT, DICT, PATHS, type Lang, type PageKey } from "../content/site";

export default function SiteHeader({ lang, page }: { lang: Lang; page: PageKey }) {
  const t = DICT[lang].ui;
  const home = PATHS.home[lang];
  return (
    <header className="site-header" data-header>
      <a className="skip" href="#main">{t.skipToContent}</a>
      <div className="wrap">
        <Link href={home} className="logo" aria-label="Portfolio · Trần Bích Thủy">
          <span className="logo-word">Portfolio</span>
          <span className="sq sq-sm" aria-hidden="true" />
        </Link>
        {page === "home" ? (
          <nav className="nav" aria-label="Main">
            <a href="#work">{t.nav.work}</a>
            <a href="#experience">{t.nav.experience}</a>
            <a href="#skills">{t.nav.skills}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
        ) : (
          <Link href={`${home}#work`} className="back-link">{t.allWork}</Link>
        )}
        <div className="header-tools">
          <div className="lang" role="group" aria-label={t.languageLabel}>
            <Link href={PATHS[page].en} hrefLang="en" aria-current={lang === "en" ? "true" : undefined}>EN</Link>
            <Link href={PATHS[page].vi} hrefLang="vi" aria-current={lang === "vi" ? "true" : undefined}>VI</Link>
          </div>
          <a className="btn btn-light btn-sm" href={CONTACT.cv} download>{t.downloadCv}</a>
        </div>
      </div>
    </header>
  );
}
