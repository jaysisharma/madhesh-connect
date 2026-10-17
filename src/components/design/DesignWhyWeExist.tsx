import React from "react";

export function DesignWhyWeExist() {
  const pillars = [
    {
      num: "01",
      title: "Access",
      desc: "Making useful information and opportunities easier to discover.",
    },
    {
      num: "02",
      title: "Participation",
      desc: "Creating meaningful ways for people to engage with their communities.",
    },
    {
      num: "03",
      title: "Connection",
      desc: "Bringing people, initiatives, knowledge and technology closer together.",
    },
  ];

  return (
    <section className="bg-[#F8F6F0] py-16 md:py-24 border-b border-[#E9D8B8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-700">
              <span className="w-6 h-0.5 bg-[#C96B45]"></span>
              <span>WHY WE EXIST</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-[#1B211E] tracking-tight leading-[1.18]">
              Connection<br />creates possibility.
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Communities have ideas, knowledge and people who want to contribute. But information, opportunities and participation are not always easy to access or connect. Madhesh Connect exists to help bridge those gaps.
            </p>
          </div>

          {/* Right Column: 3 Pillars with 01, 02, 03 */}
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-8">
            {pillars.map((item) => (
              <div key={item.num} className="space-y-3">
                <div className="flex items-center gap-2 text-[#C96B45]">
                  <span className="font-mono text-base font-bold">{item.num}</span>
                  <span className="w-6 h-0.5 bg-[#C96B45]"></span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#1B211E]">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
