import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FOCUS_AREAS } from "@/data/focusAreas";

export function FocusAreasSection() {
  return (
    <section className="py-20 bg-white border-b border-[#E9D8B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b-2 border-[#0B3F32]">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-[#C96B45] font-bold">
              Programmatic Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3F32] tracking-tight">
              Five Core Focus Areas
            </h2>
            <p className="text-sm sm:text-base text-slate-700">
              Structured domains addressing real civic, informational, and social priorities across the eight districts of Madhesh.
            </p>
          </div>
          <Link
            href="/our-work"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#176B4D] hover:text-[#0B3F32] group shrink-0"
          >
            <span>Complete Framework</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Structured Institutional Agenda Rows */}
        <div className="divide-y divide-[#E9D8B8]">
          {FOCUS_AREAS.map((area) => (
            <div
              key={area.id}
              className="py-8 sm:py-10 grid lg:grid-cols-12 gap-6 items-start hover:bg-[#F8F6F0]/80 transition-colors px-2 sm:px-4"
            >
              {/* Column 1: Number & Title */}
              <div className="lg:col-span-4 flex items-baseline gap-4">
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[#C96B45]">
                  {area.number}
                </span>
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B3F32] tracking-tight">
                    {area.title}
                  </h3>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                    Madhesh Civic Priority
                  </span>
                </div>
              </div>

              {/* Column 2: Specific Description & Scope */}
              <div className="lg:col-span-6 space-y-3">
                <p className="text-sm text-slate-700 leading-relaxed">
                  {area.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                  {area.pillars.slice(0, 3).map((pillar, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-[#E9D8B8] text-[11px] text-slate-700"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#176B4D]"></span>
                      {pillar}
                    </span>
                  ))}
                </div>
              </div>

              {/* Column 3: Direct Link */}
              <div className="lg:col-span-2 flex lg:justify-end items-center pt-2 lg:pt-0">
                <Link
                  href={`/our-work#${area.id}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#176B4D] hover:text-[#C96B45] transition-colors"
                >
                  <span>Read Overview</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
