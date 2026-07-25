import ActHeading from "./ActHeading";
import { plans } from "../data";

export default function Plans() {
  return (
    <section id="plans" className="bg-ivory px-6 md:px-12 py-24 md:py-36">
      <div className="max-w-6xl mx-auto">
        <ActHeading act="ACT II" en="PARTNERSHIP" ja="共創メニュー・プラン" />

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={
                "flex flex-col p-8 border " +
                (p.featured
                  ? "bg-ink text-paper border-gold"
                  : "bg-paper text-ink border-line")
              }
            >
              <p
                className={
                  "text-[13px] tracking-[0.2em] mb-1 " +
                  (p.featured ? "text-gold-soft" : "text-gold")
                }
              >
                {p.name.toUpperCase()}
              </p>
              <h3 className="font-display text-2xl mb-1">{p.subtitle}</h3>
              <p
                className={
                  "text-sm mb-8 " + (p.featured ? "text-paper/60" : "text-ink-soft/70")
                }
              >
                {p.price}
              </p>
              <ul className="space-y-3 mb-10 flex-1">
                {p.points.map((pt) => (
                  <li key={pt} className="text-sm leading-relaxed flex gap-3">
                    <span className={p.featured ? "text-gold-soft" : "text-gold"}>
                      —
                    </span>
                    <span className={p.featured ? "text-paper/85" : "text-ink-soft"}>
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={
                  "text-center text-[13px] tracking-[0.15em] py-3 border transition-colors duration-300 " +
                  (p.featured
                    ? "border-gold-soft text-gold-soft hover:bg-gold-soft hover:text-ink"
                    : "border-ink/20 text-ink hover:border-gold hover:text-gold")
                }
              >
                このプランで相談する
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
