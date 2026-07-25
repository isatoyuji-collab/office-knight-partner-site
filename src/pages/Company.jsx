import Hero from "../components/Hero";
import CompanyAbout from "../components/CompanyAbout";
import WhyPartner from "../components/WhyPartner";
import CompanyValues from "../components/CompanyValues";
import Projects from "../components/Projects";
import Partnership from "../components/Partnership";
import Merits from "../components/Merits";
import Roadmap from "../components/Roadmap";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Company() {
  return (
    <div className="font-sans">
      <Hero
        eyebrow="FOR COMPANY / ORGANIZATION"
        lines={["共に、関西のエンタメの", "未来を創る。"]}
        lead="office Knightは、舞台・イベント・テクノロジー・共創を通じて、エンタメに挑戦する人を支えるプロジェクトです。私たちは、この挑戦をともに育てる企業・団体パートナーを募集しています。"
        ctas={[{ href: "#contact", label: "お問い合わせ" }]}
      />
      <CompanyAbout />
      <WhyPartner />
      <CompanyValues />
      <Projects />
      <Partnership />
      <Merits />
      <Roadmap />
      <Contact defaultCategory="企業・団体" />
      <Footer />
    </div>
  );
}