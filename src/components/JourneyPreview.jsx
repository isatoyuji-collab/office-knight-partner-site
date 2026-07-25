export default function JourneyPreview() {
  return (
    <section className="bg-paper px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <p className="text-[13px] tracking-[0.25em] text-gold mb-4">
          MY PAGE PREVIEW
        </p>
        <h2 className="font-display text-2xl md:text-3xl text-ink mb-3">
          Journey・Achievementsについて
        </h2>
        <p className="text-ink-soft leading-relaxed mb-10">
          会員登録後は、マイページで自分だけのJourney（歩んできた軌跡）とAchievements（実績）を確認できるようになります。金額だけでなく、継続・参加・貢献によって記録が積み重なっていきます。
        </p>

        {/* Mock mypage preview */}
        <div className="bg-ink text-paper p-6 md:p-10">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-paper/15">
            <div className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center font-display text-lg text-gold-soft">
              岸
            </div>
            <div>
              <p className="font-display text-lg">岸根 勇人</p>
              <p className="text-xs text-paper/50">会員番号 No.0001</p>
            </div>
            <span className="ml-auto text-[11px] tracking-[0.1em] text-gold-soft border border-gold-soft/40 px-2 py-1">
              🤝 Partner
            </span>
          </div>

          <p className="text-[12px] tracking-[0.15em] text-gold-soft mb-3">
            JOURNEY
          </p>
          <div className="space-y-2 mb-8 text-sm text-paper/80">
            <p>2026　✓ Founder Member</p>
            <p>2026　✓ 秋の大笑会2026 One Support</p>
            <p>2026　✓ Stage Sync 初期メンバー</p>
          </div>

          <p className="text-[12px] tracking-[0.15em] text-gold-soft mb-3">
            ACHIEVEMENTS
          </p>
          <div className="flex flex-wrap gap-2">
            {["Founder", "Pioneer", "Stage Supporter", "Idea Creator"].map(
              (a) => (
                <span
                  key={a}
                  className="text-[11px] border border-paper/25 text-paper/70 px-2.5 py-1"
                >
                  {a}
                </span>
              )
            )}
          </div>
        </div>

        <p className="text-xs text-ink-soft/50 mt-4">
          ※上記はイメージです。実際のマイページ機能は準備中で、公開まで今しばらくお待ちください。
        </p>
      </div>
    </section>
  );
}
