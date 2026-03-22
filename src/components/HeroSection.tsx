import { Beaker, GraduationCap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-16 px-4 sm:px-8 text-center overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 30%, hsl(168 76% 42% / 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-center gap-3 text-primary">
          <Beaker className="w-6 h-6" />
          <span className="text-sm font-medium tracking-widest uppercase">
            Research Journey
          </span>
          <GraduationCap className="w-6 h-6" />
        </div>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
          style={{ lineHeight: "1.1" }}
        >
          Abhijeet Chowdhury
        </h1>

        <p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
          style={{ textWrap: "balance" }}
        >
          From fungal networks to critical metal recovery — tracing the
          biotic-abiotic thread across five research projects toward{" "}
          <span className="text-primary font-semibold">DC12 / MiningBrines</span>
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground">
          <span>🎯</span>
          <span>
            Target: UniLaSalle, France — Advanced Oxidation Processes for
            Critical Metal Recovery from Geothermal Brines
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
