import React from "react";
import Link from "next/link";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CIVIC_EVENTS } from "@/data/stories";
import { MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Events & Convenings — Madhesh Connect",
  description:
    "Upcoming civic town halls, research symposia, and community dialogues across Madhesh Province.",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F0] text-[#1B211E]">
      <UtilityBar />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#0B3F32] text-white py-16 sm:py-24 border-b border-[#176B4D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-[#D99A2B]">
              Democratic Convenings & Deliberation
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
              Events & Town Halls
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Open public forums, participatory consultation sessions, and youth capacity workshops held across Janakpurdham, Birgunj, Lahan, and regional civic hubs.
            </p>
          </div>
        </section>

        {/* Events Table / Institutional Listing */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {CIVIC_EVENTS.map((event) => (
                <div
                  key={event.id}
                  className="py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#F8F6F0]/50 px-4 rounded-xl transition-colors"
                >
                  <div className="md:w-64 shrink-0 flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#0B3F32] text-white flex flex-col items-center justify-center font-mono shrink-0 shadow-xs">
                      <span className="text-[10px] uppercase font-bold text-[#D99A2B]">
                        {event.date.split(" ")[0].slice(0, 3)}
                      </span>
                      <span className="text-xl font-extrabold leading-none">
                        {event.date.split(" ")[1].replace(",", "")}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-[#0B3F32] block">
                        {event.date}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#C96B45]" />
                        {event.time}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#D99A2B]/15 text-[#916213]">
                        {event.category}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#176B4D]" />
                        {event.location}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#0B3F32]">
                      {event.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                      {event.description}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#176B4D] hover:bg-[#0B3F32] transition-colors"
                    >
                      <span>RSVP / Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
