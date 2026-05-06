import type { ComponentType } from "react";
import SlideTitle from "@/components/slides/SlideTitle";
import SlideMission from "@/components/slides/SlideMission";
import SlidePortfolio from "@/components/slides/SlidePortfolio";
import SlideEvidence from "@/components/slides/SlideEvidence";
import SlideVRIS from "@/components/slides/SlideVRIS";
import SlideRelatedness from "@/components/slides/SlideRelatedness";
import SlideMotives from "@/components/slides/SlideMotives";
import SlideSources from "@/components/slides/SlideSources";
import SlideFits from "@/components/slides/SlideFits";
import SlideRisks from "@/components/slides/SlideRisks";
import SlideRecs from "@/components/slides/SlideRecs";
import SlideClosing from "@/components/slides/SlideClosing";

export type SectionId = "setup" | "evidence" | "diagnosis" | "implications";

export interface SlideDef {
  id: string;
  title: string;
  section: SectionId;
  Component: ComponentType<{ active: boolean }>;
}

export const SECTIONS: { id: SectionId; label: string }[] = [
  { id: "setup", label: "Setup" },
  { id: "evidence", label: "Evidence & Resources" },
  { id: "diagnosis", label: "Diagnosis" },
  { id: "implications", label: "Implications" },
];

export const SLIDES: SlideDef[] = [
  { id: "title", title: "General Electric", section: "setup", Component: SlideTitle },
  { id: "mission", title: "Mission, Vision & Goals", section: "setup", Component: SlideMission },
  { id: "portfolio", title: "Portfolio & Scope", section: "setup", Component: SlidePortfolio },
  { id: "evidence", title: "Evidence of Value Creation", section: "evidence", Component: SlideEvidence },
  { id: "vris", title: "Strategic Resources (VRIS)", section: "evidence", Component: SlideVRIS },
  { id: "relatedness", title: "Resource Relatedness", section: "evidence", Component: SlideRelatedness },
  { id: "sources", title: "Four Sources of Diversification Value", section: "diagnosis", Component: SlideSources },
  { id: "motives", title: "Motives for Diversification", section: "diagnosis", Component: SlideMotives },
  { id: "oi", title: "Organizational Infrastructure", section: "diagnosis", Component: SlideOI },
  { id: "fits", title: "Three Fits Synthesis", section: "diagnosis", Component: SlideFits },
  { id: "risks", title: "Risk Register", section: "implications", Component: SlideRisks },
  { id: "recs", title: "Recommendations", section: "implications", Component: SlideRecs },
  { id: "closing", title: "Closing", section: "implications", Component: SlideClosing },
];

export function slidesBySection() {
  return SECTIONS.map((s) => ({
    ...s,
    slides: SLIDES.map((sl, i) => ({ ...sl, index: i })).filter((sl) => sl.section === s.id),
  }));
}
