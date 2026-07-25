import LegalPage from "../components/LegalPage";
import Footer from "../components/Footer";

const rows = [
  { label: "運営者", value: "office Knight（オフィスナイト）" },
  { label: "運営統括責任者", value: "代表者氏名（お問い合わせ時にご案内します）" },
  {
    label: "所在地・電話番号",
    value:
      "お問い合わせフォームよりご請求いただいた場合、遅滞なく開示いたします。",
  },
  {
    label: "メールアドレス",
    value: "お問い合わせフォームよりご連絡ください。",
  },
  {
    label: "販売・提供する商品/サービス",
    value:
      "公演・イベントのチケット販売、共創・協賛（スポンサー）契約に基づくパートナーシップサービス、その他office Knightが提供する関連サービス",
  },
  {
    label: "価格",
    value:
      "各公演・イベントのチケット価格、または協賛プランの内容は、都度、本サイトまたは個別のご案内資料に定める金額とします。",
  },
  {
    label: "価格以外の必要料金",
    value:
      "チケット購入時の決済手数料等が発生する場合は、購入手続きの画面にてご案内します。",
  },
  {
    label: "お支払い方法",
    value:
      "クレジットカード決済、銀行振込その他当団体が指定する方法。詳細は各サービスの申込み時にご案内します。",
  },
  {
    label: "お支払い時期",
    value:
      "チケット購入の場合は購入手続き完了時。協賛・スポンサー契約の場合は契約書等に定める時期とします。",
  },
  {
    label: "商品・サービスの提供時期",
    value:
      "チケットの場合は購入手続き完了後、予約確認をもって提供します。協賛・スポンサー契約の場合は契約内容に基づき提供します。",
  },
  {
    label: "返品・キャンセルについて",
    value:
      "チケットの性質上、購入後のお客様都合による返品・返金は原則お受けできません。公演の中止・延期等、当団体の都合による場合は、個別にご案内いたします。協賛・スポンサー契約のキャンセルについては、契約内容に基づき対応します。",
  },
  {
    label: "動作環境",
    value:
      "本サービスのご利用には、インターネット接続環境および最新版のWebブラウザを推奨します。",
  },
];

export default function Tokushoho() {
  return (
    <>
      <LegalPage
        title="特定商取引法に基づく表記"
        updated="最終更新日：2026年7月26日"
      >
        <p>
          本ページは、特定商取引に関する法律第11条（通信販売についての広告）に基づき、office
          Knightが提供するチケット販売、協賛・スポンサー契約その他の有償サービスに関する表記を行うものです。
        </p>
        <div className="border-t border-line mt-8">
          {rows.map((r) => (
            <div
              key={r.label}
              className="grid md:grid-cols-[180px_1fr] gap-2 md:gap-8 py-5 border-b border-line"
            >
              <p className="text-ink font-medium text-sm shrink-0">
                {r.label}
              </p>
              <p className="text-ink-soft text-sm leading-relaxed">
                {r.value}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink-soft/70">
          個別のサービス（StageSync、予約システム等）において別途特定商取引法に基づく表記が必要となる場合は、各サービスのページにて追記します。
        </p>
      </LegalPage>
      <Footer />
    </>
  );
}
