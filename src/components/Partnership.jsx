const ways = ["スポンサー", "共同開発", "技術協力", "イベント共催", "サービス連携"];

export default function Partnership() {
  return (
    <section className="bg-paper px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        <p className="text-[13px] tracking-[0.25em] text-gold mb-6">
          CO-CREATION
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-8">
          共創・パートナーシップ
        </h2>
        <p className="text-ink-soft leading-relaxed text-lg font-light mb-10">
          私たちが求めているのは「協賛」ではなく、一緒に新しい価値を創ってくださる仲間です。関わり方は一つではありません。
        </p>
        <div className="flex flex-wrap gap-3">
          {ways.map((w) => (
            <span
              key={w}
              className="text-sm border border-gold/40 text-ink px-4 py-2"
            >
              {w}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}