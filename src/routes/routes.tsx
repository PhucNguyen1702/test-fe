import { Routes, Route, Navigate } from "react-router-dom";

import { AboutSection } from "../containers/AboutSection";
import { PartnerSection } from "../containers/PartnerSection";
import { GameSection } from "../containers/GameSection";
import Home from "../pages/Home.tsx";
import NotFound from "../pages/NotFoundPage.tsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      <Route path="/home" element={<Home />} />
      <Route path="/about-us" element={<AboutSection />} />
      <Route path="/parters" element={<PartnerSection />} />
      <Route path="/games" element={<GameSection />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
