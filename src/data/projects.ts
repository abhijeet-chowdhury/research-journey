export interface Project {
  id: number;
  title: string;
  institution: string;
  year: string;
  supervisor: string;
  whatHeDid: string[];
  keyFinding: string;
  whatHeLearned: string;
  bridgeQuestion: string | null;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Mycelium Composite Materials",
    institution: "TUHH",
    year: "2023",
    supervisor: "Prof. Dr.-Ing. Ingo Johannsen",
    whatHeDid: [
      "Grew bio-composite bricks from fungal mycelium and agricultural waste (wheat straw, wood dust)",
      "Systematically varied substrate-to-waste ratios (60/40, 40/60, 20/80)",
      "Extracted and sub-cultured live mycelium under aseptic conditions",
      "Confirmed culture purity through clonal replication",
    ],
    keyFinding:
      "Structural integrity requires >20% substrate concentration. Below this threshold, no brick formation occurs.",
    whatHeLearned:
      "Fungal hyphae are intelligent foragers — they extend networks to seek nutrients, bind substrate, and colonise space. Biology can do structural and chemical work simultaneously.",
    bridgeQuestion:
      "Does this hyphal intelligence operate at ecosystem scale? Can fungal networks do more than bind bricks — can they cycle nutrients and build soil?",
    tags: ["Bioprocess Engineering", "Sterile Technique", "Material Science"],
  },
  {
    id: 2,
    title: "Regenerative Agricultural Chemistry",
    institution: "TUHH",
    year: "2024",
    supervisor: "Prof. Dr.-Ing. Ralf Otterpohl",
    whatHeDid: [
      "Evaluated 9 soil carbon simulation models (RothC, DNDC, CENTURY, EOSDA, etc.)",
      "Investigated Arbuscular Mycorrhizal Fungi (AMF) as a biotic-abiotic interface",
      "Developed a four-pathway AMF framework: Generating, Reprocessing, Reorganising, Stabilising",
      "Linked fungal hyphal networks to nutrient cycling, carbon sequestration, and soil health",
    ],
    keyFinding:
      "Regenerative systems achieve soil organic matter up to 12% vs 5% conventional. AMF symbiosis is the primary driver.",
    whatHeLearned:
      "Biotic-abiotic synergy is the mechanism behind high-performing natural systems. AMF exchange carbohydrates for mineral nutrients — a redox-like transaction at the root interface. Biology and geochemistry are inseparable.",
    bridgeQuestion:
      "If symbiotic systems mobilise and accumulate minerals in soil, could engineered biotic-abiotic systems do the same in polluted water?",
    tags: ["Soil Chemistry", "Carbon Modelling", "Systems Thinking"],
  },
  {
    id: 3,
    title: "Acid Mine Drainage Remediation",
    institution: "CALZEO GmbH",
    year: "2025",
    supervisor: "Prof. Dr.-Ing. Ralf Otterpohl, TUHH",
    whatHeDid: [
      "Designed a multi-stage passive AMD treatment system: anaerobic wetland/SRB bioreactor → anoxic limestone drain → aerobic polishing cell → filtration",
      "Characterised AMD chemistry through stoichiometric analysis",
      "Validated against Wheal Jane (UK) and Jennings Center (USA) case studies",
      "Identified 5 fundamental limitations of conventional passive wetland systems",
    ],
    keyFinding:
      "ZVI (Zero-Valent Iron) + SRB (Sulfate-Reducing Bacteria) creates a true abiotic-biotic synergy. ZVI rapidly buffers pH and donates electrons; SRB exploit this environment for selective metal sulfide precipitation.",
    whatHeLearned:
      "Combined abiotic-biotic systems overcome limitations of purely biological treatment — slow kinetics, poor robustness, uncontrolled anaerobic conditions, difficulty maintaining pH, and no targeted metal recovery pathway.",
    bridgeQuestion:
      "The AMD system removes metals. But could the same mechanism selectively recover critical metals — gold, palladium, copper — from e-waste?",
    tags: ["Water Treatment", "Geochemistry", "Process Design"],
  },
  {
    id: 4,
    title: "Hybrid Bioreactor for Critical Metal Recovery from E-Waste",
    institution: "Independent Research",
    year: "2025–present",
    supervisor: "Self-directed",
    whatHeDid: [
      "Designed a 3-stage cascade: Corona electrostatic separation → Selective bioleaching (A. ferrooxidans) → Bioreactor recovery",
      "Stage 3a: ZVI + SRB for pH correction and selective copper precipitation via metal sulfide formation",
      "Stage 3b: Cupriavidus metallidurans for biogenic gold and palladium nanoparticle recovery",
      "Developed AI-assisted feasibility model using synthetic datasets",
    ],
    keyFinding:
      "To validate this system experimentally, you must understand how oxidation state and chemical speciation of dissolved metals control their extractability — exactly the question DC12 asks about geothermal brines.",
    whatHeLearned:
      "Metal speciation and oxidation state are the master variables controlling extractability. Engineered redox manipulation — whether biological or chemical — is the key to selective recovery.",
    bridgeQuestion:
      "Advanced Oxidation Processes in DC12 are the chemical analogue of the redox manipulation I've been engineering biologically. The question is the same — the medium changes from e-waste leachate to geothermal brine.",
    tags: ["Bioleaching", "Metal Recovery", "AI Modelling", "Redox Chemistry"],
  },
  {
    id: 5,
    title: "Fischer-Tropsch Plant Design",
    institution: "TUHH Group Project",
    year: "2022",
    supervisor: "TUHH Faculty",
    whatHeDid: [
      "Designed a pilot-scale Power-to-Liquid plant for Fischer-Tropsch wax synthesis",
      "Prepared PFDs, mass and energy balances, equipment specifications",
      "Modelled reactor kinetics for cobalt catalyst systems",
      "Worked with high-pressure reactor operation parameters",
    ],
    keyFinding:
      "Catalyst surface chemistry and reaction kinetics at the molecular level determine macroscale process outcomes — the same principle applies to AOP-metal interactions in brines.",
    whatHeLearned:
      "Rigorous process engineering methodology — PFDs, mass/energy balances, HAZOP, equipment sizing — forms the backbone of any experimental campaign, including the laboratory AOP experiments DC12 requires.",
    bridgeQuestion: null,
    tags: ["Process Engineering", "Reactor Design", "Kinetics"],
  },
];

