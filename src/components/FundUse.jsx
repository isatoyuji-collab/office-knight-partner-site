const items = [
  { label: "AI", desc: "予約・制作管理システムのAI開発費" },
  { label: "サーバー", desc: "予約システム・コンテンツサイトの運用費" },
  { label: "開発", desc: "システム・アプリの継続開発" },
  { label: "デザイン", desc: "ブランド・広報物のデザイン制作" },
  { label: "運営", desc: "公演・日々の活動運営費" },
];

export default function FundUse() {
  return (
    <section className="bg-paper px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <p className="text-[13px] tracking-[0.25em] text-gold mb-6">WHERE YOUR SUPPORT GOES</p>
        <h2 className="font-display text-3xl text-ink mb-10">資金の使い道</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {items.map((item) => (
            <div key={item.label} className="border-l-2 border-gold pl-4 py-1">
              <p className="font-display text-lg text-ink">{item.label}</p>
              <p className="text-sm text-ink-soft mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
