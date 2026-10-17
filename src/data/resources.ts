export interface CivicResource {
  id: string;
  title: string;
  type: "Research Paper" | "Policy Brief" | "Field Guide" | "Annual Review" | "Civic Toolkit";
  description: string;
  publicationDate: string;
  topic: string;
  pages: number;
  fileSize: string;
  format: "PDF" | "Dataset" | "Interactive";
  authors: string[];
  featured: boolean;
  downloadUrl: string;
}

export const CIVIC_RESOURCES: CivicResource[] = [
  {
    id: "res-1",
    title: "Madhesh Municipal Service Delivery Baseline Assessment (2025–2026)",
    type: "Research Paper",
    description:
      "A comprehensive field study analyzing citizen satisfaction, grievance redressal timeframes, and documentation bottlenecks across 32 sample wards in Madhesh Province.",
    publicationDate: "September 2026",
    topic: "Civic Governance & Municipal Services",
    pages: 64,
    fileSize: "3.4 MB",
    format: "PDF",
    authors: ["Madhesh Connect Research Collective", "Dr. A. K. Jha"],
    featured: true,
    downloadUrl: "#",
  },
  {
    id: "res-2",
    title: "Groundwater Depletion & Pond Ecology in Central Madhesh: Policy Brief",
    type: "Policy Brief",
    description:
      "Actionable recommendations for municipal executive committees on conserving traditional ponds, recharging shallow aquifers, and regulating seasonal tube-well extraction.",
    publicationDate: "July 2026",
    topic: "Water & Environmental Commons",
    pages: 18,
    fileSize: "1.2 MB",
    format: "PDF",
    authors: ["Terai Water Working Group"],
    featured: false,
    downloadUrl: "#",
  },
  {
    id: "res-3",
    title: "Right to Information (RTI) Civic Handbook for Community Advocates",
    type: "Civic Toolkit",
    description:
      "A practical, step-by-step guidebook in Maithili, Nepali, and English on filing RTI requests with ward and municipal public information officers (PIOs).",
    publicationDate: "June 2026",
    topic: "Civic Rights & Transparency",
    pages: 28,
    fileSize: "1.8 MB",
    format: "PDF",
    authors: ["Civic Youth Fellowship Team"],
    featured: false,
    downloadUrl: "#",
  },
  {
    id: "res-4",
    title: "Open Address Ontology & Local Jurisdiction Standard for Madhesh",
    type: "Field Guide",
    description:
      "Technical specification documenting the standard hierarchy, legacy VDC crosswalks, and vernacular spelling variants for all 136 local levels and 1,271 wards.",
    publicationDate: "May 2026",
    topic: "Digital Public Infrastructure",
    pages: 42,
    fileSize: "2.1 MB",
    format: "PDF",
    authors: ["Civic Technology Unit"],
    featured: false,
    downloadUrl: "#",
  },
];
