import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectStep from "@/components/ProjectStep";
import BridgeCard from "@/components/BridgeCard";
import DC12Alignment from "@/components/DC12Alignment";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const TOTAL_STEPS = projects.length + 1; // 5 projects + DC12

const stepLabels = [
  ...projects.map((p) => p.title.split(" ").slice(0, 2).join(" ")),
  "DC12 Fit",
];

const ResearchStepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showBridge, setShowBridge] = useState(false);

  const isLastProject =
    currentStep < projects.length && currentStep === projects.length - 1;
  const isDC12 = currentStep === projects.length;
  const currentProject = currentStep < projects.length ? projects[currentStep] : null;
  const hasBridge = currentProject?.bridgeQuestion != null;

  const handleNext = () => {
    if (showBridge) {
      setShowBridge(false);
      setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
    } else if (hasBridge && !isDC12) {
      setShowBridge(true);
    } else {
      setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
    }
  };

  const handlePrev = () => {
    if (showBridge) {
      setShowBridge(false);
    } else {
      setCurrentStep((s) => Math.max(s - 1, 0));
    }
  };

  const jumpTo = (step: number) => {
    setShowBridge(false);
    setCurrentStep(step);
  };

  return (
    <section className="py-8 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Step indicator */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
          {stepLabels.map((label, i) => (
            <button
              key={i}
              onClick={() => jumpTo(i)}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer",
                "hover:bg-secondary",
                i === currentStep && !showBridge
                  ? "bg-primary text-primary-foreground shadow-md"
                  : i < currentStep
                    ? "bg-secondary text-foreground/70"
                    : "text-muted-foreground"
              )}
              style={{ transitionProperty: "background-color, color, box-shadow" }}
            >
              <span
                className={cn(
                  "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0",
                  i === currentStep && !showBridge
                    ? "bg-primary-foreground/20"
                    : "bg-border"
                )}
              >
                {i + 1}
              </span>
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="h-1 rounded-full bg-secondary overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{
              width: `${((currentStep + (showBridge ? 0.5 : 0)) / (TOTAL_STEPS - 1)) * 100}%`,
            }}
          />
        </div>

        {/* Content */}
        <div key={`${currentStep}-${showBridge}`}>
          {showBridge && currentProject?.bridgeQuestion ? (
            <BridgeCard question={currentProject.bridgeQuestion} />
          ) : isDC12 ? (
            <DC12Alignment />
          ) : currentProject ? (
            <ProjectStep project={currentProject} />
          ) : null}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-4">
          <Button
            variant="outline"
            onClick={handlePrev}
            disabled={currentStep === 0 && !showBridge}
            className="gap-2 active:scale-[0.97] transition-transform"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          <span className="text-xs text-muted-foreground tabular-nums">
            {currentStep + 1} / {TOTAL_STEPS}
          </span>

          <Button
            onClick={handleNext}
            disabled={isDC12 && !showBridge}
            className="gap-2 active:scale-[0.97] transition-transform"
          >
            {showBridge
              ? "Next Project"
              : hasBridge && !isDC12
                ? "See the Connection"
                : isDC12
                  ? "Complete"
                  : "Next"}
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResearchStepper;
