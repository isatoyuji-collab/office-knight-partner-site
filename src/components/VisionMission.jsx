export default function VisionMission() {
  return (
    <section className="bg-ivory px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-[13px] tracking-[0.25em] text-gold mb-4">VISION</p>
          {/* TODO(Yu): 目指す未来を1〜2行で */}
          <p className="font-display text-2xl md:text-3xl leading-snug text-ink">
            演劇の力で、関西のライブエンタメを次のステージへ。
          </p>
        </div>
        <div>
          <p className="text-[13px] tracking-[0.25em] text-gold mb-4">MISSION</p>
          {/* TODO(Yu): 理念を1〜2行で */}
          <p className="font-display text-2xl md:text-3xl leading-snug text-ink">
            人・企業・地域をつなぎ、新しい共創の形をつくる。
          </p>
        </div>
      </div>
    </section>
  );
}
