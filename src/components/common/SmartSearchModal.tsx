"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Search, X, ArrowRight, BookOpen, Layers, Newspaper, Calendar, Sparkles } from "lucide-react";
import { INITIATIVES } from "@/data/initiatives";
import { STORIES, CIVIC_EVENTS } from "@/data/stories";
import { CIVIC_RESOURCES } from "@/data/resources";
import { FOCUS_AREAS } from "@/data/focusAreas";

interface SmartSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SmartSearchModal({ isOpen, onClose }: SmartSearchModalProps) {
  const [query, setQuery] = useState("");

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Suggested prompts matching the spec
  const samplePrompts = [
    "Show me youth-related initiatives in Dhanusha",
    "Agricultural knowledge and water resources",
    "Ward document and address normalization",
    "Community flood resilience and weather logs",
  ];

  // Natural language matching engine against approved data
  const searchResults = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return null;

    const terms = q.split(/\s+/).filter((t) => t.length > 2);

    // Score function
    const scoreItem = (text: string) => {
      const lower = text.toLowerCase();
      let matchCount = 0;
      for (const t of terms) {
        if (lower.includes(t)) matchCount++;
      }
      return matchCount;
    };

    const matchedInitiatives = INITIATIVES.filter((item) => {
      const fullText = `${item.title} ${item.description} ${item.category} ${item.location} ${item.district}`;
      return scoreItem(fullText) > 0;
    });

    const matchedStories = STORIES.filter((item) => {
      const fullText = `${item.title} ${item.excerpt} ${item.category} ${item.district} ${item.tags.join(" ")}`;
      return scoreItem(fullText) > 0;
    });

    const matchedResources = CIVIC_RESOURCES.filter((item) => {
      const fullText = `${item.title} ${item.description} ${item.topic} ${item.type}`;
      return scoreItem(fullText) > 0;
    });

    const matchedEvents = CIVIC_EVENTS.filter((item) => {
      const fullText = `${item.title} ${item.description} ${item.location} ${item.category}`;
      return scoreItem(fullText) > 0;
    });

    const matchedFocusAreas = FOCUS_AREAS.filter((item) => {
      const fullText = `${item.title} ${item.shortDescription} ${item.pillars.join(" ")}`;
      return scoreItem(fullText) > 0;
    });

    const total =
      matchedInitiatives.length +
      matchedStories.length +
      matchedResources.length +
      matchedEvents.length +
      matchedFocusAreas.length;

