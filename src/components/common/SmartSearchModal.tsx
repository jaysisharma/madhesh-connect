"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  X,
  ArrowRight,
  BookOpen,
  Layers,
  Newspaper,
  Calendar,
  MapPin,
  CornerDownLeft,
  ChevronRight,
  SlidersHorizontal,
} from "lucide-react";
import { INITIATIVES } from "@/data/initiatives";
import { STORIES, CIVIC_EVENTS } from "@/data/stories";
import { CIVIC_RESOURCES } from "@/data/resources";
import { FOCUS_AREAS } from "@/data/focusAreas";
import { MADHESH_DISTRICTS } from "@/data/madheshDistricts";

interface SmartSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type CategoryFilter = "all" | "initiatives" | "research" | "stories" | "districts";

interface SearchResultItem {
  id: string;
  title: string;
  subtitle: string;
  category: "initiatives" | "research" | "stories" | "events" | "districts";
  categoryLabel: string;
  location?: string;
  href: string;
}

export function SmartSearchModal({ isOpen, onClose }: SmartSearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsListRef = useRef<HTMLDivElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      setSelectedIndex(0);
    } else {
      setQuery("");
      setSelectedCategory("all");
    }
  }, [isOpen]);

  // Unified index of all searchable content
  const allSearchableItems: SearchResultItem[] = useMemo(() => {
    const list: SearchResultItem[] = [];

    // 1. Initiatives
    INITIATIVES.forEach((item) => {
      list.push({
        id: `init-${item.id}`,
        title: item.title,
        subtitle: item.description,
        category: "initiatives",
        categoryLabel: item.category || "Initiative",
        location: `${item.district}, Madhesh`,
        href: `/initiatives/${item.slug}`,
      });
    });

    // 2. Research & Resources
    CIVIC_RESOURCES.forEach((item) => {
      list.push({
        id: `res-${item.id}`,
        title: item.title,
        subtitle: item.description,
        category: "research",
        categoryLabel: item.type || "Report",
        location: item.topic,
        href: "/research-and-resources",
      });
    });

    // 3. Stories
    STORIES.forEach((item) => {
      list.push({
        id: `story-${item.id}`,
        title: item.title,
        subtitle: item.excerpt,
        category: "stories",
        categoryLabel: item.category || "Story",
        location: item.district,
        href: "/news-and-stories",
      });
    });

    // 4. Events
    CIVIC_EVENTS.forEach((item) => {
      list.push({
        id: `event-${item.id}`,
        title: item.title,
        subtitle: item.description,
        category: "events",
        categoryLabel: "Event",
        location: item.location,
        href: "/events",
      });
    });

    // 5. Districts
    MADHESH_DISTRICTS.forEach((district) => {
      const muniCount = district.localLevels.length;
      list.push({
        id: `dist-${district.name.toLowerCase()}`,
        title: `${district.name} District`,
        subtitle: `Headquarters: ${district.headquarters} · ${muniCount} local municipalities & administrative wards`,
        category: "districts",
        categoryLabel: "District",
        location: "Madhesh Province",
        href: `/initiatives?district=${encodeURIComponent(district.name)}`,
      });
    });

    return list;
  }, []);

  // Filtered Results based on query and active category
  const filteredResults = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];

    const terms = q.split(/\s+/).filter(Boolean);

    return allSearchableItems.filter((item) => {
      // Category filter match
      if (selectedCategory !== "all") {
        if (selectedCategory === "initiatives" && item.category !== "initiatives") return false;
        if (selectedCategory === "research" && item.category !== "research") return false;
        if (selectedCategory === "stories" && item.category !== "stories") return false;
        if (selectedCategory === "districts" && item.category !== "districts") return false;
      }

      // Keyword match
      const searchableString = `${item.title} ${item.subtitle} ${item.categoryLabel} ${item.location || ""}`.toLowerCase();
      return terms.every((term) => searchableString.includes(term));
    });
  }, [query, selectedCategory, allSearchableItems]);

  // Keyboard navigation (ArrowUp, ArrowDown, Enter, Esc)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredResults.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : Math.max(0, filteredResults.length - 1)
        );
      } else if (e.key === "Enter" && filteredResults[selectedIndex]) {
        e.preventDefault();
        const target = filteredResults[selectedIndex];
        onClose();
        router.push(target.href);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredResults, selectedIndex, onClose, router]);

  // Auto-scroll selected result into view
  useEffect(() => {
    if (resultsListRef.current) {
      const activeEl = resultsListRef.current.querySelector(
        `[data-index="${selectedIndex}"]`
      );
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }, [selectedIndex]);

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query, selectedCategory]);

  if (!isOpen) return null;

  // Category Icon Resolver
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "initiatives":
        return <Layers className="w-4 h-4 text-emerald-600" />;
      case "research":
        return <BookOpen className="w-4 h-4 text-amber-600" />;
      case "stories":
        return <Newspaper className="w-4 h-4 text-sky-600" />;
      case "events":
        return <Calendar className="w-4 h-4 text-purple-600" />;
      case "districts":
        return <MapPin className="w-4 h-4 text-[#C14F28]" />;
      default:
        return <Search className="w-4 h-4 text-slate-500" />;
    }
  };

  // Quick navigation shortcuts for empty state
  const quickNav = [
    { label: "All 8 Districts", href: "/initiatives", icon: <MapPin className="w-4 h-4 text-[#C14F28]" />, desc: "Explore local levels from Dhanusha to Parsa" },
    { label: "Active Initiatives", href: "/initiatives", icon: <Layers className="w-4 h-4 text-emerald-600" />, desc: "Civic programs, youth fellowship & agricultural exchange" },
    { label: "Open Research", href: "/research-and-resources", icon: <BookOpen className="w-4 h-4 text-amber-600" />, desc: "Publications, data dashboards & policy briefs" },
    { label: "News & Stories", href: "/news-and-stories", icon: <Newspaper className="w-4 h-4 text-sky-600" />, desc: "Dispatches, civic reporting & community interviews" },
  ];

  const popularTags = [
    "Dhanusha",
    "Janakpurdham",
    "Youth Fellowship",
    "Pond Restoration",
    "Agriculture",
    "Parsa",
    "Address Normalization",
    "Flood Resilience",
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search Madhesh Connect"
      className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col max-h-[82vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. Command Input Bar */}
        <div className="relative flex items-center px-4 sm:px-5 py-3.5 border-b border-slate-100 bg-white">
          <Search className="w-5 h-5 text-slate-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search initiatives, districts, stories, research..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-800 placeholder:text-slate-400 font-normal focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors mr-2 cursor-pointer"
              aria-label="Clear input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-[11px] font-mono font-medium text-slate-500 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded transition-colors cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* 2. Filter Category Pills (Visible when searching) */}
        {query && (
          <div className="px-4 py-2 border-b border-slate-100 bg-slate-50/70 flex items-center gap-1.5 overflow-x-auto text-xs">
            <span className="text-slate-400 text-[11px] font-medium mr-1 flex items-center gap-1">
              <SlidersHorizontal className="w-3 h-3" />
              Filter:
            </span>
            {(
              [
                { id: "all", label: "All Results" },
                { id: "initiatives", label: "Initiatives" },
                { id: "districts", label: "Districts" },
                { id: "research", label: "Research" },
                { id: "stories", label: "Stories" },
              ] as const
            ).map((filter) => {
              const isActive = selectedCategory === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setSelectedCategory(filter.id)}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-[#0B3528] text-white shadow-2xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        )}

        {/* 3. Search Results or Empty State */}
        <div ref={resultsListRef} className="flex-1 overflow-y-auto p-2 sm:p-3">
          {/* Default Empty State: Fast Links & Popular Topics */}
          {!query && (
            <div className="p-3 sm:p-4 space-y-6">
              {/* Quick Jump Links */}
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2 px-2">
                  Quick Navigation
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {quickNav.map((nav, idx) => (
                    <Link
                      key={idx}
                      href={nav.href}
                      onClick={onClose}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all group"
                    >
                      <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-white group-hover:shadow-2xs transition-all shrink-0 mt-0.5">
                        {nav.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-slate-800 group-hover:text-[#0B3528] flex items-center gap-1">
                          <span>{nav.label}</span>
                          <ChevronRight className="w-3 h-3 text-slate-300 group-hover:text-[#0B3528] group-hover:translate-x-0.5 transition-transform" />
                        </div>
                        <p className="text-[11px] text-slate-500 truncate mt-0.5">
                          {nav.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Search Tags */}
              <div className="pt-2 border-t border-slate-100">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2.5 px-2">
                  Popular Topics
                </div>
                <div className="flex flex-wrap gap-1.5 px-1">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setQuery(tag)}
                      className="px-2.5 py-1 text-xs rounded-full bg-slate-100 hover:bg-[#F3EFE6] text-slate-600 hover:text-[#0B3528] border border-slate-200/70 transition-colors cursor-pointer"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Active Query: No Results Found */}
          {query && filteredResults.length === 0 && (
            <div className="py-12 px-4 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Search className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold text-slate-800">
                No results found for &ldquo;{query}&rdquo;
              </h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try searching for a district name, &ldquo;youth&rdquo;, &ldquo;agriculture&rdquo;, or &ldquo;reports&rdquo;.
              </p>
            </div>
          )}

          {/* Active Query: Result Items List */}
          {query && filteredResults.length > 0 && (
            <div className="space-y-1">
              {filteredResults.map((item, index) => {
                const isSelected = index === selectedIndex;

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    data-index={index}
                    onClick={onClose}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`flex items-start justify-between gap-3 p-3 rounded-xl transition-all cursor-pointer border ${
                      isSelected
                        ? "bg-[#0B3528]/5 border-[#0B3528]/20 shadow-2xs"
                        : "border-transparent hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="p-2 rounded-lg bg-white border border-slate-200/80 shadow-2xs shrink-0 mt-0.5">
                        {getCategoryIcon(item.category)}
                      </div>
                      <div className="min-w-0 space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/60">
                            {item.categoryLabel}
                          </span>
                          {item.location && (
                            <span className="text-[11px] text-slate-500 truncate flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                              {item.location}
                            </span>
                          )}
                        </div>
                        <h4 className="text-sm font-semibold text-slate-900 truncate">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Right Enter / Arrow Action */}
                    <div className="shrink-0 self-center pl-2">
                      {isSelected ? (
                        <div className="flex items-center gap-1 text-[11px] font-medium text-[#0B3528] bg-white px-2 py-1 rounded-md border border-[#0B3528]/20 shadow-2xs">
                          <span>Open</span>
                          <CornerDownLeft className="w-3 h-3" />
                        </div>
                      ) : (
                        <ArrowRight className="w-4 h-4 text-slate-300" />
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* 4. Bottom Command Bar */}
        <div className="px-4 py-2.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <div>
            {query ? (
              <span>
                <strong>{filteredResults.length}</strong> result{filteredResults.length === 1 ? "" : "s"} found
              </span>
            ) : (
              <span>Madhesh Connect Directory</span>
            )}
          </div>
          <div className="hidden sm:flex items-center gap-3 font-mono text-[10px]">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded">↓</kbd>
              <span className="font-sans text-slate-400">Navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded">↵</kbd>
              <span className="font-sans text-slate-400">Select</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded">ESC</kbd>
              <span className="font-sans text-slate-400">Close</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
