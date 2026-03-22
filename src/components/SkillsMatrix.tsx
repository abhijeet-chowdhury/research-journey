import { skillCategories } from "@/data/skills";
import { Badge } from "@/components/ui/badge";

const SkillsMatrix = () => {
  return (
    <section className="py-12 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2
          className="text-2xl font-bold text-foreground tracking-tight text-center"
          style={{ lineHeight: "1.15" }}
        >
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="glass-card rounded-xl p-5 space-y-3">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-primary">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-xs font-normal text-foreground/80"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;
