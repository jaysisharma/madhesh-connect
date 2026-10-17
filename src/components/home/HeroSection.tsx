import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-[#F8F6F0] pt-12 pb-16 md:pt-16 md:pb-24 border-b border-[#E9D8B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Institutional Masthead / Category Descriptor */}
        <div className="flex items-center gap-3 pb-6 border-b border-[#E9D8B8] text-xs font-semibold tracking-wider uppercase text-[#0B3F32]">
          <span className="text-[#C96B45]">Madhesh, Nepal</span>
          <span className="text-slate-300">/</span>
          <span>Civic Information & Community Platform</span>
          <span className="text-slate-300">/</span>
          <span className="text-slate-500 font-normal">Est. Public Initiative</span>
        </div>

        {/* Main Headline & Editorial Grid */}
        <div className="grid lg:grid-cols-12 gap-12 pt-10 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B3F32] leading-[1.14]">
              Connecting Madhesh for a{" "}
              <span className="font-serif italic font-normal text-[#C96B45]">
                brighter tomorrow.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-800 leading-relaxed max-w-2xl font-normal">
              Madhesh Connect brings people, communities, information and opportunities together through meaningful civic engagement and technology.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              From the agricultural heartlands of Saptari and Siraha to the urban corridors of Janakpurdham and Birgunj, we work to make local public information accessible, community voices heard, and digital tools useful for everyday life.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/our-work"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#176B4D] hover:bg-[#0B3F32] transition-colors shadow-xs"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0B3F32] bg-white hover:bg-[#E9D8B8]/50 border border-[#E9D8B8] transition-colors"
              >
                <span>Learn About Us</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Documentary Photography with Authentic Photojournalism Caption */}
          <div className="lg:col-span-5 space-y-3">
            <div className="overflow-hidden border border-[#E9D8B8] bg-white p-2 shadow-xs">
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200&auto=format&fit=crop"
                  alt="Civic dialogue and community consultation in Madhesh Province"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Authentic editorial caption */}
            <div className="text-[11px] text-slate-600 leading-normal border-l-2 border-[#C96B45] pl-3 py-0.5">
              <strong className="text-[#0B3F32]">Community consultation in Janakpurdham:</strong>{" "}
              Local ward residents, women&apos;s agricultural representatives, and youth fellows convening to review municipal service accessibility and vital registration procedures.
            </div>
          </div>
        </div>

        {/* Institutional Baseline Bar: Grounded Facts */}
        <div className="mt-14 pt-6 border-t border-[#E9D8B8] grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-slate-600">
          <div>
            <span className="font-mono text-[10px] uppercase font-bold text-[#C96B45] block">
              Jurisdiction
            </span>
            <strong className="text-[#0B3F32] text-sm block mt-0.5">
              Madhesh Province
            </strong>
            <span className="text-[11px] text-slate-500">
              8 Terai Districts, 136 Local Levels
            </span>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase font-bold text-[#C96B45] block">
              Primary Principle
            </span>
            <strong className="text-[#0B3F32] text-sm block mt-0.5">
              People Before Technology
            </strong>
            <span className="text-[11px] text-slate-500">
              Community-driven participation
            </span>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase font-bold text-[#C96B45] block">
              Vernacular Access
            </span>
            <strong className="text-[#0B3F32] text-sm block mt-0.5">
              Maithili • Bhojpuri • Nepali
            </strong>
            <span className="text-[11px] text-slate-500">
              Multilingual civic publishing
            </span>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase font-bold text-[#C96B45] block">
              Public Infrastructure
            </span>
            <strong className="text-[#0B3F32] text-sm block mt-0.5">
              Non-Commercial Commons
            </strong>
            <span className="text-[11px] text-slate-500">
              Open data, zero ad monetisation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