export interface DC12Requirement {
  requirement: string;
  abhijeetMatch: string;
  projectSource: string;
}

export const dc12Alignments: DC12Requirement[] = [
  {
    requirement: "Investigate how AOPs modify chemical speciation and reactivity of dissolved metals",
    abhijeetMatch:
      "Project 4 centres on metal speciation and oxidation-state control for selective recovery — the same fundamental question, applied biologically",
    projectSource: "Projects 3 & 4",
  },
  {
    requirement: "Improve selective recovery of Li, Co, Ga, rare earth elements",
    abhijeetMatch:
      "Designed selective metal sulfide precipitation (Cu) and biogenic nanoparticle recovery (Au, Pd) — directly transferable selectivity principles",
    projectSource: "Project 4",
  },
  {
    requirement: "Chemical characterisation of geothermal brines",
    abhijeetMatch:
      "Characterised AMD chemistry through stoichiometric analysis; evaluated complex multi-metal aqueous systems",
    projectSource: "Project 3",
  },
  {
    requirement: "Controlled AOP laboratory experiments",
    abhijeetMatch:
      "Trained in sterile technique, aseptic culture, chromatography, upstream/downstream processing, DoE methodology",
    projectSource: "Projects 1 & 3",
  },
  {
    requirement: "Geochemical modelling (PHREEQC)",
    abhijeetMatch:
      "Evaluated 9 soil simulation models; proficient in Aspen Plus/HYSYS, MATLAB, Python — PHREEQC is a natural extension",
    projectSource: "Projects 2 & 5",
  },
  {
    requirement: "Collaboration with biological extraction and AI optimisation partners",
    abhijeetMatch:
      "Built AI-assisted feasibility model; designed bioleaching cascades; interdisciplinary collaboration is the thread connecting all 5 projects",
    projectSource: "Projects 4 & all",
  },
];
