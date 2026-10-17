import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { STORIES } from "@/data/stories";

export function NewsStoriesSection() {
  const featuredStory = STORIES.find((s) => s.featured) || STORIES[0];
  const secondaryStories = STORIES.filter((s) => s.id !== featuredStory.id).slice(0, 2);

  return (
    <section className="py-20 bg-[#F8F6F0] border-b border-[#E9D8B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Masthead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E9D8B8]">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-[#C96B45] font-bold">
              Field Dispatches & Ground Reporting
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3F32] tracking-tight">
              News & Community Stories
            </h2>
            <p className="text-sm sm:text-base text-slate-700">
              Direct reporting from ward counters, rural cooperatives, and community initiatives across southern Nepal.
            </p>
          </div>
          <Link
            href="/news-and-stories"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#176B4D] hover:text-[#0B3F32] group shrink-0"
          >
            <span>All Dispatches</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Editorial Layout: Broad Gazette Style */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Large Lead Feature */}
          <article className="lg:col-span-7 bg-white border border-[#E9D8B8] flex flex-col justify-between group">
            <div>
              <div className="relative aspect-16/9 overflow-hidden bg-slate-100 border-b border-[#E9D8B8]">
                <img
                  src={featuredStory.coverImage}
                  alt={featuredStory.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider font-bold bg-[#0B3F32] text-white">
                    {featuredStory.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                  <span>{featuredStory.date}</span>
                  <span>•</span>
                  <span>{featuredStory.readTime}</span>
                  <span>•</span>
                  <span className="text-[#C96B45] font-bold">{featuredStory.district} District</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#0B3F32] group-hover:text-[#176B4D] transition-colors leading-snug">
                  <Link href={`/news-and-stories#${featuredStory.slug}`}>
                    {featuredStory.title}
                  </Link>
                </h3>

                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {featuredStory.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-3 border-t border-[#E9D8B8]/60 flex items-center justify-between text-xs">
              <span className="text-slate-500">
                Reported by <strong className="text-slate-700">{featuredStory.author}</strong> ({featuredStory.authorRole})
              </span>
              <Link
                href={`/news-and-stories#${featuredStory.slug}`}
                className="inline-flex items-center gap-1 font-bold text-[#176B4D] group-hover:text-[#C96B45] transition-colors"
              >
                <span>Read Full Dispatch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* Secondary Dispatches Column */}
          <div className="lg:col-span-5 space-y-6">
            {secondaryStories.map((story) => (
              <article
                key={story.id}
                className="bg-white border border-[#E9D8B8] p-6 flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="text-[#C96B45] font-bold uppercase">{story.category}</span>
                    <span>{story.date}</span>
                  </div>

                  <h4 className="text-base font-bold text-[#0B3F32] group-hover:text-[#176B4D] transition-colors leading-snug">
                    <Link href={`/news-and-stories#${story.slug}`}>
                      {story.title}
                    </Link>
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {story.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E9D8B8]/60 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-slate-400">
                    {story.district} • {story.readTime}
                  </span>
                  <Link
                    href={`/news-and-stories#${story.slug}`}
                    className="font-bold text-[#176B4D] group-hover:text-[#C96B45] inline-flex items-center gap-1"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}

            {/* Public Dispatch Submission Box */}
            <div className="bg-[#E9D8B8]/30 border border-[#E9D8B8] p-6 text-xs text-slate-700 space-y-2">
              <div className="font-mono text-[10px] uppercase font-bold text-[#0B3F32]">
                Community Reporting Desk
              </div>
              <p className="font-bold text-sm text-[#0B3F32]">
                Have a local development or civic concern to report?
              </p>
              <p className="text-slate-600 leading-relaxed">
                We accept field notes and community documentation from residents, school teachers, and agricultural cooperative heads across all 8 districts.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="font-bold text-[#176B4D] hover:underline inline-flex items-center gap-1"
                >
                  <span>Submit Field Notes to Desk →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
