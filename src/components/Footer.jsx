export default function Footer() {
  return (
    <footer className="bg-ink text-paper/50 px-6 md:px-12 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] tracking-[0.1em]">
        <span className="font-display text-paper/80 tracking-[0.2em]">
          office Knight
        </span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold-soft transition-colors">
            SNS
          </a>
          <a href="#" className="hover:text-gold-soft transition-colors">
            利用規約
          </a>
          <a href="#" className="hover:text-gold-soft transition-colors">
            プライバシーポリシー
          </a>
        </div>
        <span>© {new Date().getFullYear()} office Knight</span>
      </div>
    </footer>
  );
}
