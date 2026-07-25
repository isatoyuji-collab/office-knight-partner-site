export default function LegalPage({ title, updated, children }) {
  return (
    <div className="font-sans">
      <div className="bg-ink text-paper px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <a
            href="/"
            className="font-display text-sm tracking-[0.2em] text-gold-soft"
          >
            office Knight
          </a>
          <h1 className="font-display text-3xl md:text-4xl mt-6">{title}</h1>
          {updated && (
            <p className="text-paper/50 text-sm mt-3">{updated}</p>
          )}
        </div>
      </div>
      <div className="bg-paper px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-3xl mx-auto legal-body text-ink-soft leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
