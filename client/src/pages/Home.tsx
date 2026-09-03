/*
 * INK & EMBER — Home: composed from modular section components.
 * Dark editorial digital-studio portfolio for Oluwadamilola Samson-Ajai.
 */
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import {
  AboutSection,
  SkillsSection,
  AiCreativeSection,
  CapabilitySection,
  ProcessSection,
} from "@/components/AboutSkills";
import { AiProjectsSection } from "@/components/AiProjects";
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
import { CertificatesSection } from "@/components/Certificates";
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
        <AiCreativeSection />
        <AiProjectsSection />
        <CapabilitySection />
        <ProcessSection />
        <ExperienceSection />
        <JourneySection />
        <BecomingSection />
        <CertificatesSection />
        <BeyondScreenSection />
        <CvSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
