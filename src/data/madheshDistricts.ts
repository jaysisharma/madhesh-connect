export interface LocalLevel {
  name: string;
  type: "Metropolitan City" | "Sub-Metropolitan City" | "Municipality" | "Rural Municipality";
  wards: number;
  aliases: string[];
}

export interface District {
  name: string;
  headquarters: string;
  localLevels: LocalLevel[];
}

export const MADHESH_DISTRICTS: District[] = [
  {
    name: "Dhanusha",
    headquarters: "Janakpurdham",
    localLevels: [
      {
        name: "Janakpurdham Sub-Metropolitan City",
        type: "Sub-Metropolitan City",
        wards: 25,
        aliases: ["janakpur", "janakpurdham", "jnkp", "janakpur city"],
      },
      {
        name: "Mithila Municipality",
        type: "Municipality",
        wards: 11,
        aliases: ["mithila", "dhalkebar"],
      },
      {
        name: "Dhanusadham Municipality",
        type: "Municipality",
        wards: 9,
        aliases: ["dhanusadham", "dhanusha dham"],
      },
      {
        name: "Chhireshwarnath Municipality",
        type: "Municipality",
        wards: 10,
        aliases: ["chhireshwarnath", "sakhuwa mahendranagar"],
      },
      {
        name: "Sabaila Municipality",
        type: "Municipality",
        wards: 13,
        aliases: ["sabaila"],
      },
    ],
  },
  {
    name: "Parsa",
    headquarters: "Birgunj",
    localLevels: [
      {
        name: "Birgunj Metropolitan City",
        type: "Metropolitan City",
        wards: 32,
        aliases: ["birgunj", "birganj", "brg"],
      },
      {
        name: "Pokhariya Municipality",
        type: "Municipality",
        wards: 10,
        aliases: ["pokhariya"],
      },
      {
        name: "Bahudaramai Municipality",
        type: "Municipality",
        wards: 9,
        aliases: ["bahudaramai"],
      },
    ],
  },
  {
    name: "Bara",
    headquarters: "Kalaiya",
    localLevels: [
      {
        name: "Kalaiya Sub-Metropolitan City",
        type: "Sub-Metropolitan City",
        wards: 27,
        aliases: ["kalaiya", "kalaiya city"],
      },
      {
        name: "Jeetpursimara Sub-Metropolitan City",
        type: "Sub-Metropolitan City",
        wards: 24,
        aliases: ["jeetpursimara", "simara", "jitpur"],
      },
      {
        name: "Kolhabi Municipality",
        type: "Municipality",
        wards: 11,
        aliases: ["kolhabi"],
      },
    ],
  },
  {
    name: "Mahottari",
    headquarters: "Jaleshwar",
    localLevels: [
      {
        name: "Jaleshwar Municipality",
        type: "Municipality",
        wards: 12,
        aliases: ["jaleshwar", "jaleshor"],
      },
      {
        name: "Bardibas Municipality",
        type: "Municipality",
        wards: 14,
        aliases: ["bardibas", "bardibash"],
      },
      {
        name: "Gaushala Municipality",
        type: "Municipality",
        wards: 12,
        aliases: ["gaushala"],
      },
    ],
  },
  {
    name: "Sarlahi",
    headquarters: "Malangwa",
    localLevels: [
      {
        name: "Malangwa Municipality",
        type: "Municipality",
        wards: 12,
        aliases: ["malangwa", "malangwa city"],
      },
      {
        name: "Lalbandi Municipality",
        type: "Municipality",
        wards: 17,
        aliases: ["lalbandi"],
      },
      {
        name: "Harion Municipality",
        type: "Municipality",
        wards: 11,
        aliases: ["harion", "hariwon"],
      },
    ],
  },
  {
    name: "Rautahat",
    headquarters: "Gaur",
    localLevels: [
      {
        name: "Gaur Municipality",
        type: "Municipality",
        wards: 9,
        aliases: ["gaur", "gaur city"],
      },
      {
        name: "Chandrapur Municipality",
        type: "Municipality",
        wards: 10,
        aliases: ["chandrapur", "chandranigahapur"],
      },
      {
        name: "Garuda Municipality",
        type: "Municipality",
        wards: 9,
        aliases: ["garuda"],
      },
    ],
  },
  {
    name: "Siraha",
    headquarters: "Siraha",
    localLevels: [
      {
        name: "Siraha Municipality",
        type: "Municipality",
        wards: 22,
        aliases: ["siraha", "siraha bazar"],
      },
      {
        name: "Lahan Municipality",
        type: "Municipality",
        wards: 24,
        aliases: ["lahan", "lahan city"],
      },
      {
        name: "Golbazar Municipality",
        type: "Municipality",
        wards: 13,
        aliases: ["golbazar"],
      },
    ],
  },
  {
    name: "Saptari",
    headquarters: "Rajbiraj",
    localLevels: [
      {
        name: "Rajbiraj Municipality",
        type: "Municipality",
        wards: 16,
        aliases: ["rajbiraj", "rajbiraj city"],
      },
      {
        name: "Kanchanrup Municipality",
        type: "Municipality",
        wards: 12,
        aliases: ["kanchanrup"],
      },
      {
        name: "Dakneshwari Municipality",
        type: "Municipality",
        wards: 10,
        aliases: ["dakneshwari"],
      },
    ],
  },
];

export interface NormalizedAddress {
  province: string;
  district: string;
  localLevel: string;
  ward: string;
  confidence: number;
  rawInput: string;
}

/**
 * Normalizes free-form Madhesh addresses into structured civic jurisdiction records
 * e.g. "Janakpur-4, Dhanusha" -> Province: Madhesh, District: Dhanusha, Local Level: Janakpurdham Sub-Metropolitan City, Ward: 4
 */
export function normalizeMadheshAddress(input: string): NormalizedAddress {
  const cleanInput = input.trim();
  const lower = cleanInput.toLowerCase();

  // Extract ward number if present: "-4", "ward 4", "w-4", " 4"
  const wardMatch = lower.match(/(?:ward\s*|w-?|-|\s)(\d{1,2})\b/);
  const wardNumber = wardMatch ? wardMatch[1] : "1";

  // Check against our database of districts and local levels
  let matchedDistrict = "Dhanusha";
  let matchedLocalLevel = "Janakpurdham Sub-Metropolitan City";
  let confidence = 0.75;

  for (const dist of MADHESH_DISTRICTS) {
    if (lower.includes(dist.name.toLowerCase())) {
      matchedDistrict = dist.name;
      confidence += 0.1;
    }

    for (const local of dist.localLevels) {
      const aliasMatch = local.aliases.some((alias) => lower.includes(alias));
      if (aliasMatch || lower.includes(local.name.toLowerCase())) {
        matchedDistrict = dist.name;
        matchedLocalLevel = local.name;
        confidence = 0.95;
        break;
      }
    }
  }

  return {
    province: "Madhesh Province",
    district: matchedDistrict,
    localLevel: matchedLocalLevel,
    ward: wardNumber,
    confidence: Math.min(confidence, 0.99),
    rawInput: cleanInput,
  };
}
