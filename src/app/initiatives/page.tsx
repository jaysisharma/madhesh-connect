import React from "react";
import Link from "next/link";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { INITIATIVES } from "@/data/initiatives";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Initiatives — Madhesh Connect",
  description:
    "Explore community initiatives, civic pilots, and public programs active across Madhesh Province.",
};

export default function InitiativesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F0] text-[#1B211E]">
      <UtilityBar />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#0B3F32] text-white py-16 sm:py-24 border-b border-[#176B4D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-[#D99A2B]">
              Field Work & Civic Programs
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
              Initiatives
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Transparent, locally verified civic programs designed to strengthen community networks, agricultural resilience, youth fellowships, and municipal documentation.
            </p>
          </div>
        </section>

        {/* Directory Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6 text-xs text-slate-500">
              <span className="font-semibold text-[#0B3F32] text-sm">
                Showing all {INITIATIVES.length} active civic initiatives
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded bg-[#F8F6F0] text-[#176B4D] font-medium border border-slate-200">
                  All 8 Districts
                </span>
                <span className="px-2.5 py-1 rounded bg-[#F8F6F0] text-[#176B4D] font-medium border border-slate-200">
                  Community Verified
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {INITIATIVES.map((initiative) => (
                <article
                  key={initiative.id}
                  className="bg-[#F8F6F0] rounded-2xl border border-[#E9D8B8]/80 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                      <img
                        src={initiative.coverImage}
                        alt={initiative.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#0B3F32]/90 text-white backdrop-blur-xs">
                          {initiative.category}
                        </span>
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/90 text-[#0B3F32] backdrop-blur-xs">
                          {initiative.status}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[#C96B45]" />
                        <span>{initiative.location}</span>
                      </div>

                      <h3 className="text-lg font-bold text-[#0B3F32] group-hover:text-[#176B4D] transition-colors leading-snug">
                        <Link href={`/initiatives/${initiative.slug}`}>
                          {initiative.title}
                        </Link>
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {initiative.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-slate-200/60 mt-4 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      Started: {initiative.startDate}
                    </span>
                    <Link
                      href={`/initiatives/${initiative.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#176B4D] group-hover:text-[#C96B45] transition-colors"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
