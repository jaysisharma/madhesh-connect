import React from "react";
import { Users, FileText, Laptop } from "lucide-react";

export function DesignVisionMission() {
  return (
    <section className="border-b border-[#E9D8B8]/60">
      <div className="grid lg:grid-cols-2">
        {/* Left Half: OUR VISION (Deep Green with Topographic Contour Pattern) */}
        <div className="bg-[#0B3F32] text-white p-8 sm:p-14 lg:p-20 flex flex-col justify-center relative overflow-hidden">
          {/* Topographic contour lines SVG overlay */}
          <svg
            className="absolute inset-0 w-full h-full opacity-15 pointer-events-none stroke-[#E9D8B8]"
            fill="none"
            strokeWidth="1.2"
            viewBox="0 0 600 600"
            preserveAspectRatio="none"
          >
            <path d="M-100,300 C50,200 150,450 350,300 C550,150 650,400 750,250" />
            <path d="M-100,250 C80,150 180,400 380,250 C580,100 680,350 750,200" />
            <path d="M-100,200 C100,100 200,350 400,200 C600,50 700,300 750,150" />
            <path d="M-100,350 C30,250 130,500 330,350 C530,200 630,450 750,300" />
            <path d="M-100,400 C0,300 100,550 300,400 C500,250 600,500 750,350" />
            <circle cx="200" cy="320" r="80" strokeDasharray="3 3" />
            <circle cx="200" cy="320" r="140" />
            <circle cx="200" cy="320" r="200" />
          </svg>

          <div className="relative z-10 space-y-6 max-w-xl">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#E9D8B8]">
              <span className="w-6 h-0.5 bg-[#C96B45]"></span>
              <span>OUR VISION</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-serif font-normal text-white leading-snug">
              A more connected Madhesh where people have greater access to information, opportunities and meaningful participation.
            </h2>
          </div>
        </div>

        {/* Right Half: OUR MISSION (Warm Ivory) */}
        <div className="bg-[#F8F6F0] p-8 sm:p-14 lg:p-20 flex flex-col justify-center space-y-6">
          <div className="space-y-4 max-w-xl">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-700">
              <span className="w-6 h-0.5 bg-[#C96B45]"></span>
              <span>OUR MISSION</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-serif font-bold text-[#1B211E] tracking-tight leading-tight">
              Connect people. Enable participation.<br />Build useful technology.
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              We work to create platforms, initiatives and resources that help people participate, access knowledge, discover opportunities and contribute to stronger communities.
            </p>
          </div>

          {/* 3 Bottom Features with terracotta outline icons */}
          <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-[#E9D8B8]">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-[#C96B45] shrink-0 mt-0.5" strokeWidth={1.75} />
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-[#1B211E]">Connect</h4>
                <p className="text-[11px] text-slate-600">People and communities.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-[#C96B45] shrink-0 mt-0.5" strokeWidth={1.75} />
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-[#1B211E]">Enable</h4>
                <p className="text-[11px] text-slate-600">Information and participation.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Laptop className="w-5 h-5 text-[#C96B45] shrink-0 mt-0.5" strokeWidth={1.75} />
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-[#1B211E]">Build</h4>
                <p className="text-[11px] text-slate-600">Technology and initiatives.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
