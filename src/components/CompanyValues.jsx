const values = [
  {
    title: "創る",
    body: "企業・団体の想いをカタチにする、企画・制作力を提供します。",
  },
  {
    title: "支える",
    body: "システム・AI・DXの知見を、貴社の運営や新規事業にも活かせます。",
  },
  {
    title: "繋ぐ",
    body: "関西のエンタメ・地域・クリエイターとの新しい接点をつくります。",
  },
  {
    title: "発表する",
    body: "舞台・イベントという発表の場を通じて、貴社の取り組みを届けます。",
  },
];

export default function CompanyValues() {
  return (
    <section className="bg-paper px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <p className="text-[13px] tracking-[0.25em] text-gold mb-4">OUR VALUE</p>
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-14">
          office Knightが提供する価値
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="border border-line p-6">
              <p className="font-display text-2xl text-gold mb-3">{v.title}</p>
              <p className="text-sm text-ink-soft leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}