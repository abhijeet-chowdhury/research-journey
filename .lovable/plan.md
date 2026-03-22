

## Interactive Research Journey Showcase

A step-by-step interactive app that walks through Abhijeet's 5 projects, showing what he did, what he learned, and how each learning feeds into the next project — culminating in DC12 alignment.

### Core Interaction

A stepper/carousel where each step is one project. Each step shows:
- Project title, institution, year
- "What I Did" section
- "Key Finding" highlight
- "What I Learned" callout
- A "bridge" animation/card showing how this learning connects to the next project
- Next/Previous navigation

Final step (step 6): DC12 Alignment — showing how all accumulated learnings map directly to the DC12 position requirements.

### Visual Flow

```text
[Project 1] → bridge → [Project 2] → bridge → [Project 3] → bridge → [Project 4] → [Project 5] → [DC12 Fit]
     ↑ step indicator dots across the top ↑
```

### Files to Create

| File | Purpose |
|------|---------|
| `src/data/projects.ts` | All 5 projects with did/learned/bridge fields + DC12 mapping |
| `src/data/skills.ts` | Categorized skills |
| `src/components/HeroSection.tsx` | Name, tagline, intro |
| `src/components/ResearchStepper.tsx` | Stepper with step indicators, prev/next, transition |
| `src/components/ProjectStep.tsx` | Single project view |
| `src/components/BridgeCard.tsx` | "This learning led to..." connector between steps |
| `src/components/DC12Alignment.tsx` | Final step: requirements vs experience |
| `src/components/SkillsMatrix.tsx` | Skill badges at bottom |
| `src/pages/Index.tsx` | Compose everything |
| `src/index.css` | Academic navy/teal color palette |

### Design

- Dark navy (`#0f172a`) background with teal (`#14b8a6`) accents
- Cards with subtle glassmorphism
- Step indicator shows progress across top
- Smooth fade/slide transitions between steps
- "Bridge" cards glow with teal accent to emphasize the learning connection
- Responsive: full-width cards on mobile, centered max-width on desktop

