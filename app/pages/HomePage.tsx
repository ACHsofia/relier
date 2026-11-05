import HeroSection from "../components/HeroSection";
import CollegesSection from "../components/CollegesSection";
import EtudiantsSection from "../components/EtudiantsSection";
import RechercheSection from "../components/RechercheSection";
import AmUSection from "../components/AmUSection";
import AccreditationsSection from "../components/AccreditationsSection";
import CollectifSection from "../components/CollectifSection";
import EntretiensSection from "../components/EntretiensSection";
import ConvictionFinale from "../components/ConvictionFinale";
import SoutiensPopup from "../components/SoutiensPopup";

export default function HomePage() {
  return (
    <main className="pt-20">
      <HeroSection />
      <ConvictionFinale />
      <CollegesSection />
      <EtudiantsSection />
      <AmUSection />
      <RechercheSection />
      <AccreditationsSection />
      <CollectifSection />
      <EntretiensSection />
      <SoutiensPopup />
    </main>
  );
}
