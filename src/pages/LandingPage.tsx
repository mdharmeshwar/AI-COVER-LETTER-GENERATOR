import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FeaturesSection } from "@/sections/features/FeaturesSection";
import { StatsSection } from "@/sections/features/StatsSection";
import { GeneratorSection } from "@/sections/generator/GeneratorSection";
import { HeroSection } from "@/sections/hero/HeroSection";

export function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <GeneratorSection />
      <Footer />
    </main>
  );
}
