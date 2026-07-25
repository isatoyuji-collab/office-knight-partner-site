import { Ticket, PlaySquare, Users2, Sparkles, Star } from "lucide-react";

const subProjects = [
  {
    Icon: Ticket,
    title: "Reservation System",
    body: "公演予約・受付・座席管理を効率化するシステム。",
    status: "開発中",
  },
  {
    Icon: PlaySquare,
    title: "Entertainment Contents Platform",
    body: "作品や出演者の魅力を届けるコンテンツサイト。",
    status: "開発中",
  },
  {
    Icon: Users2,
    title: "Partner Platform",
    body: "企業・個人とエンタメをつなぐ共創プラットフォーム。",
    status: "公開準備中",
  },
  {
    Icon: Sparkles,
    title: "AI Platform",
    body: "AIを活用した制作・広報・運営支援。",
    status: "開発中",
  },
];

export default function Projects() {
  return (
    <section className="bg-ivory px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <p className="text-[13px] tracking-[0.25em] text-gold mb-4">PROJECTS</p>
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-14">
          主要プロジェクト
        </h2>

        {/* Flagship: StageSync */}
        <div className="bg-paper border-2 border-gold p-8 md:p-12 mb-6">
          <p className="flex items-center gap-2 text-[13px] tracking-[0.2em] text-gold mb-3">
            <Star className="w-4 h-4" strokeWidth={1.5} fill="currentColor" />
            FLAGSHIP PROJECT
          </p>
          <h3 className="font-display text-3xl md:text-4xl text-ink mb-4">StageSync</h3>
          <p className="text-ink-soft leading-relaxed max-w-2xl mb-6 font-light">
            舞台・イベント情報を一つにつなぐエンタメプラットフォーム。エンタメに関わるすべての人が出会い、挑戦できる場所を目指します。
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm text-ink-soft mb-6">
            <li>・舞台・イベント情報掲載</li>
            <li>・チケット予約</li>
            <li>・オーディション情報</li>
            <li>・出演者・スタッフマッチング</li>
            <li>・エンタメコミュニティ</li>
          </ul>
          <span className="inline-block text-[11px] tracking-[0.1em] text-gold border border-gold px-3 py-1">
            企画・設計中
          </span>
        </div>

        {/* Supporting projects */}
        <div className="grid sm:grid-cols-2 gap-6">
          {subProjects.map((p) => (
            <div key={p.title} className="bg-paper border border-line p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center">
                  <p.Icon className="w-5 h-5 text-gold" strokeWidth={1.25} />
                </span>
                <span className="text-[11px] tracking-[0.1em] text-gold border border-gold/40 px-2 py-0.5">
                  {p.status}
                </span>
              </div>
              <p className="font-display text-xl text-ink mb-2">{p.title}</p>
              <p className="text-sm text-ink-soft leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-ink-soft/70 mt-8 max-w-xl">
          予約システム・コンテンツサイト・AIなどのプロジェクトは、StageSyncが目指す世界を支える取り組みとして進めています。
        </p>
      </div>
    </section>
  );
}