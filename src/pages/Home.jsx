import Hero from "../components/Hero";
import Story from "../components/Story";
import AboutBrief from "../components/AboutBrief";
import FourValues from "../components/FourValues";
import VisionCycle from "../components/VisionCycle";
import SplitCTA from "../components/SplitCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero
        eyebrow="KANSAI ENTERTAINMENT PROJECT"
        lines={["エンタメの挑戦を、", "もっと自由に。"]}
        lead="office Knightは、関西を拠点に活動するエンタメプロジェクトです。舞台・イベントの企画運営から、テクノロジーを活用した仕組みづくり、企業・団体・個人との共創まで。エンタメに挑戦する人が、もっと挑戦しやすい環境をつくることを目指しています。"
        ctas={[
          { href: "/company", label: "企業・団体の方はこちら" },
          { href: "/individual", label: "個人の方はこちら" },
        ]}
      />
      <Story />
      <AboutBrief />
      <FourValues />
      <VisionCycle />
      <SplitCTA />
      <Footer />
    </div>
  );
}