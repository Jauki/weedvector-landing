import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { HardwareSection } from "./components/HardwareSection";
import { HowItWorks } from "./components/HowItWorks";
import { FeatureDeepDive } from "./components/FeatureDeepDive";
import { OpenSourceSection } from "./components/OpenSourceSection";
import { MissionSection } from "./components/MissionSection";
import { PricingSection } from "./components/PricingSection";
import { TechTrustStrip } from "./components/TechTrustStrip";
import { HorizonSection } from "./components/HorizonSection";
import { Footer } from "./components/Footer";
import { PhilosophyPage } from "./pages/PhilosophyPage";
import { ChangelogPage } from "./pages/ChangelogPage";

const GridOverlay = () => (
  <div
    aria-hidden="true"
    style={{
      position: "fixed",
      inset: 0,
      zIndex: 0,
      pointerEvents: "none",
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
      maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)",
      WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)",
    }}
  />
);

function LandingPage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <FeaturesGrid />
      <HardwareSection />
      <HowItWorks />
      <FeatureDeepDive />
      <OpenSourceSection />
      <MissionSection />
      <PricingSection />
      <TechTrustStrip />
      <HorizonSection />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ background: "#080808", minHeight: "100vh", position: "relative" }}>
        <GridOverlay />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/philosophy" element={<PhilosophyPage />} />
            <Route path="/changelog" element={<ChangelogPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
