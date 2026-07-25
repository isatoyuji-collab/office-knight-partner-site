# office Knight Partner Site（資金調達LP）Ver.2.0

要件定義書Ver.2.0に沿った3ページ構成のReactアプリです。

## ページ構成

- `/` 共通TOP：Hero → Story（なぜoffice Knightを立ち上げたか）→ office Knightとは → Vision/Mission → 企業/個人への分岐
- `/company` 企業向け：Hero → About → Vision/Mission → 共創内容 → 実績+資金使途 → 問い合わせ
- `/individual` 個人向け：Hero → About → 開発状況 → 資金の使い道 → 応援方法 → 問い合わせ

## 編集すべき場所（公開前に必ず確認）

1. **`src/components/Story.jsx`** — 代表者本人のストーリー本文。今は仮テキストが入っているので必ず差し替える
2. `src/data.js` — 実績の数字、プランの価格・内容、FAQを書き換える
3. `src/components/VisionMission.jsx` — Vision/Missionの1〜2行
4. `.env`（`.env.example`をコピーして作成）— Supabaseの接続情報

```
VITE_SUPABASE_URL=xxxx
VITE_SUPABASE_ANON_KEY=xxxx
```

## Supabase側で必要なテーブル

```sql
create table the_inquiries (
  id uuid primary key default gen_random_uuid(),
  company text,
  name text not null,
  email text not null,
  category text,
  message text,
  created_at timestamptz default now()
);
```

問い合わせ受信後の自動返信（会社案内PDF送付）は、SupabaseのDB Webhook → Vercelの
API Route（Resend等でメール送信）という構成を想定しています。gekijo-appのLINE通知cronと
同じパターンで実装できます。

## セットアップ

```bash
npm install
cp .env.example .env   # Supabaseの情報を入力
npm run dev
```

## デザイン

- カラー：White（背景）/ Black（本文・Hero背景）/ Gold（アクセント）
- フォント：英字はCormorant（Serif）、日本語はNoto Sans JP
- 「幕（ACT）」を各セクションの見出しに使用し、演劇会社らしい構造に

## デプロイ

Vercelにこのリポジトリを接続し、環境変数（`VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY`）を
設定するだけで公開できます。reservation-app / gekijo-appとは別のVercelプロジェクト・別のSupabase
プロジェクトとして運用することを想定しています。
