import React from "react";

export function DesignWhoWeAre() {
  return (
    <section className="bg-white py-16 md:py-24 border-b border-[#E9D8B8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-700">
              <span className="w-6 h-0.5 bg-[#C96B45]"></span>
              <span>WHO WE ARE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-[#1B211E] tracking-tight leading-[1.18]">
              A platform built around<br />people, not systems.
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Madhesh Connect is a civic and community-focused platform working to make information, opportunities and participation more accessible. We bring together people, communities, initiatives and technology to create stronger connections and encourage meaningful participation.
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Our work sits at the intersection of community, civic engagement, knowledge and digital innovation.
            </p>
          </div>

          {/* Right Typographic Stack + Documentary Photo */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6 items-center">
            {/* Typographic Block with left vertical line */}
            <div className="border-l-2 border-[#E9D8B8] pl-6 space-y-1 select-none py-2">
              <div className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#0B3F32] leading-tight font-sans">
                PEOPLE
              </div>
              <div className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#C96B45] leading-tight font-sans">
                COMMUNITY
              </div>
              <div className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#0B3F32] leading-tight font-sans">
                PARTICIPATION
              </div>
              <div className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#C96B45] leading-tight font-sans">
                TECHNOLOGY
              </div>
            </div>

            {/* Documentary Photo of Rural Terai Road with large banyan tree */}
            <div className="overflow-hidden aspect-4/3 sm:aspect-5/4 bg-slate-100 shadow-xs">
              <img
                src="/images/rural-road.jpg"
                alt="Rural Terai village road with cyclists under large trees"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
