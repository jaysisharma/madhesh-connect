import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { INITIATIVES } from "@/data/initiatives";

export function FeaturedInitiativesSection() {
  const featured = INITIATIVES.filter((i) => i.featured).slice(0, 3);

  return (
    <section className="py-20 bg-[#F8F6F0] border-b border-[#E9D8B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E9D8B8]">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-[#C96B45] font-bold">
              Active Programs & Pilots
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3F32] tracking-tight">
              Featured Initiatives
            </h2>
            <p className="text-sm sm:text-base text-slate-700">
              Community programs and civic pilots driven in collaboration with local wards, agricultural cooperatives, and youth fellows.
            </p>
          </div>
          <Link
            href="/initiatives"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#176B4D] hover:text-[#0B3F32] group shrink-0"
          >
            <span>All Programs</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Featured Initiatives Editorial Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((initiative) => (
            <article
              key={initiative.id}
              className="bg-white border border-[#E9D8B8] flex flex-col justify-between group"
            >
              <div>
                {/* Initiative Cover Image with Crisp Frame */}
                <div className="relative aspect-16/10 overflow-hidden bg-slate-100 border-b border-[#E9D8B8]">
                  <img
                    src={initiative.coverImage}
                    alt={initiative.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider font-bold bg-[#0B3F32] text-white">
                      {initiative.category}
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider font-bold bg-white text-[#0B3F32] border border-[#0B3F32]/20">
                      {initiative.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
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

              {/* Card Footer */}
              <div className="p-6 pt-3 border-t border-[#E9D8B8]/60 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-slate-500">
                  Since {initiative.startDate}
                </span>
                <Link
                  href={`/initiatives/${initiative.slug}`}
                  className="inline-flex items-center gap-1 font-bold text-[#176B4D] group-hover:text-[#C96B45] transition-colors"
                >
                  <span>Program Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
