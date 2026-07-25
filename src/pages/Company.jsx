import Hero from "../components/Hero";
import AboutBrief from "../components/AboutBrief";
import VisionMission from "../components/VisionMission";
import CoCreation from "../components/CoCreation";
import Results from "../components/Results";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Company() {
  return (
    <div className="font-sans">
      <Hero
        eyebrow="FOR COMPANY"
        lines={["関西のライブエンタメを", "次のステージへ。"]}
        lead="協賛・技術協力・開発パートナーなど、様々な形でoffice Knightと共創していただけます。"
      />
      <AboutBrief />
      <VisionMission />
      <CoCreation />
      <Results showFundNote />
      <Contact defaultCategory="企業" />
      <Footer />
    </div>
  );
}
