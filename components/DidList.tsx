export default function DidList({ items }: { items: string[] }) {
  return (
    <ol className="did-list">
      {items.map((t, k) => (
        <li key={k} className="reveal"><span className="num">{String(k + 1).padStart(2, "0")}</span><span>{t}</span></li>
      ))}
    </ol>
  );
}
