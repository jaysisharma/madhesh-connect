export interface FocusArea {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  pillars: string[];
  keyObjectives: string[];
}

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: "civic-engagement",
    number: "01",
    title: "Civic Engagement",
    shortDescription:
      "Fostering transparent dialogue, public participation, and community-led consultation across wards and municipalities.",
    detailedDescription:
      "Civic engagement at Madhesh Connect is built around the fundamental truth that local democracy thrives when people have accessible avenues to speak, consult, and collaborate with their local governance institutions. We create open spaces, public hearings support, and civic information resources that empower residents to participate constructively in municipal decisions.",
    pillars: [
      "Ward-level citizen consultation forums",
      "Public information access & right to information (RTI)",
      "Participatory planning & social accountability",
      "Community grievance feedback loops",
    ],
    keyObjectives: [
      "Strengthen citizen-local government interfaces across all 8 districts",
      "Demystify municipal budgets and annual development plans",
      "Support vulnerable communities in exercising civic rights",
    ],
  },
  {
    id: "community",
    number: "02",
    title: "Community",
    shortDescription:
      "Strengthening grassroots collectives, farmer networks, women's cooperatives, and local cultural commons.",
    detailedDescription:
      "Communities in Madhesh hold rich traditions of collective action, mutual assistance, and cultural heritage. We work closely with grassroots self-help groups, community-based agricultural organizations, and indigenous collectives to build resilient community commons and mutual aid networks.",
    pillars: [
      "Agricultural producer groups & local seed networks",
      "Community flood & climate resilience circles",
      "Mithila cultural heritage & vernacular documentation",
      "Neighborhood mutual aid and voluntary leagues",
    ],
    keyObjectives: [
      "Amplify grassroots solutions developed by local residents",
      "Bridge rural-urban community linkages within the Terai corridor",
      "Preserve and celebrate local languages, traditions, and arts",
    ],
  },
  {
    id: "digital-innovation",
    number: "03",
    title: "Digital Innovation",
    shortDescription:
      "Developing open, responsible, and privacy-conscious civic digital infrastructure tailored to local realities.",
    detailedDescription:
      "Technology is an enabler, not an end in itself. Our digital innovation initiatives focus on practical tools that solve tangible informational frictions: document processing, localized address resolution, low-bandwidth data access, and multilingual interfaces in Maithili, Bhojpuri, and Nepali.",
    pillars: [
      "Localized civic data architectures",
      "Smart search and natural language information retrieval",
      "Assisted document OCR and address normalization",
      "Offline-first mobile workflows for field workers",
    ],
    keyObjectives: [
      "Make civic information discoverable and actionable",
      "Ensure low-cost, sustainable technology deployments",
      "Maintain strict data privacy and community ownership standards",
    ],
  },
  {
    id: "research-knowledge",
    number: "04",
    title: "Research & Knowledge",
    shortDescription:
      "Rigorous, independent field research, policy briefs, and open datasets documenting economic, social, and environmental dynamics.",
    detailedDescription:
      "Credible public action requires sound evidence. Our research stream collaborates with local academic scholars, policy analysts, and grassroots investigators to produce grounded studies on agrarian transitions, water and river basin management, cross-border commerce, and public service delivery.",
    pillars: [
      "Agrarian economy & rural livelihood assessments",
      "Water management & Terai groundwater monitoring",
      "Municipal governance performance reviews",
      "Open data repository for Madhesh development indicators",
    ],
    keyObjectives: [
      "Produce accessible, peer-reviewed policy briefs for local policymakers",
      "Maintain a repository of verified baseline datasets",
      "Build local analytical capacity among young researchers",
    ],
  },
  {
    id: "youth-opportunities",
    number: "05",
    title: "Youth & Opportunities",
    shortDescription:
      "Equipping young leaders with civic fellowships, digital literacy, apprenticeship pathways, and community leadership roles.",
    detailedDescription:
      "Youth form the demographic heartbeat of Madhesh. By connecting motivated young women and men with structured civic fellowships, digital tools, and mentor networks, we nurture the next generation of civic innovators, researchers, and community organizers.",
    pillars: [
      "Madhesh Civic Youth Fellowship program",
      "Digital skill-building for rural secondary school graduates",
      "Civic hackathons & community problem-solving sprints",
      "Mentorship networks with experienced practitioners",
    ],
    keyObjectives: [
      "Prevent talent drain by creating meaningful local civic pathways",
      "Foster inclusive youth leadership from marginalized backgrounds",
      "Connect students with internships in public administration and civic tech",
    ],
  },
];