    return {
      initiatives: matchedInitiatives,
      stories: matchedStories,
      resources: matchedResources,
      events: matchedEvents,
      focusAreas: matchedFocusAreas,
      total,
    };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#0B3F32]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E9D8B8] overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with natural language query input */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center gap-3 bg-[#F8F6F0]">
          <div className="w-9 h-9 rounded-xl bg-[#176B4D]/10 text-[#176B4D] flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5 text-[#C96B45]" />
          </div>
          <div className="flex-1 relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask or search: 'Show me youth initiatives in Dhanusha'..."
              className="w-full bg-transparent text-sm sm:text-base text-[#1B211E] placeholder:text-slate-400 focus:outline-none"
              autoFocus
            />
          </div>
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1 rounded bg-slate-200/60"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Suggested prompts when input is empty */}
        {!query && (
          <div className="p-5 overflow-y-auto">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-[#176B4D]" />
              <span>Natural Language Inquiries</span>
            </div>
            <div className="flex flex-col gap-2">
              {samplePrompts.map((prompt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setQuery(prompt)}
                  className="text-left text-xs sm:text-sm text-[#1B211E] p-2.5 rounded-lg bg-[#F8F6F0] hover:bg-[#E9D8B8]/40 border border-slate-100 transition-colors flex items-center justify-between group"
                >
                  <span className="font-medium text-slate-700 group-hover:text-[#176B4D]">
                    &ldquo;{prompt}&rdquo;
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#176B4D] transform group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
              <strong>Smart Civic Search</strong> retrieves strictly from approved, verified Madhesh Connect
              data repositories across initiatives, research, stories, and events.
            </div>
          </div>
        )}

        {/* Search Results Display */}
        {query && searchResults && (
          <div className="p-5 overflow-y-auto space-y-6">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Found {searchResults.total} matching items across platform records</span>
              <span className="text-[11px] bg-[#E9D8B8]/50 text-[#0B3F32] px-2 py-0.5 rounded font-medium">
                Grounded Knowledge
              </span>
            </div>

            {searchResults.total === 0 ? (
              <div className="py-8 text-center text-slate-500 text-sm">
                No matching verified records found for &ldquo;{query}&rdquo;. Try another topic like &ldquo;youth&rdquo;, &ldquo;water&rdquo;, &ldquo;address&rdquo;, or &ldquo;agriculture&rdquo;.
              </div>
            ) : (
              <>
                {/* Initiatives */}
                {searchResults.initiatives.length > 0 && (
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#176B4D] mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Initiatives ({searchResults.initiatives.length})</span>
                    </div>
                    <div className="space-y-2">
                      {searchResults.initiatives.map((item) => (
                        <Link
                          key={item.id}
                          href={`/initiatives/${item.slug}`}
                          onClick={onClose}
                          className="block p-3 rounded-xl bg-[#F8F6F0] hover:bg-[#E9D8B8]/40 border border-slate-200/60 transition-colors"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-[#176B4D]/10 text-[#176B4D]">
                              {item.category}
                            </span>
                            <span className="text-[11px] text-slate-500">{item.location}</span>
                          </div>
                          <h4 className="text-sm font-semibold text-[#1B211E]">{item.title}</h4>
                          <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">{item.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Research & Resources */}
                {searchResults.resources.length > 0 && (
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#C96B45] mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Research & Reports ({searchResults.resources.length})</span>
                    </div>
                    <div className="space-y-2">
                      {searchResults.resources.map((item) => (
                        <Link
                          key={item.id}
                          href="/research-and-resources"
                          onClick={onClose}
                          className="block p-3 rounded-xl bg-[#F8F6F0] hover:bg-[#E9D8B8]/40 border border-slate-200/60 transition-colors"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-[#C96B45]/10 text-[#C96B45]">
                              {item.type}
                            </span>
                            <span className="text-[11px] text-slate-500">{item.topic}</span>
                          </div>
                          <h4 className="text-sm font-semibold text-[#1B211E]">{item.title}</h4>
                          <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">{item.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Stories */}
                {searchResults.stories.length > 0 && (
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                      <Newspaper className="w-3.5 h-3.5 text-[#176B4D]" />
                      <span>Stories & News ({searchResults.stories.length})</span>
                    </div>
                    <div className="space-y-2">
                      {searchResults.stories.map((item) => (
                        <Link
                          key={item.id}
                          href="/news-and-stories"
                          onClick={onClose}
                          className="block p-3 rounded-xl bg-[#F8F6F0] hover:bg-[#E9D8B8]/40 border border-slate-200/60 transition-colors"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                              {item.category}
                            </span>
                            <span className="text-[11px] text-slate-500">{item.date}</span>
                          </div>
                          <h4 className="text-sm font-semibold text-[#1B211E]">{item.title}</h4>
                          <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">{item.excerpt}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Events */}
                {searchResults.events.length > 0 && (
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#D99A2B] mb-2 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Events ({searchResults.events.length})</span>
                    </div>
                    <div className="space-y-2">
                      {searchResults.events.map((item) => (
                        <Link
                          key={item.id}
                          href="/events"
                          onClick={onClose}
                          className="block p-3 rounded-xl bg-[#F8F6F0] hover:bg-[#E9D8B8]/40 border border-slate-200/60 transition-colors"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#D99A2B]/15 text-[#D99A2B]">
                              {item.date}
                            </span>
                            <span className="text-[11px] text-slate-500">{item.location}</span>
                          </div>
                          <h4 className="text-sm font-semibold text-[#1B211E]">{item.title}</h4>
                          <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">{item.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* Footer info bar */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
          <span>Tip: Press <kbd className="px-1.5 py-0.5 bg-slate-200 rounded text-slate-600">Esc</kbd> to exit</span>
          <span className="text-[#176B4D] font-medium">Madhesh Connect Public Repository</span>
        </div>
      </div>
    </div>
  );
}
