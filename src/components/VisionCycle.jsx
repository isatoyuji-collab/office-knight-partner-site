const steps = ["創る", "支える", "繋ぐ", "発表する"];

export default function VisionCycle() {
  return (
    <section className="bg-ink text-paper px-6 md:px-12 py-16 md:py-36">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[13px] tracking-[0.25em] text-gold mb-4 md:mb-6">VISION</p>
        <h2 className="font-display text-2xl md:text-5xl leading-tight mb-10 md:mb-16">
          関西から、
          <br className="md:hidden" />
          新しいエンタメの循環を。
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-6 mb-10 md:mb-16">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2 md:gap-6">
              <div className="w-16 h-16 md:w-28 md:h-28 rounded-full border border-gold/50 flex items-center justify-center font-display text-sm md:text-xl text-gold-soft">
                {s}
              </div>
              {i < steps.length - 1 && (
                <span className="text-gold/50 text-base md:text-xl">→</span>
              )}
            </div>
          ))}
        </div>

        <p className="text-sm md:text-base text-paper/60 leading-relaxed max-w-xl mx-auto font-light">
          この循環を生み出すことで、挑戦する人が挑戦しやすい未来をつくります。
        </p>
      </div>
    </section>
  );
}