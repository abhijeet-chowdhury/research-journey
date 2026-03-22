import { dc12Alignments } from "@/data/projects";
import { ArrowRight } from "lucide-react";

const DC12Alignment = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
        <h2
          className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight"
          style={{ lineHeight: "1.15" }}
        >
          DC12 Alignment
        </h2>
        <p className="text-muted-foreground text-sm">
          How five projects converge on every DC12 requirement
        </p>
      </div>

      <div className="space-y-4">
        {dc12Alignments.map((item, i) => (
          <div
            key={i}
            className="glass-card rounded-xl p-5 space-y-3"
          >
            {/* DC12 Requirement */}
            <div className="space-y-1">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                DC12 Requires
              </span>
              <p className="text-sm font-medium text-foreground">
                {item.requirement}
              </p>
            </div>

            <div className="flex items-center gap-2 text-primary">
              <ArrowRight className="w-4 h-4" />
              <span className="text-xs font-medium">
                Matched by {item.projectSource}
              </span>
            </div>

            {/* Abhijeet's Match */}
            <p className="text-sm text-foreground/80 leading-relaxed">
              {item.abhijeetMatch}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DC12Alignment;
