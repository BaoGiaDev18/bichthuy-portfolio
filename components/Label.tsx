import type { ReactNode } from "react";

export default function Label({ id, children, light = false, as = "h2" }: { id?: string; children: ReactNode; light?: boolean; as?: "h2" | "div" }) {
  const Tag = as;
  return (
    <Tag id={id} className={light ? "label label-light" : "label"}>
      <span className="sq" aria-hidden="true" />
      {children}
    </Tag>
  );
}
