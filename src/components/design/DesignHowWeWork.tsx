import React from "react";
import { ArrowRight } from "lucide-react";

export function DesignHowWeWork() {
  const steps = [
    {
      num: "01",
      title: "Listen",
      desc: "Understand people, communities and local contexts.",
    },
    {
      num: "02",
      title: "Learn",
      desc: "Research, document and understand the issue.",
    },
    {
      num: "03",
      title: "Build",
      desc: "Develop practical initiatives, resources and digital tools.",
    },
    {
      num: "04",
      title: "Connect",
      desc: "Bring people, knowledge and opportunities together.",
    },
  ];

  const principles = [
    {
      title: "People First",
      desc: "Technology should serve people, not the other way around.",
    },
    {
      title: "Local Context",
      desc: "Solutions should reflect the realities of the communities they serve.",
    },
    {
      title: "Accessibility",
      desc: "Useful information and opportunities should be easier to access.",
    },
    {
      title: "Collaboration",
      desc: "Meaningful change is built through collaboration.",
    },
    {
      title: "Responsible Technology",
      desc: "Digital tools should be thoughtful, transparent and responsible.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-b border-[#E9D8B8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Part 1: How We Work - Left Headline + Right 4 Steps in a Row */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Headline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-700">
              <span className="w-6 h-0.5 bg-[#C96B45]"></span>
              <span>HOW WE WORK</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-[#1B211E] tracking-tight leading-[1.18]">
              We start with people<br />and work outward.
            </h2>
          </div>

          {/* Right Column: 4 Steps Horizontally Connected */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={step.num} className="space-y-3 relative">
                {/* Number and arrow */}
                <div className="flex items-center gap-2 text-[#C96B45]">
                  <span className="font-mono text-base font-bold">{step.num}</span>
                  {idx < steps.length - 1 ? (
                    <div className="flex items-center gap-1 text-[#C96B45]">
                      <span className="w-6 h-0.5 bg-[#C96B45]"></span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  ) : (
                    <span className="w-6 h-0.5 bg-[#C96B45]"></span>
                  )}
                </div>

                <h3 className="text-xl font-serif font-bold text-[#1B211E]">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E9D8B8]"></div>

        {/* Part 2: What Guides Us - Left Title + Right 5 Ledger Columns */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-3 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B211E]">
              What guides us
            </h3>
            <div className="w-10 h-0.5 bg-[#C96B45]"></div>
          </div>

          <div className="lg:col-span-9 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:divide-x lg:divide-[#E9D8B8]">
            {principles.map((pr, idx) => (
              <div key={pr.title} className={`space-y-2 ${idx > 0 ? "lg:pl-5" : ""}`}>
                <h4 className="text-xs sm:text-sm font-bold text-[#1B211E]">
                  {pr.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {pr.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
