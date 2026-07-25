export default function SplitCTA() {
  return (
    <section className="bg-paper px-6 md:px-12 pb-24 md:pb-32">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        <a
          href="/company"
          className="group border border-line px-8 py-12 text-center hover:border-gold transition-colors duration-300"
        >
          <p className="text-[13px] tracking-[0.2em] text-gold mb-3">FOR COMPANY</p>
          <p className="font-display text-2xl text-ink">企業として応援する</p>
        </a>
        <a
          href="/individual"
          className="group border border-line px-8 py-12 text-center hover:border-gold transition-colors duration-300"
        >
          <p className="text-[13px] tracking-[0.2em] text-gold mb-3">FOR INDIVIDUAL</p>
          <p className="font-display text-2xl text-ink">個人で応援する</p>
        </a>
      </div>
    </section>
  );
}
