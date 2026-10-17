import React from "react";
import Link from "next/link";
import { ArrowRight, Download, Layers } from "lucide-react";
import { CIVIC_RESOURCES } from "@/data/resources";

export function ResearchResourcesSection() {
  const featuredResource = CIVIC_RESOURCES.find((r) => r.featured) || CIVIC_RESOURCES[0];
  const sideResources = CIVIC_RESOURCES.filter((r) => r.id !== featuredResource.id).slice(0, 3);

  return (
    <section className="py-20 bg-white border-b border-[#E9D8B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Masthead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E9D8B8]">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-[#C96B45] font-bold">
              Public Knowledge Repository
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3F32] tracking-tight">
              Research, Reports & Civic Guides
            </h2>
            <p className="text-sm sm:text-base text-slate-700">
              Open-access baseline studies, policy briefs, and practical administrative handbooks published for public utility.
            </p>
          </div>
          <Link
            href="/research-and-resources"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#176B4D] hover:text-[#0B3F32] group shrink-0"
          >
            <span>All Publications</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Layout: Lead Institutional Study + Document Register */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Lead Publication */}
          <div className="lg:col-span-5 bg-[#0B3F32] text-white p-6 sm:p-8 flex flex-col justify-between border border-[#176B4D]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#176B4D] pb-3 text-xs font-mono">
                <span className="text-[#D99A2B] font-bold uppercase">
                  {featuredResource.type}
                </span>
                <span className="text-slate-300">
                  {featuredResource.publicationDate}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                {featuredResource.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {featuredResource.description}
              </p>

              <div className="pt-2 text-xs text-slate-400 space-y-1 font-mono">
                <div>
                  <span className="text-[#E9D8B8]">Authors:</span> {featuredResource.authors.join(", ")}
                </div>
                <div>
                  <span className="text-[#E9D8B8]">Specification:</span> {featuredResource.pages} Pages • {featuredResource.fileSize} ({featuredResource.format})
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#176B4D]">
              <a
                href={featuredResource.downloadUrl}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#E9D8B8] text-[#0B3F32] hover:bg-white transition-colors text-xs font-bold uppercase tracking-wider"
              >
                <Download className="w-4 h-4" />
                <span>Download Report ({featuredResource.format})</span>
              </a>
            </div>
          </div>

          {/* Secondary Publications Register */}
          <div className="lg:col-span-7 space-y-4">
            {sideResources.map((res) => (
              <div
                key={res.id}
                className="bg-[#F8F6F0] p-5 sm:p-6 border border-[#E9D8B8] hover:border-[#176B4D] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                    <span className="font-bold text-[#176B4D] uppercase">
                      {res.type}
                    </span>
                    <span>•</span>
                    <span>{res.publicationDate}</span>
                    <span>•</span>
                    <span className="text-slate-400">{res.fileSize}</span>
                  </div>

                  <h4 className="text-base font-bold text-[#0B3F32] group-hover:text-[#176B4D] transition-colors leading-snug">
                    <Link href="/research-and-resources">
                      {res.title}
                    </Link>
                  </h4>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {res.description}
                  </p>
                </div>

                <div className="shrink-0 pt-2 sm:pt-0">
                  <a
                    href={res.downloadUrl}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0B3F32] bg-white hover:bg-[#E9D8B8] border border-[#E9D8B8] transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-[#C96B45]" />
                    <span>PDF</span>
                  </a>
                </div>
              </div>
            ))}

            {/* Public Dataset Note */}
            <div className="p-4 bg-white border border-[#E9D8B8] text-xs text-slate-700 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#176B4D]" />
                <span>Open GIS boundaries and ward shapefiles available in research repository.</span>
              </span>
              <Link
                href="/research-and-resources#standards"
                className="font-bold text-[#176B4D] hover:underline"
              >
                Access Data →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
