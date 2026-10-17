"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Users,
  Flag,
  BookOpen,
  MessageSquareQuote,
  Share2,
  HeartHandshake,
  Calendar,
  Info,
  Newspaper,
  ArrowRight,
  MapPin,
  Play,
  X,
} from "lucide-react";

interface OrbitNode {
  id: string;
  label: string;
  sublabel?: string;
  icon: React.ReactNode;
  angle: number; // degrees
  bgColor: string;
  arrowBg: string;
  href: string;
  description: string;
}

// Helper to convert any standard YouTube or Vimeo link into an embed URL
function getEmbedUrl(url: string): string {
  if (!url) return "";
  const ytMatch = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/
  );
  if (ytMatch) {
    return `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?autoplay=1&rel=0`;
  }
  const vimeoMatch = url.match(
    /vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)/
  );
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
  }
  return url;
}

export function DesignHero() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Set your YouTube or Vimeo link here (can be a standard watch URL or share link)
  const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/watch?v=ScMzIvxBSi4");

  // Close video modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setVideoModalOpen(false);
      }
    };
    if (videoModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [videoModalOpen]);

  // 9 interactive orbit nodes matching the exact mockup layout
  const orbitNodes: OrbitNode[] = [
    {
      id: "people",
      label: "People &",
      sublabel: "Communities",
      icon: <Users className="w-5 h-5 text-[#0B3528]" />,
      angle: -90, // 12 o'clock (Top)
      bgColor: "#E5F0EB",
      arrowBg: "#0B3528",
      href: "/about",
      description: "Grassroots civic networks, community leaders & local dialogues.",
    },
    {
      id: "initiatives",
      label: "Initiatives",
      icon: <Flag className="w-5 h-5 text-[#0B3528]" />,
      angle: -45, // 1:30 o'clock (Top-Right)
      bgColor: "#E6EFE8",
      arrowBg: "#0B3528",
      href: "/initiatives",
      description: "Direct community actions, agriculture, youth & public resources.",
    },
    {
      id: "research",
      label: "Research &",
      sublabel: "Resources",
      icon: <BookOpen className="w-5 h-5 text-[#C14F28]" />,
      angle: -5, // 3 o'clock (Right)
      bgColor: "#FDF1E8",
      arrowBg: "#C14F28",
      href: "/research-and-resources",
      description: "Open publications, data dashboards & policy briefs.",
    },
    {
      id: "stories",
      label: "Stories",
      icon: <MessageSquareQuote className="w-5 h-5 text-[#0B3528]" />,
      angle: 35, // 4:30 o'clock (Bottom-Right)
      bgColor: "#E3EFE9",
      arrowBg: "#0B3528",
      href: "/news-and-stories",
      description: "Authentic dispatches, voices & frontline civic narratives.",
    },
    {
      id: "partners",
      label: "Partners &",
      sublabel: "Collaborations",
      icon: <Share2 className="w-5 h-5 text-[#0B3528]" />,
      angle: 68, // 5:30 o'clock (Bottom-Right-Center)
      bgColor: "#E5EEE8",
      arrowBg: "#0B3528",
      href: "/about",
      description: "Local wards, academic teams & civic technology alliances.",
    },
    {
      id: "get-involved",
      label: "Get Involved",
      icon: <HeartHandshake className="w-5 h-5 text-[#C14F28]" />,
      angle: 98, // 6:30 o'clock (Bottom-Center)
      bgColor: "#F6F4EB",
      arrowBg: "#0B3528",
      href: "/get-involved",
      description: "Contribute time, share local data, or join active fellowships.",
    },
    {
      id: "events",
      label: "Events",
      icon: <Calendar className="w-5 h-5 text-[#0B3528]" />,
      angle: 138, // 7:45 o'clock (Bottom-Left)
      bgColor: "#E4EFE8",
      arrowBg: "#0B3528",
      href: "/events",
      description: "Upcoming district workshops, assemblies & civic hackathons.",
    },
    {
      id: "about",
      label: "About",
      sublabel: "Madhesh Connect",
      icon: <Info className="w-5 h-5 text-[#C14F28]" />,
      angle: 182, // 9 o'clock (Mid-Left)
      bgColor: "#FDF1E8",
      arrowBg: "#C14F28",
      href: "/about",
      description: "Our civic mission, governance values & 8-district vision.",
    },
    {
      id: "news",
      label: "News &",
      sublabel: "Updates",
      icon: <Newspaper className="w-5 h-5 text-[#0B3528]" />,
      angle: 225, // 10:30 o'clock (Top-Left)
      bgColor: "#E6EEE7",
      arrowBg: "#0B3528",
      href: "/news-and-stories",
      description: "Public briefings, platform rollouts & verified news.",
    },
  ];

  // Orbit radius in pixels for desktop layout
  const orbitRadius = 265;

  return (
    <section className="relative w-full min-h-[calc(100vh-112px)] flex flex-col justify-between overflow-hidden bg-[#FAF8F4] select-none">
      {/* 1. Cinematic Panoramic Background (Janaki Mandir + Bridge + River + Golden Sky) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/madhesh_landscape_bg.jpg"
          alt="Madhesh Province panoramic landscape at golden hour"
          className="w-full h-full object-cover object-[center_right] sm:object-center"
        />

        {/* Soft Left Light Wash Overlay for Editorial Contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 18% 45%, rgba(250,248,244,0.98) 0%, rgba(250,248,244,0.94) 36%, rgba(250,248,244,0.72) 58%, rgba(250,248,244,0.2) 80%, transparent 100%)",
          }}
        />

        {/* Subtle Top & Bottom Gradient Vignettes */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#FAF8F4]/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B3528]/25 via-transparent to-transparent" />
      </div>

      {/* 2. Main Content Canvas */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 pt-8 sm:pt-12 pb-8 flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center my-auto">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-6 lg:space-y-7 pr-0 lg:pr-4">
            {/* Primary Headline in Grounded Editorial Voice */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-bold tracking-tight text-[#0B3528] leading-[1.1]">
              Connecting<br />
              people, land &<br />
              <span className="text-[#C14F28]">civic intelligence.</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base text-[#2E453D] leading-relaxed max-w-[430px] font-normal">
              An independent civic platform across the 8 districts of Madhesh Province—bridging community knowledge, open data, and local public capability.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/our-work"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-white bg-[#C14F28] hover:bg-[#a8401d] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 text-sm font-semibold tracking-wide group"
              >
                <span>Explore Our Work</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>

              {/* Watch Our Story (2 min) Video Button */}
              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full text-[#0B3528] bg-white hover:bg-[#F3EFE6] border border-[#0B3528]/20 hover:border-[#0B3528]/40 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 text-sm font-semibold group cursor-pointer"
              >
                <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-[#E5F0EB] text-[#0B3528] group-hover:bg-[#0B3528] group-hover:text-white transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  <span className="absolute -inset-1 rounded-full border border-[#0B3528]/20 animate-ping opacity-60" />
                </div>
                <div className="flex items-center gap-2">
                  <span>Watch Our Story</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#E5F0EB] text-[#0B3528] group-hover:bg-white transition-colors">
                    2 min
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Right/Center Column: Orbiting Ecosystem Wheel */}
          <div className="lg:col-span-7 xl:col-span-7 relative flex items-center justify-center py-6 sm:py-10">
            {/* Desktop / Large Screen Interactive Wheel */}
            <div className="relative w-[340px] h-[340px] sm:w-[540px] sm:h-[540px] md:w-[620px] md:h-[620px] shrink-0 flex items-center justify-center">
              {/* Concentric Dashed Orbit Ring */}
              <div
                className="absolute w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] md:w-[530px] md:h-[530px] rounded-full border border-dashed border-[#C14F28]/60 pointer-events-none"
                style={{ strokeDasharray: "4 4" }}
              />

              {/* Central Community Photo Circle */}
              <div className="relative w-[240px] h-[240px] sm:w-[350px] sm:h-[350px] md:w-[390px] md:h-[390px] rounded-full overflow-hidden shadow-2xl border-4 border-white/90 z-10 transition-transform duration-500 hover:scale-[1.01]">
                <img
                  src="/images/madhesh_community_center.jpg"
                  alt="Madhesh community members gathered in discussion"
                  className="w-full h-full object-cover"
                />

                {/* Dark Curved Vignette Banner at Bottom of Circle */}
                <div className="absolute inset-x-0 bottom-0 pt-10 pb-4 px-4 bg-gradient-to-t from-black/90 via-black/65 to-transparent text-center text-white flex flex-col items-center justify-end">
                  <div className="text-[9px] sm:text-[10px] tracking-wider text-[#ECC278] uppercase font-semibold mb-1">
                    People · Information · Opportunities · Technology
                  </div>
                  <h3 className="text-[11px] sm:text-xs md:text-[13px] font-medium text-white/95 leading-tight max-w-[280px]">
                    A more connected, inclusive and empowered Madhesh.
                  </h3>
                </div>
              </div>

              {/* 9 Orbiting Circular Badges (Positioned around the center circle) */}
              <div className="absolute inset-0 pointer-events-none">
                {orbitNodes.map((node) => {
                  // Angle in radians
                  const rad = (node.angle * Math.PI) / 180;
                  // Dynamic responsive radius calculation
                  // Round to 4 decimal places to prevent SSR/client floating point hydration mismatch
                  const x = Math.round(Math.cos(rad) * 10000) / 10000;
                  const y = Math.round(Math.sin(rad) * 10000) / 10000;

                  return (
                    <div
                      key={node.id}
                      className="absolute pointer-events-auto transition-transform duration-300 hover:scale-110 hover:z-30"
                      style={{
                        top: `calc(50% + ${y} * var(--orbit-r, 265px) - var(--node-half, 44px))`,
                        left: `calc(50% + ${x} * var(--orbit-r, 265px) - var(--node-half, 44px))`,
                        transformOrigin: "center center",
                      }}
                      onMouseEnter={() => setActiveNode(node.id)}
                      onMouseLeave={() => setActiveNode(null)}
                    >
                      <Link
                        href={node.href}
                        className="group flex flex-col items-center justify-center w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] md:w-[88px] md:h-[88px] rounded-full border border-white/90 shadow-lg p-1.5 transition-all duration-300 hover:shadow-xl text-center cursor-pointer"
                        style={{ backgroundColor: node.bgColor }}
                      >
                        {/* Icon */}
                        <div className="shrink-0 mb-0.5 group-hover:-translate-y-0.5 transition-transform">
                          {node.icon}
                        </div>

                        {/* Label */}
                        <div className="text-[9px] sm:text-[10px] md:text-[10.5px] font-semibold text-[#0B3528] leading-[1.1] px-0.5">
                          <div>{node.label}</div>
                          {node.sublabel && <div>{node.sublabel}</div>}
                        </div>

                        {/* Arrow indicator */}
                        <div
                          className="w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full flex items-center justify-center text-white mt-1 shadow-xs group-hover:scale-110 transition-transform"
                          style={{ backgroundColor: node.arrowBg }}
                        >
                          <ArrowRight className="w-2.5 h-2.5 stroke-[2.5]" />
                        </div>
                      </Link>

                      {/* Tooltip on Hover */}
                      {activeNode === node.id && (
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-44 bg-[#0B3528] text-white text-[11px] p-2 rounded-lg shadow-xl text-center pointer-events-none z-40 animate-in fade-in zoom-in-95 duration-150">
                          <div className="font-bold text-[#F3C68F]">
                            {node.label} {node.sublabel || ""}
                          </div>
                          <div className="text-white/80 text-[10px] mt-0.5 leading-snug">
                            {node.description}
                          </div>
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0B3528]" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Bar Content (Scroll Indicator, Nepal/Madhesh Map & Floating Socials) */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 border-t border-[#0B3528]/10">
          {/* Bottom-Left: Clickable Scroll Indicator */}
          <a
            href="#overview"
            className="flex items-center gap-3 text-xs text-[#0B3528] font-medium hover:text-[#C14F28] transition-colors cursor-pointer group"
          >
            <div className="w-5 h-8 rounded-full border-[1.8px] border-[#0B3528]/80 group-hover:border-[#C14F28] flex items-start justify-center p-1 transition-colors">
              <span className="w-1 h-2 bg-[#0B3528] group-hover:bg-[#C14F28] rounded-full animate-bounce transition-colors" />
            </div>
            <div className="leading-tight text-[11px]">
              <div className="text-slate-600">Explore Madhesh</div>
              <div className="font-bold text-[#0B3528] group-hover:text-[#C14F28] transition-colors flex items-center gap-1">
                <span>Our work & province</span>
                <span>↓</span>
              </div>
            </div>
          </a>

          {/* Bottom-Right: Highlighted Madhesh Map of Nepal matching mockup */}
          <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 shadow-lg text-white">
            {/* Detailed Nepal Map Silhouette with Madhesh Province highlighted */}
            <div className="relative w-16 h-10 shrink-0">
              <svg
                viewBox="0 0 100 60"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Nepal Border Outline */}
                <path
                  d="M6 34 L18 20 L30 18 L46 22 L62 14 L80 18 L94 28 L92 38 L84 44 L68 46 L50 44 L32 46 L18 48 L6 34 Z"
                  stroke="rgba(255,255,255,0.7)"
                  strokeWidth="1.5"
                  fill="rgba(255,255,255,0.12)"
                />
                {/* Madhesh Province (Southern belt of 8 districts) */}
                <path
                  d="M48 44 L68 46 L84 44 L82 39 L68 40 L50 39 Z"
                  fill="#C14F28"
                  stroke="#FFD5BD"
                  strokeWidth="1.2"
                />
                {/* Glowing Marker Pin on Madhesh */}
                <circle cx="66" cy="42" r="2.5" fill="#FFFFFF" />
                <circle
                  cx="66"
                  cy="42"
                  r="4.5"
                  stroke="#C14F28"
                  strokeWidth="1"
                  className="animate-ping"
                />
              </svg>
            </div>

            {/* Label */}
            <div className="text-[10px] leading-tight tracking-wider uppercase font-semibold">
              <div className="text-white flex items-center gap-1">
                <span>MADHESH</span>
                <MapPin className="w-2.5 h-2.5 text-[#C14F28] fill-current" />
              </div>
              <div className="text-white/70 text-[9px]">NEPAL</div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Floating Right Social Sidebar matching mockup */}
      <div className="hidden xl:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3">
        <span
          className="text-[10px] uppercase tracking-widest text-[#0B3528]/80 font-bold"
          style={{ writingMode: "vertical-rl" }}
        >
          Follow Us
        </span>
        <div className="w-px h-8 bg-[#0B3528]/30" />
        <div className="flex flex-col gap-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-white/90 hover:bg-[#0B3528] text-[#0B3528] hover:text-white border border-[#0B3528]/20 flex items-center justify-center transition-all shadow-xs hover:scale-110"
            aria-label="Facebook"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-white/90 hover:bg-[#0B3528] text-[#0B3528] hover:text-white border border-[#0B3528]/20 flex items-center justify-center transition-all shadow-xs hover:scale-110"
            aria-label="Instagram"
          >
            <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-white/90 hover:bg-[#0B3528] text-[#0B3528] hover:text-white border border-[#0B3528]/20 flex items-center justify-center transition-all shadow-xs hover:scale-110"
            aria-label="LinkedIn"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-white/90 hover:bg-[#0B3528] text-[#0B3528] hover:text-white border border-[#0B3528]/20 flex items-center justify-center transition-all shadow-xs hover:scale-110"
            aria-label="YouTube"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Responsive Orbit Radius CSS Variables */}
      <style jsx>{`
        :global(:root) {
          --orbit-r: 155px;
          --node-half: 36px;
        }
        @media (min-width: 640px) {
          :global(:root) {
            --orbit-r: 220px;
            --node-half: 42px;
          }
        }
        @media (min-width: 768px) {
          :global(:root) {
            --orbit-r: 255px;
            --node-half: 44px;
          }
        }
        @media (min-width: 1280px) {
          :global(:root) {
            --orbit-r: 270px;
            --node-half: 44px;
          }
        }
      `}</style>

      {/* Clean Theater-Mode Video Lightbox */}
      {videoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Watch Our Story Video"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setVideoModalOpen(false)}
        >
          {/* Floating Close Button */}
          <button
            type="button"
            onClick={() => setVideoModalOpen(false)}
            className="absolute top-5 right-5 sm:top-7 sm:right-7 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-all duration-200 cursor-pointer"
            aria-label="Close video"
          >
            <X className="w-5 h-5 stroke-[2]" />
          </button>

          {/* Clean 16:9 Video Player Container */}
          <div
            className="relative w-full max-w-4xl aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src={getEmbedUrl(videoUrl)}
              title="Watch Our Story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
