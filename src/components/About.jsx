import ActHeading from "./ActHeading";

export default function About() {
  return (
    <section id="about" className="bg-paper px-6 md:px-12 py-24 md:py-36">
      <div className="max-w-4xl mx-auto">
        <ActHeading act="ACT I" en="ABOUT OFFICE KNIGHT" ja="office Knightについて" />
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <p className="text-lg md:text-xl leading-relaxed font-light text-ink-soft">
            office Knightは、演劇を軸に活動する劇団です。舞台の上でつくってきた「人を動かす力」「物語をつくる力」を、公演の外へと広げ、企業・地域と共創するプロジェクトを展開しています。
          </p>
          <p className="text-lg md:text-xl leading-relaxed font-light text-ink-soft">
            単発の協賛ではなく、年間を通じたパートナーシップとして。共創パートナーの皆さまと共に、新しいエンターテインメントの形をつくっていきたいと考えています。
          </p>
        </div>
      </div>
    </section>
  );
}
