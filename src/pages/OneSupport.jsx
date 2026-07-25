import { useState } from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { oneSupportAmounts, oneSupportProjects } from "../data";

export default function OneSupport() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="font-sans">
      <Hero
        eyebrow="ONE SUPPORT"
        lines={["この挑戦だけを、", "応援したい。"]}
        lead="One Supportは、office Knight全体ではなく、特定の公演・イベント・プロジェクトを都度応援する制度です。継続的な会員にならなくても、心から応援したい瞬間に、その気持ちを届けられます。"
        ctas={[
          { href: "#projects", label: "応援する" },
          { href: "/support", label: "Support Memberはこちら" },
        ]}
      />

      <section className="bg-paper px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <p className="text-[13px] tracking-[0.25em] text-gold mb-6">
            WHAT WE RECORD
          </p>
          <p className="text-lg md:text-xl leading-relaxed font-light text-ink-soft">
            大事にしているのは、支援金額ではなく「何を応援したか」です。One
            Supportでの応援は、金額に関わらずJourney（軌跡）に記録され、あなたが応援したプロジェクトの履歴として残ります。
          </p>
        </div>
      </section>

      <section id="projects" className="bg-ivory border-t border-line px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <p className="text-[13px] tracking-[0.25em] text-gold mb-4">STEP 1</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-14">
            応援したいプロジェクトを選ぶ
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {oneSupportProjects.map((p) => (
              <button
                key={p.title}
                onClick={() => setSelected(p.title)}
                className={
                  "text-left bg-paper border p-6 transition-colors duration-300 " +
                  (selected === p.title
                    ? "border-gold ring-1 ring-gold"
                    : "border-line hover:border-gold/50")
                }
              >
                <span className="text-2xl mb-3 block">{p.emoji}</span>
                <p className="font-display text-xl text-ink mb-2">{p.title}</p>
                <p className="text-sm text-ink-soft leading-relaxed">{p.body}</p>
              </button>
            ))}
          </div>

          <div
            className={
              selected ? "" : "opacity-40 pointer-events-none select-none"
            }
          >
            <p className="text-[13px] tracking-[0.25em] text-gold mb-4">
              STEP 2
            </p>
            <h3 className="font-display text-2xl md:text-3xl text-ink mb-10">
              {selected
                ? `「${selected}」を応援する金額を選ぶ`
                : "先にプロジェクトを選んでください"}
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {oneSupportAmounts.map((amount) => (
                <a
                  key={amount}
                  href={
                    selected
                      ? `/one-support?plan=${encodeURIComponent(
                          `${selected} One Support ${amount}`
                        )}#contact`
                      : undefined
                  }
                  className="bg-paper border border-line p-8 text-center hover:border-gold transition-colors duration-300"
                >
                  <p className="font-display text-2xl text-ink">{amount}</p>
                </a>
              ))}
            </div>
          </div>

          <p className="text-sm text-ink-soft/70 mt-8 max-w-xl">
            3,000円以上のご支援には、応援したプロジェクト限定のバッジ（例：🎭 秋の大笑会2026
            Supporter）を付与します。
          </p>
        </div>
      </section>

      <Contact defaultCategory="個人" />
      <Footer />
    </div>
  );
}
