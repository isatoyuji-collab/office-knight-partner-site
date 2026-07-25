import Hero from "../components/Hero";
import AboutBrief from "../components/AboutBrief";
import DevStatus from "../components/DevStatus";
import FundUse from "../components/FundUse";
import SupportCTA from "../components/SupportCTA";
import Footer from "../components/Footer";

export default function Individual() {
  return (
    <div className="font-sans">
      <Hero
        eyebrow="FOR INDIVIDUAL"
        lines={["あなたの応援が、", "次のエンタメをつくる。"]}
        lead="office Knightを応援したい、演劇・エンタメが好き、そんな皆さまの力を借りています。"
      />
      <AboutBrief />
      <DevStatus />
      <FundUse />
      <SupportCTA />
      <Footer />
    </div>
  );
}
