import ActHeading from "./ActHeading";
import { results } from "../data";

export default function Results({ showFundNote = false }) {
  return (
    <section id="results" className="bg-ink text-paper px-6 md:px-12 py-24 md:py-36">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 md:mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[13px] tracking-[0.25em] text-gold font-medium">
              ACT III
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            数字で見る、office Knight
            <span className="block text-lg md:text-xl font-sans font-light tracking-[0.15em] text-paper/40 mt-2">
              RESULTS
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-paper/10">
          {results.map((r) => (
            <div key={r.label} className="bg-ink px-6 py-10 md:py-14">
              <div className="font-display text-4xl md:text-5xl text-gold-soft">
                {r.value}
                <span className="text-lg md:text-xl ml-1 text-paper/50">{r.unit}</span>
              </div>
              <div className="mt-3 text-[13px] tracking-[0.1em] text-paper/60">
                {r.label}
              </div>
            </div>
          ))}
        </div>

        {showFundNote && (
          <p className="mt-10 text-sm text-paper/50 leading-relaxed max-w-xl">
            皆さまからのご支援は、AI開発・サーバー運用・公演制作に充てられます。
          </p>
        )}
      </div>
    </section>
  );
}
