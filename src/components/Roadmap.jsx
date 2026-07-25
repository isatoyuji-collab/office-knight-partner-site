const milestones = [
  { year: "2026", label: "予約システム・パートナーサイト公開" },
  { year: "2027", label: "StageSync β版リリース" },
  { year: "2028", label: "関西エンタメネットワーク構築" },
  { year: "将来", label: "関西発のエンタメプラットフォームへ" },
];

export default function Roadmap() {
  return (
    <section className="bg-ink text-paper px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        <p className="text-[13px] tracking-[0.25em] text-gold mb-4">ROADMAP</p>
        <h2 className="font-display text-3xl md:text-4xl mb-16">
          これから目指す未来
        </h2>
        <div className="space-y-0">
          {milestones.map((m, i) => (
            <div
              key={m.year}
              className="flex gap-6 md:gap-10 border-t border-paper/15 py-8 first:border-t-0"
            >
              <p className="font-display text-2xl md:text-3xl text-gold-soft w-20 md:w-28 shrink-0">
                {m.year}
              </p>
              <p className="text-paper/80 text-lg font-light pt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}