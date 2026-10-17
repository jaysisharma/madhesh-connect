import React from "react";
import Link from "next/link";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CIVIC_RESOURCES } from "@/data/resources";
import { Download, Layers } from "lucide-react";

export const metadata = {
  title: "Research & Resources — Madhesh Connect",
  description:
    "Open access research papers, policy briefs, municipal baseline assessments, and civic toolkits for Madhesh Province.",
};

export default function ResearchAndResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F0] text-[#1B211E]">
      <UtilityBar />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#0B3F32] text-white py-16 sm:py-24 border-b border-[#176B4D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-[#D99A2B]">
              Open Knowledge Commons
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
              Research & Resources
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Field-grounded baseline studies, municipal performance audits, environmental policy briefs, and open-source civic specifications published under open knowledge licenses.
            </p>
          </div>
        </section>

        {/* Publications List */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6 text-xs text-slate-500">
              <span className="font-semibold text-[#0B3F32] text-sm">
                Publications & Field Toolkits ({CIVIC_RESOURCES.length} items)
              </span>
              <span className="text-[#176B4D] font-medium">
                Free & Open Access (CC-BY 4.0)
              </span>
            </div>

            <div className="space-y-6">
              {CIVIC_RESOURCES.map((res) => (
                <div
                  key={res.id}
                  className="bg-[#F8F6F0] p-6 sm:p-8 rounded-2xl border border-slate-200 hover:border-[#E9D8B8] transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="px-2.5 py-0.5 rounded font-bold uppercase tracking-wider text-[10px] bg-[#176B4D]/10 text-[#176B4D]">
                        {res.type}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500">{res.publicationDate}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500">{res.pages} Pages ({res.fileSize})</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#0B3F32]">
                      {res.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                      {res.description}
                    </p>

                    <div className="text-xs text-slate-500 pt-1">
                      <span className="font-semibold text-slate-700">Authors:</span> {res.authors.join(", ")} | <span className="font-semibold text-slate-700">Topic:</span> {res.topic}
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-3">
                    <a
                      href={res.downloadUrl}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0B3F32] hover:bg-[#176B4D] text-white text-xs font-bold transition-colors shadow-xs"
                    >
                      <Download className="w-4 h-4 text-[#D99A2B]" />
                      <span>Download {res.format}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Open Standards Note */}
            <div id="standards" className="scroll-mt-28 p-8 rounded-3xl bg-[#E9D8B8]/30 border border-[#E9D8B8] space-y-4">
              <div className="flex items-center gap-2 text-[#0B3F32] font-bold text-lg">
                <Layers className="w-5 h-5 text-[#C96B45]" />
                <span>Open Data Standards & Ontology</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-3xl">
                Madhesh Connect maintains an open GitHub repository of machine-readable geographic datasets for Madhesh Province: including local level boundary identifiers, ward centroid coordinates, and historical VDC-to-municipality crosswalks.
              </p>
              <div className="pt-2">
                <Link
                  href="/civic-technology"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#176B4D] hover:underline"
                >
                  <span>Explore the Civic Tech Architecture</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
