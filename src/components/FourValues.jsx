import { PenTool, Settings2, Link2, Mic2 } from "lucide-react";

const values = [
  {
    Icon: PenTool,
    en: "CREATE",
    title: "創る。",
    body: "舞台・イベントを企画・制作・プロデュースし、新しい挑戦が生まれるきっかけを創ります。",
  },
  {
    Icon: Settings2,
    en: "SUPPORT",
    title: "支える。",
    body: "システム・AI・DXを活用し、クリエイターや運営スタッフが本来の創作に集中できる環境を支えます。",
  },
  {
    Icon: Link2,
    en: "CONNECT",
    title: "繋ぐ。",
    body: "企業・出演者・スタッフ・地域・お客様。新しい共創が生まれる環境をつくります。",
  },
  {
    Icon: Mic2,
    en: "PRESENT",
    title: "発表する。",
    body: "挑戦には、発表する場所が必要です。舞台・イベントを通じて、挑戦の成果を届ける場所を創出します。挑戦が次の挑戦につながる循環を目指します。",
  },
];

export default function FourValues() {
  return (
    <section className="bg-paper">
      {values.map((v, i) => (
        <div
          key={v.title}
          className={
            "px-6 md:px-12 py-24 md:py-36 border-t border-line " +
            (i % 2 === 1 ? "bg-ivory" : "bg-paper")
          }
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-[13px] tracking-[0.25em] text-gold mb-6">
              {String(i + 1).padStart(2, "0")} / {v.en}
            </p>
            <div className="flex items-start gap-6">
              <span className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-gold/40 flex items-center justify-center shrink-0">
                <v.Icon className="w-6 h-6 md:w-7 md:h-7 text-gold" strokeWidth={1.25} />
              </span>
              <div>
                <h3 className="font-display text-3xl md:text-4xl text-ink mb-4">
                  {v.title}
                </h3>
                <p className="text-ink-soft leading-relaxed text-lg font-light max-w-xl">
                  {v.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}