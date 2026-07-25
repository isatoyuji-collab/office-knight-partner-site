const items = ["予約システム", "コンテンツサイト"];

export default function DevStatus() {
  return (
    <section className="bg-ivory px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <p className="text-[13px] tracking-[0.25em] text-gold mb-6">CURRENT DEVELOPMENT</p>
        <h2 className="font-display text-3xl text-ink mb-8">現在開発中のもの</h2>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-3 text-ink-soft">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              {item}
              <span className="text-[11px] tracking-[0.1em] text-gold border border-gold/40 px-2 py-0.5 ml-1">
                開発中
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
