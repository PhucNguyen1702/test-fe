import "./app.css";
import "./i18next/i18n.ts";
import { HeroSection } from "./containers/HeroSection";
import { AboutSection } from "./containers/AboutSection";
import { GameSection } from "./containers/GameSection";
import { PartnerSection } from "./containers/PartnerSection";
import { Footer } from "./containers/Footer";
import { Spacer } from "./components/Spacer";
import { ButtonScroll } from "./components/ButtonScroll";

function App() {
  return (
    <>
      <HeroSection />
      <Spacer />
      <AboutSection />
      <ButtonScroll />
      <GameSection />
      <PartnerSection />
      <Footer />
    </>
  );
}

export default App;
