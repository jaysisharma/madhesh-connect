import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 md:py-24 bg-[#F8F6F0] border-b border-[#E9D8B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Documentary Image with Clean Photographic Frame */}
          <div className="lg:col-span-5 space-y-3">
            <div className="border border-[#E9D8B8] bg-white p-2">
              <div className="aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=1200&auto=format&fit=crop"
                  alt="Agricultural landscape and smallholder farmers in Madhesh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-[11px] text-slate-500 leading-normal border-l-2 border-[#176B4D] pl-3 py-0.5">
              Agricultural heartlands of southern Nepal: where local collective action and generational knowledge form the backbone of community resilience.
            </p>
          </div>

          {/* Right Column: Grounded Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#C96B45] font-bold">
              Institutional Background
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3F32] tracking-tight leading-tight">
              A platform built around{" "}
              <span className="font-serif italic font-normal text-[#C96B45]">
                people and possibility.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
              Madhesh Connect connects people, communities, knowledge and opportunities through meaningful civic participation and useful technology.
            </p>

            <div className="p-5 bg-white border-l-4 border-[#0B3F32] text-slate-800 text-sm leading-relaxed font-serif italic">
              &ldquo;Our vision is a more connected Madhesh where people have greater access to information, opportunities, and meaningful participation.&rdquo;
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Madhesh represents an intricate civic tapestry—from the historic Mithila cultural centers to bustling border trade corridors. Yet public notices remain fragmented, vital municipal procedures are obscured by jargon, and localized research rarely reaches the ward councils where decisions are made.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              We operate not as a commercial tech company or bureaucratic office, but as an open civic foundation: nurturing local youth fellows, supporting smallholder agricultural cooperatives, and deploying responsible digital tools to solve everyday informational friction.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#176B4D] hover:text-[#0B3F32] transition-colors"
              >
                <span>Read Full Mission & Principles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
