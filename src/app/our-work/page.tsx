import React from "react";
import Link from "next/link";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FOCUS_AREAS } from "@/data/focusAreas";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Our Work — Madhesh Connect",
  description:
    "Explore our five core focus areas: Civic Engagement, Community, Digital Innovation, Research & Knowledge, and Youth & Opportunities across Madhesh.",
};

export default function OurWorkPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F0] text-[#1B211E]">
      <UtilityBar />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#0B3F32] text-white py-16 sm:py-24 border-b border-[#176B4D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-[#D99A2B]">
              Programmatic Framework
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
              Our Work
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Five institutional pillars bridging grassroots realities with sustainable public capabilities across all eight districts of Madhesh Province.
            </p>
          </div>
        </section>

        {/* Detailed Focus Areas */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-20">
            {FOCUS_AREAS.map((area) => (
              <div
                key={area.id}
                id={area.id}
                className="scroll-mt-28 p-8 sm:p-12 rounded-3xl bg-[#F8F6F0] border border-[#E9D8B8] space-y-8"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-slate-200 pb-6">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-4xl sm:text-5xl font-extrabold text-[#C96B45]">
                      {area.number}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3F32]">
                      {area.title}
                    </h2>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#176B4D]/10 text-[#176B4D] w-fit">
                    Core Focus Pillar
                  </span>
                </div>

                {/* Narrative */}
                <div className="space-y-4 max-w-4xl text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p className="font-medium text-slate-800">
                    {area.shortDescription}
                  </p>
                  <p className="text-slate-600">
                    {area.detailedDescription}
                  </p>
                </div>

                {/* Pillars & Objectives Split */}
                <div className="grid md:grid-cols-2 gap-8 pt-4">
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#176B4D]">
                      Key Programmatic Pillars
                    </h4>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                      {area.pillars.map((pillar, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#176B4D] shrink-0 mt-0.5" />
                          <span>{pillar}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#C96B45]">
                      Strategic Outcomes
                    </h4>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                      {area.keyObjectives.map((obj, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2">
                          <span className="text-[#C96B45] font-bold text-xs shrink-0 mt-0.5">
                            →
                          </span>
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <Link
                    href={`/initiatives?category=${encodeURIComponent(area.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#176B4D] hover:text-[#0B3F32]"
                  >
                    <span>View Related Initiatives</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
