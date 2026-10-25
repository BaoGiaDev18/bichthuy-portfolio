export default function Facts({ items }: { items: string[][] }) {
  return (
    <div className="wrap facts-wrap">
      <dl className="facts reveal">
        {items.map(([k, v]) => (
          <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
        ))}
      </dl>
    </div>
  );
}
