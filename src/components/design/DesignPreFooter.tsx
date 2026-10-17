import React from "react";
import Link from "next/link";

export function DesignPreFooter() {
  return (
    <section className="relative bg-[#0B3F32] text-white py-14 sm:py-16 overflow-hidden">
      {/* Exact cropped background image of cyclists at dusk from mockup */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/images/prefooter-bg.jpg"
          alt="People and cyclists at sunset in Madhesh"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-bold text-white tracking-tight">
              There is more to connect.
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 font-normal">
              Explore the work, initiatives and stories that are shaping Madhesh Connect.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/our-work"
              className="px-6 py-3 rounded-full text-xs font-bold text-white bg-[#C96B45] hover:bg-[#b05834] transition-colors shadow-xs"
            >
              Explore Our Work
            </Link>
            <Link
              href="/initiatives"
              className="px-6 py-3 rounded-full text-xs font-bold text-white bg-transparent border border-white/40 hover:bg-white/10 transition-colors"
            >
              View Initiatives
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
