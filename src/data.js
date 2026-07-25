// ここを書き換えるだけで各セクションの数字・文章を更新できます。
// TODO: 実際の数値・実績が固まったら差し替えてください。

export const results = [
  { value: "12", unit: "回", label: "公演実施回数" },
  { value: "1,800", unit: "名+", label: "累計動員数" },
  { value: "6", unit: "社", label: "企業・団体コラボ実績" },
  { value: "4", unit: "件", label: "メディア掲載" },
];

export const faqs = [
  {
    q: "個人事業主や団体でも申し込めますか？",
    a: "はい、企業・団体規模を問わずお申し込みいただけます。まずはお問い合わせフォームよりご相談ください。",
  },
  {
    q: "パートナーシップの期間はどのくらいですか？",
    a: "基本は年間契約ですが、公演・イベント単位でのご相談も可能です。詳細はご提案時にすり合わせます。",
  },
  {
    q: "資料はもらえますか？",
    a: "お問い合わせいただいた方には、自動返信にて会社案内資料をお送りしています。",
  },
  {
    q: "StageSyncにはいつから参加できますか？",
    a: "現在企画・設計中のため、開発パートナーとしての参加についても随時ご相談を受け付けています。",
  },
];

export const supportPlans = [
  {
    name: "Supporter",
    price: "500円",
    rights: ["会員番号", "Journey（軌跡）の記録", "Achievements（実績）", "名前掲載（希望者）"],
  },
  {
    name: "Member",
    price: "1,000円",
    rights: [
      "Supporterの権利すべて",
      "一般公開前情報の閲覧",
      "制作・開発進捗の共有",
      "活動報告の閲覧",
      "アンケートへの参加",
      "マイページ称号表示",
    ],
  },
  {
    name: "Circle Member",
    price: "3,000円",
    rights: ["Memberの権利すべて", "対象企画への投票権"],
  },
  {
    name: "Partner",
    price: "5,000円",
    rights: [
      "Circle Memberの権利すべて",
      "新企画・新サービス・新機能への提案権",
      "ベータ版参加権",
    ],
    note: "※ご提案いただいた内容は、運営判断のもと実施を検討いたします。すべてのご提案の採用をお約束するものではありません。",
  },
  {
    name: "Premium Partner",
    price: "10,000円",
    rights: [
      "Partnerの権利すべて",
      "新サービスへの先行参加",
      "特別サポーター表示",
      "節目企画への特別招待（実施時）",
    ],
  },
];

export const oneSupportAmounts = ["1,000円", "3,000円", "5,000円", "自由入力"];

export const oneSupportExamples = [
  { emoji: "🎭", label: "秋の大笑会2026 One Support" },
  { emoji: "🚀", label: "Stage Sync One Support" },
  { emoji: "✨", label: "新サービス One Support" },
];

export const oneSupportProjects = [
  {
    emoji: "🎭",
    title: "2026年公演",
    body: "2026年秋に上演する公演の制作・運営を応援します。",
  },
  {
    emoji: "🎬",
    title: "2027年公演",
    body: "次の挑戦となる、2027年公演の企画・準備を応援します。",
  },
  {
    emoji: "🚀",
    title: "StageSync 開発",
    body: "公演やイベントの情報発信、出演者オーディション、スタッフマッチングまでをつなぐ、エンタメの出会いと挑戦を支えるプラットフォームの開発を応援します。",
  },
  {
    emoji: "⚙️",
    title: "その他のシステム開発",
    body: "予約システム・コンテンツサイトなど、現場を支えるその他の開発を応援します。",
  },
];
