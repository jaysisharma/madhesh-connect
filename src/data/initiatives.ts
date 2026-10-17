export interface Initiative {
  id: string;
  title: string;
  slug: string;
  category: "Civic Engagement" | "Community" | "Digital Innovation" | "Research & Knowledge" | "Youth & Opportunities";
  description: string;
  fullContent: string;
  coverImage: string;
  location: string;
  district: string;
  status: "Active" | "Ongoing" | "Pilot" | "Upcoming";
  startDate: string;
  endDate?: string;
  keyOutputs: string[];
  partners: string[];
  ctaLabel: string;
  ctaUrl: string;
  featured: boolean;
}

export const INITIATIVES: Initiative[] = [
  {
    id: "init-1",
    title: "Terai Agricultural Knowledge Exchange",
    slug: "terai-agricultural-knowledge-exchange",
    category: "Community",
    description:
      "Connecting smallholder farming communities across Dhanusha, Mahottari, and Sarlahi with localized weather data, soil guidance, and fair crop price visibility.",
    fullContent: `
The Terai Agricultural Knowledge Exchange (TAKE) addresses the critical information asymmetry faced by smallholder farmers in southern Nepal. By combining community-based agricultural extension with SMS and low-bandwidth digital bulletins, TAKE delivers actionable agro-climatic advisories directly to farmer collectives.

Farming families across Madhesh face rapid climatic shifts, erratic monsoons, and unpredictable input pricing. Rather than top-down advisories, the exchange pairs veteran agricultural practitioners with agronomists to produce weekly contextual guidance in Maithili and Bhojpuri.

Participating farmer groups also maintain community rainfall logs and soil moisture observations, feeding into an open shared registry that helps neighboring villages anticipate pest pressures and optimize irrigation schedules.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=1200&auto=format&fit=crop",
    location: "Dhanusha, Mahottari & Sarlahi Districts",
    district: "Dhanusha",
    status: "Active",
    startDate: "January 2024",
    keyOutputs: [
      "Weekly agro-bulletins delivered to 48 village producer cooperatives",
      "Localized rainfall and groundwater logging across 18 monitoring points",
      "Fair price bulletin boards installed in 12 rural weekly haat-bazaars",
    ],
    partners: ["Local Agricultural Cooperatives", "District Farmer Federations"],
    ctaLabel: "View Exchange Reports",
    ctaUrl: "/initiatives/terai-agricultural-knowledge-exchange",
    featured: true,
  },
  {
    id: "init-2",
    title: "Madhesh Civic Youth Fellowship",
    slug: "madhesh-civic-youth-fellowship",
    category: "Youth & Opportunities",
    description:
      "A 9-month cohort-based fellowship placing young researchers and community organizers inside municipal wards to support public service delivery and open data.",
    fullContent: `
The Madhesh Civic Youth Fellowship selects young graduates and grassroots organizers from across the 8 districts to embed directly with local ward offices and civic civil-society groups. Fellows receive intensive training in participatory planning, public documentation, Right to Information (RTI) processes, and digital tools.

Throughout their placement, fellows work on community-identified priorities—ranging from cataloging rural drinking water assets to helping elderly residents navigate vital event registration systems (birth, marriage, citizenship recommendations).

The fellowship bridges the generational and informational divide in municipal administration, cultivating a cadre of dedicated public-interest professionals rooted in their home districts.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
    location: "All 8 Districts of Madhesh Province",
    district: "Parsa",
    status: "Active",
    startDate: "August 2023",
    keyOutputs: [
      "24 young fellows deployed across 16 municipalities",
      "Assisted over 3,200 local residents with civic documentation workflows",
      "Produced 8 ward-level public asset maps with community verification",
    ],
    partners: ["Municipal Ward Committees", "Provincial Youth Networks"],
    ctaLabel: "Learn About Fellowship",
    ctaUrl: "/initiatives/madhesh-civic-youth-fellowship",
    featured: true,
  },
  {
    id: "init-3",
    title: "Ward Document & Address Intelligence Infrastructure",
    slug: "ward-document-address-intelligence",
    category: "Digital Innovation",
    description:
      "Open civic software pipeline enabling municipal staff and citizens to transcribe, normalize, and verify vernacular public records and localized address formats.",
    fullContent: `
Navigating municipal administrative paperwork in Nepal is often hampered by non-standardized location spelling, legacy paper records, and multilingual documentation. Madhesh Connect's Ward Document Intelligence initiative provides municipal front-desks with a lightweight, privacy-preserving assistant.

When a citizen submits a handwritten or typed application, the system assists municipal clerks in scanning and extracting key jurisdiction attributes—such as local ward, municipality type, and previous village development committee (VDC) mappings.

Crucially, the system utilizes human-in-the-loop verification, ensuring that municipal officers retain full oversight over official documentation while dramatically reducing registration backlogs.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop",
    location: "Pilot in Janakpurdham & Birgunj",
    district: "Dhanusha",
    status: "Pilot",
    startDate: "October 2024",
    keyOutputs: [
      "Open Madhesh address normalization ontology mapped for all 136 local bodies",
      "Assisted transcription pipeline deployed in 6 pilot ward desks",
      "Zero citizen personal data stored on unverified third-party servers",
    ],
    partners: ["Municipal Information Technology Units", "Open Data Nepal"],
    ctaLabel: "Explore the Technology",
    ctaUrl: "/civic-technology",
    featured: true,
  },
  {
    id: "init-4",
    title: "Groundwater & Community Pond Restoration Network",
    slug: "groundwater-community-pond-restoration",
    category: "Research & Knowledge",
    description:
      "Documenting and revitalizing traditional water ponds (Pokhari) across Mithila region to recharge groundwater aquifers and support resilient irrigation.",
    fullContent: `
The historic ponds of Janakpur and surrounding districts have sustained the Chure-Terai hydrology for centuries. In recent decades, unmanaged siltation and urban encroachment have degraded these natural aquifers, causing severe dry-season tube well depletion.

Madhesh Connect supports community-led water monitoring, combining satellite temporal imaging with water quality testing conducted by village youth volunteers. The resulting open pond atlas assists ward councils in prioritizing ecological desiltation and riparian embankment planting.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
    location: "Dhanusha, Mahottari & Saptari",
    district: "Mahottari",
    status: "Ongoing",
    startDate: "May 2024",
    keyOutputs: [
      "Open spatial atlas of 114 traditional public ponds",
      "Community water testing kits distributed across 15 high-vulnerability wards",
    ],
    partners: ["Community Water Users Associations", "Department of Water Resources"],
    ctaLabel: "View Water Atlas",
    ctaUrl: "/initiatives/groundwater-community-pond-restoration",
    featured: false,
  },
];
