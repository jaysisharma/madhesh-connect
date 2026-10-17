import React from "react";

export function ApproachSection() {
  const phases = [
    {
      step: "01",
      title: "Listen",
      tagline: "Understand people and local needs.",
      narrative:
        "We spend time in ward offices, agricultural haat-bazaars, and community gatherings across the Terai—listening directly to residents, smallholders, and local clerks before framing any initiative.",
    },
    {
      step: "02",
      title: "Learn",
      tagline: "Use knowledge, research and community experience.",
      narrative:
        "Generational community practices are paired with grounded field data, environmental hydrology logs, and municipal records to understand underlying structural bottlenecks.",
    },
    {
      step: "03",
      title: "Build",
      tagline: "Create useful initiatives and digital tools.",
      narrative:
        "We develop open, lightweight, and privacy-respecting public solutions—from vernacular address ontologies to youth civic fellowship curricula and localized agro-climatic advisories.",
    },
    {
      step: "04",
      title: "Connect",
      tagline: "Bring people, information and opportunities together.",
      narrative:
        "We link village collectives with municipal services, youth with public administrative careers, and community researchers with decision-makers for durable, systemic progress.",
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E9D8B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Masthead */}
        <div className="max-w-3xl space-y-3 mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#C96B45] font-bold">
            Methodology & Working Practice
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3F32] tracking-tight">
            Our Approach
          </h2>
          <p className="text-base text-slate-700 leading-relaxed font-normal">
            A disciplined civic cycle ensuring every tool, initiative, and research paper remains accountable to local people and community realities.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono font-bold text-[#0B3F32]">
            <span className="px-2.5 py-1 bg-[#F8F6F0] border border-[#E9D8B8]">01 Listen</span>
            <span className="text-[#C96B45]">→</span>
            <span className="px-2.5 py-1 bg-[#F8F6F0] border border-[#E9D8B8]">02 Learn</span>
            <span className="text-[#C96B45]">→</span>
            <span className="px-2.5 py-1 bg-[#F8F6F0] border border-[#E9D8B8]">03 Build</span>
            <span className="text-[#C96B45]">→</span>
            <span className="px-2.5 py-1 bg-[#F8F6F0] border border-[#E9D8B8]">04 Connect</span>
          </div>
        </div>

        {/* Structured Horizontal Progression */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-[#E9D8B8] pt-10">
          {phases.map((phase) => (
            <div key={phase.title} className="space-y-4">
              <div className="flex items-baseline justify-between border-b border-slate-200 pb-3">
                <span className="font-mono text-3xl font-extrabold text-[#0B3F32]">
                  {phase.step}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C96B45]">
                  Phase {phase.title}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#0B3F32] tracking-tight">
                {phase.title}
              </h3>

              <div className="text-xs font-semibold text-[#176B4D] leading-snug">
                {phase.tagline}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {phase.narrative}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
