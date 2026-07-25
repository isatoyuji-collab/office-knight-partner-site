const items = [
  { label: "協賛", desc: "公演・活動への協賛パートナーとして" },
  { label: "技術協力", desc: "システム開発・ITノウハウの提供" },
  { label: "開発パートナー", desc: "サービス・プロダクトの共同開発" },
  { label: "コンテンツ連携", desc: "PR・コンテンツ制作での連携" },
  { label: "イベント協力", desc: "企業イベント・地域イベントへの出演・企画協力" },
];

export default function CoCreation() {
  return (
    <section className="bg-ivory px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <p className="text-[13px] tracking-[0.25em] text-gold mb-4">CO-CREATION</p>
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-14">共創内容</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.label} className="bg-paper border border-line p-6">
              <p className="font-display text-xl text-ink mb-2">{item.label}</p>
              <p className="text-sm text-ink-soft leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
