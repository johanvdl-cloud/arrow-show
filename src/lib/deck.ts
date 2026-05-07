import type { ComponentType } from "react";
import SlideTitle from "@/components/slides/SlideTitle";
import SlideExecSummary from "@/components/slides/SlideExecSummary";
import SlideMission from "@/components/slides/SlideMission";
import SlidePortfolio from "@/components/slides/SlidePortfolio";
import SlideVRIS from "@/components/slides/SlideVRIS";
import SlideRelatedness from "@/components/slides/SlideRelatedness";
import SlideMotives from "@/components/slides/SlideMotives";
import SlideEvidence from "@/components/slides/SlideEvidence";
import SlideOI from "@/components/slides/SlideOI";
import SlideFits from "@/components/slides/SlideFits";
import SlideRisks from "@/components/slides/SlideRisks";


import SlideClosing from "@/components/slides/SlideClosing";

export type SectionId = "setup" | "diagnosis" | "evidence" | "implications";

export interface SlideDef {
  id: string;
  title: string;
  section: SectionId;
  Component: ComponentType<{ active: boolean }>;
}

export const SECTIONS: { id: SectionId; label: string }[] = [
  { id: "setup", label: "Setup" },
  { id: "diagnosis", label: "Diagnosis" },
  { id: "evidence", label: "Evidence" },
  { id: "implications", label: "Implications" },
];

// Order follows Castañer's "Assessing & Developing a Corporate Strategy" template (First Session, slide 11):
//   0 Mission/Vision/Goals → 1 Businesses → 2 Strategic Resources (VRIS) → 3 Fit 1 (Resource Relatedness)
//   → 4 Motives + Evidence of Value Creation → 5 Organizational Infrastructure → 6 Fit 2 → 7 Fit 3
export const SLIDES: SlideDef[] = [
  { id: "title", title: "General Electric", section: "setup", Component: SlideTitle },
  { id: "execsummary", title: "Executive Summary", section: "setup", Component: SlideExecSummary },
  { id: "mission", title: "0 · Mission, Vision & Goals", section: "setup", Component: SlideMission },
  { id: "portfolio", title: "1 · Businesses - Portfolio & Scope", section: "setup", Component: SlidePortfolio },

  { id: "vris", title: "2 · Strategic Resources (VRIS)", section: "diagnosis", Component: SlideVRIS },
  { id: "relatedness", title: "3 · Fit 1 - Resource Relatedness", section: "diagnosis", Component: SlideRelatedness },
  { id: "motives", title: "4 · Motives for Diversification", section: "diagnosis", Component: SlideMotives },

  { id: "evidence", title: "4 · Evidence of Value Creation", section: "evidence", Component: SlideEvidence },
  { id: "oi", title: "5 · Organizational Infrastructure", section: "evidence", Component: SlideOI },
  { id: "fits", title: "6 & 7 · Fits 2 and 3 - Synthesis", section: "evidence", Component: SlideFits },

  { id: "risks", title: "Risk Register", section: "implications", Component: SlideRisks },
  
  
  { id: "closing", title: "Closing", section: "implications", Component: SlideClosing },
];

export function slidesBySection() {
  return SECTIONS.map((s) => ({
    ...s,
    slides: SLIDES.map((sl, i) => ({ ...sl, index: i })).filter((sl) => sl.section === s.id),
  }));
}
