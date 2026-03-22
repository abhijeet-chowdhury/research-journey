export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Bioprocess Engineering",
    skills: [
      "Bioreactor Design",
      "Sterile Technique",
      "Aseptic Culture",
      "Chromatography",
      "Upstream/Downstream Processing",
    ],
  },
  {
    category: "Process Engineering",
    skills: [
      "PFD Preparation",
      "Mass & Energy Balances",
      "HAZOP",
      "Design of Experiments",
      "High-Pressure Reactor Design",
    ],
  },
  {
    category: "Computational",
    skills: [
      "Aspen Plus / HYSYS",
      "MATLAB",
      "Python (NumPy, Pandas, Matplotlib)",
      "SQL",
      "AI-Assisted Process Modelling",
    ],
  },
  {
    category: "Languages",
    skills: ["English (C2)", "German (B1)", "Bengali (Native)", "Hindi (Native)"],
  },
];
