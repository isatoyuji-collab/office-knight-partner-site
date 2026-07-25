import Hero from "../components/Hero";
import Story from "../components/Story";
import AboutBrief from "../components/AboutBrief";
import VisionMission from "../components/VisionMission";
import SplitCTA from "../components/SplitCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero
        ctas={[
          { href: "/company", label: "企業として応援する" },
          { href: "/individual", label: "個人で応援する" },
        ]}
      />
      <Story />
      <AboutBrief />
      <VisionMission />
      <SplitCTA />
      <Footer />
    </div>
  );
}
