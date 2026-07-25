export default function Hero({
  eyebrow = "ANNUAL PARTNER PROGRAM",
  lines = ["幕を、", "ともに上げる。"],
  lead = "演劇を起点に、人・企業・地域をつなぐ office Knight。舞台をつくる力を、あなたの事業やまちの未来のために。共創パートナーという形で、ご一緒しませんか。",
  ctas = [{ href: "#contact", label: "お問い合わせ" }],
  showNav = true,
}) {
  return (
    <section className="relative bg-ink text-paper min-h-[92vh] flex flex-col justify-between overflow-hidden">
      {/* spotlight beam */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(169,129,46,0.35), transparent 70%)",
        }}
      />

      {showNav && (
        <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 pt-8">
          <a href="/" className="font-display text-lg tracking-[0.2em]">
            office Knight
          </a>
          <div className="flex gap-3">
            {ctas.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="text-[13px] tracking-[0.15em] border border-gold/50 text-gold-soft px-4 py-2 hover:bg-gold hover:text-ink hover:border-gold transition-colors duration-300"
              >
                {c.label}
              </a>
            ))}
          </div>
        </nav>
      )}

      <div className="relative z-10 px-6 md:px-12 max-w-4xl">
        <p className="text-[13px] tracking-[0.3em] text-gold-soft mb-6">
          {eyebrow}
        </p>
        <h1 className="font-display text-[13vw] md:text-8xl leading-[0.95] tracking-tight">
          {lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < lines.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="mt-8 text-base md:text-lg text-paper/70 max-w-xl leading-relaxed font-light">
          {lead}
        </p>
      </div>

      <div className="relative z-10 flex items-center justify-between px-6 md:px-12 pb-10 text-[12px] tracking-[0.2em] text-paper/40">
        <span>THEATRE COMPANY / office Knight</span>
        <span className="flex items-center gap-2">
          SCROLL
          <span className="inline-block w-px h-6 bg-paper/30 animate-pulse" />
        </span>
      </div>
    </section>
  );
}
