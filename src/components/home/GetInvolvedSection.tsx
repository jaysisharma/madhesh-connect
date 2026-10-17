import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function GetInvolvedSection() {
  const pathways = [
    {
      title: "Participate",
      target: "For Residents & Youth",
      headline: "Join community initiatives in your home ward.",
      actions: [
        "Attend local ward consultation hearings",
        "Join community agricultural knowledge circles",
        "Apply for the Madhesh Civic Youth Fellowship",
      ],
      actionLabel: "Join as Resident or Youth",
      href: "/get-involved?type=participate",
    },
    {
      title: "Collaborate",
      target: "For Municipalities & Collectives",
      headline: "Partner on civic tools and open public data.",
      actions: [
        "Test address normalization at municipal front desks",
        "Connect producer cooperatives to weather circles",
        "Co-host district RTI information clinics",
      ],
      actionLabel: "Institutional Partnership",
      href: "/get-involved?type=collaborate",
    },
    {
      title: "Contribute",
      target: "For Researchers & Advocates",
      headline: "Share knowledge, documentation, or field data.",
      actions: [
        "Contribute baseline studies to open repository",
        "Assist vernacular translation into Maithili or Bhojpuri",
        "Provide pro-bono mentorship to youth fellows",
      ],
      actionLabel: "Contribute Knowledge",
      href: "/get-involved?type=contribute",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white border-b border-[#E9D8B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Masthead */}
        <div className="max-w-3xl space-y-3 mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#C96B45] font-bold">
            Public Participation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3F32] tracking-tight">
            Be part of a more connected Madhesh.
          </h2>
          <p className="text-base text-slate-700 leading-relaxed font-normal">
            Durable civic capability requires broad, ongoing participation. Choose the engagement track that aligns with your role and community.
          </p>
        </div>

        {/* 3 Structured Engagement Tracks */}
        <div className="grid md:grid-cols-3 gap-8">
          {pathways.map((path) => (
            <div
              key={path.title}
              className="bg-[#F8F6F0] p-6 sm:p-8 border border-[#E9D8B8] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="border-b border-[#E9D8B8] pb-3 flex items-baseline justify-between">
                  <h3 className="text-2xl font-bold text-[#0B3F32]">
                    {path.title}
                  </h3>
                  <span className="text-[10px] font-mono uppercase font-bold text-[#C96B45]">
                    {path.target}
                  </span>
                </div>

                <div className="text-sm font-semibold text-slate-800 leading-snug">
                  {path.headline}
                </div>

                <ul className="space-y-2 text-xs text-slate-600 pt-1">
                  {path.actions.map((act, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#176B4D] font-bold text-xs mt-0.5">✓</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#E9D8B8]">
                <Link
                  href={path.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#176B4D] hover:text-[#0B3F32] transition-colors"
                >
                  <span>{path.actionLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Primary Engagement Note */}
        <div className="mt-12 p-6 bg-[#0B3F32] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#176B4D]">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-base text-white">
              Civic participation is open across all 8 districts.
            </h4>
            <p className="text-xs text-slate-300">
              No commercial fees, party affiliation, or prior technical background required.
            </p>
          </div>
          <Link
            href="/get-involved"
            className="px-6 py-3 bg-[#C96B45] hover:bg-[#b05834] text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-xs"
          >
            <span>Register Your Interest</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
