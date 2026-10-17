import React from "react";
import Link from "next/link";
import { ArrowRight, Database, Search, Languages, FileText } from "lucide-react";

export function CivicTechSection() {
  const pillars = [
    {
      title: "Vernacular Address Normalization",
      icon: Database,
      tag: "Local Standards",
      desc: "Resolves informal, vernacular, and colloquial location references (e.g., 'Janakpur-4' or 'Simara-3') into official federal jurisdiction records across all 136 local bodies and 1,271 wards.",
      practicalOutcome: "Prevents citizens from having social security or vital registration applications rejected due to spelling variations.",
    },
    {
      title: "Assisted Document Indexing",
      icon: FileText,
      tag: "Ward Administration",
      desc: "Assists municipal clerks in transcribing paper notices, citizen petitions, and grievance letters into structured digital registries with mandatory human-in-the-loop review.",
      practicalOutcome: "Reduces processing backlogs at frontline municipal intake counters while preserving official oversight.",
    },
    {
      title: "Grounded Smart Search",
      icon: Search,
      tag: "Public Access",
      desc: "Allows residents and researchers to ask natural language questions in everyday phrasing and retrieves answers strictly from verified, approved public records and publications.",
      practicalOutcome: "Citizens can discover public reports and programs without memorizing bureaucratic acronyms.",
    },
    {
      title: "Multilingual Verification",
      icon: Languages,
      tag: "Linguistic Inclusion",
      desc: "Supports translation and cross-verification across Maithili, Bhojpuri, and Nepali to ensure public information reaches linguistic communities accurately.",
      practicalOutcome: "Ensures civic notices are understood in maternal languages across eastern, central, and western Terai.",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white border-b border-[#E9D8B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-[#C96B45] font-bold">
            Public Digital Infrastructure
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3F32] tracking-tight">
            Technology that makes{" "}
            <span className="font-serif italic font-normal text-[#176B4D]">
              information more useful.
            </span>
          </h2>

          <p className="text-base text-slate-700 leading-relaxed font-normal">
            Madhesh Connect approaches technology as quiet public infrastructure. We build open, transparent tools designed to resolve tangible informational bottlenecks across wards and communities—always keeping human judgment at the center.
          </p>
        </div>

        {/* 4 Infrastructure Domains: Institutional Two-by-Two Grid */}
        <div className="grid md:grid-cols-2 gap-8 border-t border-[#E9D8B8] pt-10">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 sm:p-8 bg-[#F8F6F0] border border-[#E9D8B8] flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#C96B45]">
                    {pillar.tag}
                  </span>
                  <div className="w-8 h-8 rounded bg-white border border-[#E9D8B8] text-[#176B4D] flex items-center justify-center">
                    <pillar.icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#0B3F32]">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 text-xs text-slate-600">
                <strong className="text-[#0B3F32]">Civic impact:</strong> {pillar.practicalOutcome}
              </div>
            </div>
          ))}
        </div>

        {/* Concrete Case Study & Technical Link */}
        <div className="p-8 bg-[#0B3F32] text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border border-[#176B4D]">
          <div className="space-y-2 max-w-2xl">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#D99A2B] font-bold">
              Ethical Computing Standards
            </div>
            <h4 className="text-xl font-bold text-white">
              No black boxes. No commercial profiling.
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              All assistive algorithms operate under strict human-in-the-loop review. Public records and citizen submissions are never used to train commercial advertising models or shared without institutional authorization.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <Link
              href="/civic-technology"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#0B3F32] bg-[#E9D8B8] hover:bg-white transition-colors"
            >
              <span>Explore Technical Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
