import HeroSection from "@/components/HeroSection";
import ResearchStepper from "@/components/ResearchStepper";
import SkillsMatrix from "@/components/SkillsMatrix";
import { Github } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ResearchStepper />
      <SkillsMatrix />

      {/* Footer */}
      <footer className="py-8 px-4 text-center space-y-3">
        <a
          href="https://github.com/abhijeet-chowdhury/Process-AI"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="w-4 h-4" />
          github.com/abhijeet-chowdhury/Process-AI
        </a>
        <p className="text-xs text-muted-foreground/60">
          Built for the DC12 / MiningBrines Doctoral Network Application
        </p>
      </footer>
    </div>
  );
};

export default Index;
