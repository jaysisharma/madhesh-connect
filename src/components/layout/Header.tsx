"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Globe, ChevronDown } from "lucide-react";
import { SmartSearchModal } from "@/components/common/SmartSearchModal";

export function Header() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");
  const languages = [
    { code: "EN", name: "English" },
    { code: "MAI", name: "मैथिली (Maithili)" },
    { code: "BHO", name: "भोजपुरी (Bhojpuri)" },
    { code: "NEP", name: "नेपाली (Nepali)" },
  ];

  // Keyboard shortcut ⌘K or Ctrl+K for Smart Search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E7E0D3]/80 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between h-[74px]">
            {/* Logo Section */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href="/"
                className="flex items-center gap-2.5 group"
              >
                {/* Stylized Emblem Icon matching mockup */}
                <div className="relative w-9 h-9 shrink-0 transition-transform group-hover:scale-105">
                  <svg
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    {/* Left Top Leaf/Figure - Deep Teal */}
                    <circle cx="15" cy="13" r="3.2" fill="#0B3528" />
                    <path
                      d="M11 27C10.5 20.5 14.5 16.5 19 16C17 21 16.5 25 18 29C15.5 29 11.5 28.5 11 27Z"
                      fill="#0B3528"
                    />

                    {/* Left Bottom Leaf/Figure - Emerald */}
                    <circle cx="11.5" cy="27" r="3" fill="#136F56" />
                    <path
                      d="M9 37C8.5 32 12.5 29.5 17 29.5C14.5 33.5 15.5 37 19.5 39C16 40 10 40 9 37Z"
                      fill="#136F56"
                    />

                    {/* Right Top Leaf/Figure - Terracotta */}
                    <circle cx="29" cy="13" r="3.2" fill="#C14F28" />
                    <path
                      d="M33 27C33.5 20.5 29.5 16.5 25 16C27 21 27.5 25 26 29C28.5 29 32.5 28.5 33 27Z"
                      fill="#C14F28"
                    />

                    {/* Right Bottom Leaf/Figure - Amber */}
                    <circle cx="32.5" cy="27" r="3" fill="#DD8329" />
                    <path
                      d="M35 37C35.5 32 31.5 29.5 27 29.5C29.5 33.5 28.5 37 24.5 39C28 40 34 40 35 37Z"
                      fill="#DD8329"
                    />
                  </svg>
                </div>

                {/* Madhesh Connect Wordmark */}
                <div className="flex flex-col leading-none">
                  <span className="font-serif font-bold text-xl sm:text-2xl text-[#0B3528] tracking-tight">
                    Madhesh
                  </span>
                  <span className="font-serif font-bold text-xl sm:text-2xl text-[#0B3528] tracking-tight -mt-0.5">
                    Connect
                  </span>
                </div>
              </Link>

              {/* Tagline Separator & Subtitle */}
              <div className="hidden lg:flex items-center pl-4 border-l border-slate-300">
                <div className="text-[9px] uppercase tracking-[0.18em] text-slate-500 font-semibold leading-tight">
                  <div>PEOPLE · COMMUNITIES</div>
                  <div>OPPORTUNITIES · TECHNOLOGY</div>
                </div>
              </div>
            </div>

            {/* Right: Language Selector & Search Action */}
            <div className="flex items-center gap-2.5">
              {/* Language Selector Pill */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200/90 text-slate-700 hover:text-[#0B3528] hover:bg-[#F3EFE6] transition-colors text-xs font-medium bg-slate-50 shadow-xs"
                  aria-expanded={langMenuOpen}
                >
                  <Globe className="w-3.5 h-3.5 text-slate-500" />
                  <span>{selectedLang}</span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>

                {langMenuOpen && (
                  <div className="absolute right-0 mt-1 w-36 bg-white text-[#1B211E] rounded-md shadow-xl border border-slate-200 py-1 z-50 animate-in fade-in slide-in-from-top-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setSelectedLang(lang.code);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 text-xs hover:bg-[#F3EFE6] transition-colors flex items-center justify-between ${
                          selectedLang === lang.code
                            ? "font-bold text-[#0B3528]"
                            : "text-slate-700"
                        }`}
                      >
                        <span>{lang.name}</span>
                        {selectedLang === lang.code && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C14F28]"></span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Professional Command Search Trigger */}
              <button
                type="button"
                onClick={() => setSearchModalOpen(true)}
                className="group flex items-center justify-between gap-3 w-36 sm:w-52 md:w-60 px-3.5 py-1.5 text-slate-500 hover:text-slate-800 bg-slate-50 hover:bg-slate-100/90 border border-slate-200/90 hover:border-slate-300 rounded-full transition-all duration-200 cursor-pointer shadow-xs"
                aria-label="Search"
                title="Search (⌘K)"
              >
                <div className="flex items-center gap-2 text-xs font-medium truncate text-slate-500 group-hover:text-slate-700">
                  <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0B3528] transition-colors shrink-0" />
                  <span className="truncate">Search Madhesh...</span>
                </div>
                <div className="hidden sm:flex items-center gap-1 shrink-0">
                  <kbd className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono font-medium text-slate-500 bg-white border border-slate-200 rounded shadow-2xs group-hover:border-slate-300">
                    ⌘K
                  </kbd>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Smart Search Modal */}
      <SmartSearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </>
  );
}
