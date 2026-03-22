import { CheckCircle2 } from "lucide-react";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

interface ProjectStepProps {
  project: Project;
}

const ProjectStep = ({ project }: ProjectStepProps) => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <span>{project.institution}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
          <span>{project.year}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
          <span>{project.supervisor}</span>
        </div>
        <h2
          className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight"
          style={{ lineHeight: "1.15" }}
        >
          {project.title}
        </h2>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs font-normal"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* What I Did */}
      <div className="glass-card rounded-xl p-5 space-y-3">
        <h3 className="text-sm font-semibold tracking-widest uppercase text-primary">
          What I Did
        </h3>
        <ul className="space-y-2">
          {project.whatHeDid.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-foreground/90">
              <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Key Finding */}
      <div className="rounded-xl p-5 border-l-4 border-primary bg-primary/5 space-y-2">
        <h3 className="text-sm font-semibold tracking-widest uppercase text-primary">
          Key Finding
        </h3>
        <p className="text-sm text-foreground/90 leading-relaxed">
          {project.keyFinding}
        </p>
      </div>

      {/* What I Learned */}
      <div className="glass-card rounded-xl p-5 space-y-2">
        <h3 className="text-sm font-semibold tracking-widest uppercase text-primary">
          What I Learned
        </h3>
        <p className="text-foreground/90 leading-relaxed">
          {project.whatHeLearned}
        </p>
      </div>
    </div>
  );
};

export default ProjectStep;
