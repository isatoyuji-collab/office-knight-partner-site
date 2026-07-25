export default function SupportCTA() {
  return (
    <section className="bg-ivory border-t border-line px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <p className="text-[13px] tracking-[0.25em] text-gold mb-4">
          HOW TO SUPPORT
        </p>
        <h2 className="font-display text-2xl md:text-3xl text-ink mb-10">
          応援について、詳しく知りたい方はこちら
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          <a
            href="/support"
            className="bg-paper border border-line p-7 hover:border-gold transition-colors duration-300"
          >
            <p className="text-[12px] tracking-[0.15em] text-gold mb-2">
              CONTINUOUS
            </p>
            <p className="font-display text-xl text-ink mb-2">
              Support Member
            </p>
            <p className="text-sm text-ink-soft leading-relaxed">
              月額で、office Knightの活動全体を継続的に応援する制度です。
            </p>
          </a>
          <a
            href="/one-support"
            className="bg-paper border border-line p-7 hover:border-gold transition-colors duration-300"
          >
            <p className="text-[12px] tracking-[0.15em] text-gold mb-2">
              ONE-TIME
            </p>
            <p className="font-display text-xl text-ink mb-2">One Support</p>
            <p className="text-sm text-ink-soft leading-relaxed">
              特定の公演・イベント・プロジェクトを、都度応援する制度です。
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
