import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { faqs } from "../data";

function makeInitialForm(category, plan) {
  return {
    company: "",
    name: "",
    email: "",
    category,
    message: plan ? `「${plan}」への申し込みを希望します。` : "",
  };
}

export default function Contact({ defaultCategory = "企業・団体" }) {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan");
  const initialForm = makeInitialForm(defaultCategory, plan);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    if (!supabase) {
      // Supabase未接続の場合はここでAPI連携先を差し替えてください
      console.warn("Supabase未設定：.envにVITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEYを設定してください");
      setStatus("done");
      return;
    }

    const { error } = await supabase.from("the_inquiries").insert([form]);

    if (error) {
      console.error(error);
      setStatus("error");
      return;
    }

    setStatus("done");
    setForm(initialForm);
  };

  return (
    <section id="contact" className="bg-paper px-6 md:px-12 py-24 md:py-36">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 md:mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[13px] tracking-[0.25em] text-gold font-medium">
              FINAL ACT
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            お問い合わせ
            <span className="block text-lg md:text-xl font-sans font-light tracking-[0.15em] text-ink-soft/60 mt-2">
              CONTACT
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[13px] tracking-[0.1em] text-ink-soft mb-2">
                お問い合わせ種別
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full border border-line px-4 py-3 bg-paper text-ink focus:outline-none focus:border-gold"
              >
                <option>企業・団体</option>
                <option>個人</option>
                <option>取材</option>
                <option>その他</option>
              </select>
            </div>
            <div>
              <label className="block text-[13px] tracking-[0.1em] text-ink-soft mb-2">
                会社名・屋号
              </label>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                className="w-full border border-line px-4 py-3 bg-paper text-ink focus:outline-none focus:border-gold"
                placeholder="株式会社〇〇"
              />
            </div>
            <div>
              <label className="block text-[13px] tracking-[0.1em] text-ink-soft mb-2">
                お名前
              </label>
              <input
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border border-line px-4 py-3 bg-paper text-ink focus:outline-none focus:border-gold"
                placeholder="山田 太郎"
              />
            </div>
            <div>
              <label className="block text-[13px] tracking-[0.1em] text-ink-soft mb-2">
                メールアドレス
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border border-line px-4 py-3 bg-paper text-ink focus:outline-none focus:border-gold"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-[13px] tracking-[0.1em] text-ink-soft mb-2">
                お問い合わせ内容
              </label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full border border-line px-4 py-3 bg-paper text-ink focus:outline-none focus:border-gold"
                placeholder="共創パートナーについて詳しく知りたいです"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-ink text-paper py-4 text-[13px] tracking-[0.2em] hover:bg-gold hover:text-ink transition-colors duration-300 disabled:opacity-50"
            >
              {status === "sending" ? "送信中..." : "送信する"}
            </button>
            {status === "done" && (
              <p className="text-sm text-gold">
                お問い合わせありがとうございます。会社案内資料を自動返信でお送りします。
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600">
                送信に失敗しました。時間をおいて再度お試しください。
              </p>
            )}
          </form>

          <div>
            <h3 className="text-[13px] tracking-[0.2em] text-gold mb-6">FAQ</h3>
            <div className="space-y-6">
              {faqs.map((f) => (
                <div key={f.q} className="border-b border-line pb-6">
                  <p className="font-medium mb-2">{f.q}</p>
                  <p className="text-sm text-ink-soft leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
