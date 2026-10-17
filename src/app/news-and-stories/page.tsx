import { UtilityBar } from "@/components/layout/UtilityBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { STORIES } from "@/data/stories";
import { Calendar } from "lucide-react";

export const metadata = {
  title: "News & Stories — Madhesh Connect",
  description:
    "Read dispatches, field investigations, and community voices documenting civic transformation across Madhesh Province.",
};

export default function NewsAndStoriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F0] text-[#1B211E]">
      <UtilityBar />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#0B3F32] text-white py-16 sm:py-24 border-b border-[#176B4D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-[#D99A2B]">
              Field Journalism & Public Dispatches
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
              News & Community Stories
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Stories from the ground: documenting civic trials, grassroots resilience, youth fellowships, and municipal innovations across the 8 districts.
            </p>
          </div>
        </section>

        {/* Stories List */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {STORIES.map((story) => (
                <article
                  key={story.id}
                  id={story.slug}
                  className="bg-[#F8F6F0] rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                      <img
                        src={story.coverImage}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#0B3F32] text-white">
                          {story.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#C96B45]" />
                          {story.date}
                        </span>
                        <span>•</span>
                        <span>{story.readTime}</span>
                      </div>

                      <h3 className="text-lg font-bold text-[#0B3F32] group-hover:text-[#176B4D] transition-colors leading-snug">
                        {story.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {story.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-slate-200/60 mt-4 space-y-3">
                    <div className="text-[11px] text-slate-500">
                      By <span className="font-semibold text-slate-700">{story.author}</span> ({story.authorRole})
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {story.tags.map((t) => (
                        <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                          #{t}
                        </span>
                      ))}
                    </div>
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
