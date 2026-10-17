export interface Story {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: "Community Voice" | "Field Report" | "Civic Tech" | "Research Insights";
  district: string;
  tags: string[];
  featured: boolean;
}

export const STORIES: Story[] = [
  {
    id: "story-1",
    title: "How Ward 4 in Janakpur Streamlined Public Recommendations for Elder Pensions",
    slug: "janakpur-ward-4-elder-pensions",
    excerpt:
      "A pilot blending localized address normalization and volunteer youth accompaniment cut citizen wait times from three days to under forty minutes.",
    content: `
For elderly residents in ward 4 of Janakpurdham, obtaining official recommendation letters for social security allowance renewals used to mean repeated journeys across municipal offices. Differences in citizenship record spellings, handwritten family tree documents, and confusion around recent ward boundary redrawing created recurring hurdles.

Last November, local youth fellows from the Madhesh Civic Youth Fellowship collaborated with ward clerks to test a simplified intake counter. Equipped with an address normalization index and vernacular forms, fellows helped seniors transcribe their documents before reaching the official desk.

"When we treat public paperwork not as a test of endurance, but as an essential civic service, everything changes," shares ward secretary Manoj Jha. The pilot is now being considered for expansion across five adjacent wards.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200&auto=format&fit=crop",
    author: "Sita Kumari Sah",
    authorRole: "Civic Youth Fellow, Janakpurdham",
    date: "October 2, 2026",
    readTime: "5 min read",
    category: "Field Report",
    district: "Dhanusha",
    tags: ["Civic Services", "Elder Welfare", "Local Governance", "Janakpur"],
    featured: true,
  },
  {
    id: "story-2",
    title: "From Monsoons to Mobile: Grassroots Weather Logs Empower Siraha Farmers",
    slug: "grassroots-weather-logs-siraha-farmers",
    excerpt:
      "When regional radar forecasts miss hyper-local Terai cloud bursts, women-led agricultural cooperatives step in with rain gauges and SMS bulletins.",
    content: `
In the southern flatlands of Siraha, twenty kilometers from the Indian border, rain can flood one village while leaving an adjoining field dry. National meteorological bulletins provide provincial generalizations that rarely suffice for time-critical paddy transplantation.

A network of fourteen women farmer groups in Golbazar and Lahan have adopted community rain stations. Twice daily, readings are compiled into a shared SMS circle, guiding irrigation pump rentals and collective fertilizer application.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop",
    author: "Rameshwar Yadav",
    authorRole: "Agricultural Coordinator, Siraha",
    date: "September 24, 2026",
    readTime: "4 min read",
    category: "Community Voice",
    district: "Siraha",
    tags: ["Agriculture", "Climate Resilience", "Cooperative Action"],
    featured: false,
  },
  {
    id: "story-3",
    title: "Building Privacy-First Civic Digital Tools for Local Administration",
    slug: "privacy-first-civic-digital-tools",
    excerpt:
      "Why Madhesh Connect prioritizes open-source local execution and human review over automated third-party black-box algorithms.",
    content: `
Deploying digital technology in civic contexts requires strict ethical guardrails. When handling citizenship numbers, land parcel references, or vulnerable community grievances, convenience must never compromise data dignity.

Our technical architecture operates under three non-negotiable principles: zero third-party commercial tracking, human-in-the-loop review for every administrative output, and explicit multilingual support in Maithili, Bhojpuri, and Nepali.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    author: "Pooja Thakur",
    authorRole: "Digital Infrastructure Lead",
    date: "September 15, 2026",
    readTime: "6 min read",
    category: "Civic Tech",
    district: "Parsa",
    tags: ["Digital Ethics", "Open Source", "Civic Tech"],
    featured: false,
  },
];

export interface CivicEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  district: string;
  description: string;
  category: "Town Hall" | "Workshop" | "Symposium" | "Consultation";
  registrationUrl: string;
  status: "Upcoming" | "Completed";
}

export const CIVIC_EVENTS: CivicEvent[] = [
  {
    id: "event-1",
    title: "Madhesh Civic Information & RTI Consultation Forum",
    date: "October 18, 2026",
    time: "10:30 AM – 3:30 PM NPT",
    location: "Janakpurdham Municipal Civic Hall, Dhanusha",
    district: "Dhanusha",
    description:
      "A district-wide public convening bringing together ward representatives, civil society researchers, and community journalists to review public information access practices and municipal transparency.",
    category: "Town Hall",
    registrationUrl: "/contact",
    status: "Upcoming",
  },
  {
    id: "event-2",
    title: "Terai Water Commons & Ground Hydrology Symposium",
    date: "November 4, 2026",
    time: "9:00 AM – 4:00 PM NPT",
    location: "Birgunj Chamber Auditorium, Parsa",
    district: "Parsa",
    description:
      "Presenting field findings from the 8-district pond inventory and discussing community-managed aquifer replenishment ahead of the dry winter season.",
    category: "Symposium",
    registrationUrl: "/contact",
    status: "Upcoming",
  },
  {
    id: "event-3",
    title: "Vernacular Civic Tech & Open Data Workshop",
    date: "November 22, 2026",
    time: "1:00 PM – 5:00 PM NPT",
    location: "Community Resource Center, Lahan, Siraha",
    district: "Siraha",
    description:
      "Hands-on session for youth organizers and local students on utilizing open address normalization tools and public documentation datasets.",
    category: "Workshop",
    registrationUrl: "/contact",
    status: "Upcoming",
  },
];
