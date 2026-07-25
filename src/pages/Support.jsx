import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import JourneyPreview from "../components/JourneyPreview";
import { supportPlans } from "../data";

export default function Support() {
  return (
    <div className="font-sans">
      <Hero
        eyebrow="OFFICE KNIGHT SUPPORT MEMBER"
        lines={["共に、", "歴史を積み重ねる。"]}
        lead="office Knight Support Memberは、月額でoffice Knightの活動全体を継続的に応援する制度です。支援金額の大きさではなく、参加・応援・継続によって、あなたとoffice Knightの歩みがJourneyとして積み重なっていきます。"
        ctas={[
          { href: "#plans", label: "プランを見る" },
          { href: "/one-support", label: "One Supportはこちら" },
        ]}
      />

      <section className="bg-paper px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <p className="text-[13px] tracking-[0.25em] text-gold mb-6">
            OUR PHILOSOPHY
          </p>
          <p className="text-lg md:text-xl leading-relaxed font-light text-ink-soft">
            金額によって物理的な特典が増えるのではなく、「持てる権利」「参加できる範囲」が広がる設計にしています。あなたは、office
            Knightの活動を一緒に育てるパートナーです。
          </p>
        </div>
      </section>

      <section id="plans" className="bg-ivory border-t border-line px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <p className="text-[13px] tracking-[0.25em] text-gold mb-4">PLANS</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-14">
            会員プラン
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportPlans.map((p) => (
              <div
                key={p.name}
                className="flex flex-col p-7 bg-paper text-ink border border-line"
              >
                <p className="text-[13px] tracking-[0.15em] mb-2 text-gold">
                  {p.name.toUpperCase()}
                </p>
                <p className="font-display text-3xl mb-6">
                  {p.price}
                  <span className="text-sm font-sans font-light ml-1">/月</span>
                </p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {p.rights.map((r) => (
                    <li key={r} className="text-sm leading-relaxed flex gap-2">
                      <span className="text-gold">—</span>
                      <span className="text-ink-soft">{r}</span>
                    </li>
                  ))}
                </ul>
                {p.note && (
                  <p className="text-xs leading-relaxed mb-6 text-ink-soft/60">
                    {p.note}
                  </p>
                )}
                <a
                  href={`/support?plan=${encodeURIComponent(p.name)}#contact`}
                  className="text-center text-[13px] tracking-[0.1em] py-3 border border-ink/20 text-ink hover:border-gold hover:text-gold transition-colors duration-300"
                >
                  このプランで申し込む
                </a>
              </div>
            ))}
          </div>

          <p className="text-sm text-ink-soft/60 mt-10 max-w-xl">
            年払いプランもご用意しています（2ヶ月分お得）。年払いプランを途中で解約された場合、残り期間分は現金での返金は行わず、以降のOne Supportまたは他プランへの支援としてクレジット（充当）いたします。詳細はお問い合わせください。
          </p>
        </div>
      </section>

      <JourneyPreview />

      <Contact defaultCategory="個人" />
      <Footer />
    </div>
  );
}
