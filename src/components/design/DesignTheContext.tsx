import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function DesignTheContext() {
  return (
    <section className="bg-[#F8F6F0] py-16 md:py-24 border-b border-[#E9D8B8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Wide Documentary Landscape Image */}
          <div className="lg:col-span-6 overflow-hidden aspect-16/10 bg-slate-200 shadow-xs">
            <img
              src="/images/terai-context.jpg"
              alt="Rural cyclist riding through Terai agricultural landscapes and wetlands"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-700">
              <span className="w-6 h-0.5 bg-[#C96B45]"></span>
              <span>THE CONTEXT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-[#1B211E] tracking-tight leading-[1.18]">
              Rooted in Madhesh.<br />Connected beyond it.
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Madhesh is diverse in its communities, cultures, languages, experiences and aspirations. Madhesh Connect is grounded in this local context while remaining open to collaboration and ideas beyond the region.
            </p>

            <div className="pt-2">
              <Link
                href="/about#context"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#1B211E] hover:text-[#C96B45] transition-colors group cursor-pointer"
              >
                <span>Learn more about the region</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform text-[#C96B45]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
