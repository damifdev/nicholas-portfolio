/*
 * INK & EMBER — Home: composed from modular section components.
 * Dark editorial digital-studio portfolio for Oluwadamilola Samson-Ajai.
 */
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import { AboutSection, SkillsSection, ProcessSection } from "@/components/AboutSkills";
import {
  JourneySection,
  BecomingSection,
  ExperienceSection,
} from "@/components/JourneyLearning";
import {
  BeyondScreenSection,
  CvSection,
  ContactSection,
  Footer,
} from "@/components/PersonalityCvContact";
import { useReveal } from "@/hooks/useReveal";

export default function Home() {
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <AboutSection />
        <SkillsSection />
        <ProcessSection />
        <ExperienceSection />
        <JourneySection />
        <BecomingSection />
        <BeyondScreenSection />
        <CvSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
