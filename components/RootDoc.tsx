import type { ReactNode } from "react";
import Motion from "./Motion";
import type { Lang } from "../content/site";

const FONTS =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&family=Dancing+Script:wght@600&family=Montserrat:wght@300;400;500;600&family=Open+Sans:wght@400;500;600&display=swap";

export default function RootDoc({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={FONTS} />
      </head>
      <body>
        {children}
        <Motion />
      </body>
    </html>
  );
}
