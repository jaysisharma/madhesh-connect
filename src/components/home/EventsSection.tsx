import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { CIVIC_EVENTS } from "@/data/stories";

export function EventsSection() {
  return (
    <section className="py-20 bg-white border-b border-[#E9D8B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Masthead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E9D8B8]">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-[#D99A2B] font-bold">
              Public Convenings & Deliberation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3F32] tracking-tight">
              Upcoming Civic Events & Town Halls
            </h2>
            <p className="text-sm sm:text-base text-slate-700">
              Open public forums, research symposia, and community dialogues held across Janakpurdham, Birgunj, and regional district hubs.
            </p>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#176B4D] hover:text-[#0B3F32] group shrink-0"
          >
            <span>All Convenings</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Structured Institutional Docket */}
        <div className="divide-y divide-[#E9D8B8] border-y border-[#E9D8B8]">
          {CIVIC_EVENTS.map((event) => (
            <div
              key={event.id}
              className="py-6 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#F8F6F0]/80 px-2 sm:px-4 transition-colors"
            >
              {/* Date Column */}
              <div className="md:w-56 shrink-0 flex items-start gap-3">
                <div className="w-12 h-12 bg-[#0B3F32] text-white flex flex-col items-center justify-center font-mono shrink-0 border border-[#176B4D]">
                  <span className="text-[9px] uppercase font-bold text-[#D99A2B]">
                    {event.date.split(" ")[0].slice(0, 3)}
                  </span>
                  <span className="text-base font-extrabold leading-none">
                    {event.date.split(" ")[1].replace(",", "")}
                  </span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-[#0B3F32] block">
                    {event.date}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#C96B45]" />
                    {event.time}
                  </span>
                </div>
              </div>

              {/* Event Description Column */}
              <div className="flex-1 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 bg-[#D99A2B]/20 text-[#82560e]">
                    {event.category}
                  </span>
                  <span className="text-xs text-slate-600 flex items-center gap-1 font-medium">
                    <MapPin className="w-3 h-3 text-[#176B4D]" />
                    {event.location}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0B3F32] hover:text-[#176B4D] transition-colors">
                  {event.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
                  {event.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="shrink-0">
                <Link
                  href={event.registrationUrl}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0B3F32] bg-[#E9D8B8]/60 hover:bg-[#E9D8B8] border border-[#E9D8B8] transition-colors"
                >
                  <span>Attend / Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
