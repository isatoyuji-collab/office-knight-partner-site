const merits = [
  "関西エンタメとの接点",
  "地域文化への貢献",
  "新規事業への参画",
  "イベントとの連携",
  "AI・DXプロジェクトへの参加",
  "新しいエンタメ市場への挑戦",
];

export default function Merits() {
  return (
    <section className="bg-ivory px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <p className="text-[13px] tracking-[0.25em] text-gold mb-4">
          WHAT YOU GAIN
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-14">
          office Knightと共創するメリット
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
          {merits.map((m) => (
            <div key={m} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
              <p className="text-ink-soft">{m}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}