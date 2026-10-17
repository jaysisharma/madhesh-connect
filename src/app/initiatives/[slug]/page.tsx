import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { INITIATIVES } from "@/data/initiatives";
import { MapPin, Calendar, CheckCircle2, ArrowLeft, ArrowRight, Handshake } from "lucide-react";

export async function generateStaticParams() {
  return INITIATIVES.map((initiative) => ({
    slug: initiative.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function InitiativeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const initiative = INITIATIVES.find((i) => i.slug === slug);

  if (!initiative) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F0] text-[#1B211E]">
      <UtilityBar />
      <Header />

      <main className="flex-1">
        {/* Breadcrumb & Top Bar */}
        <div className="bg-[#0B3F32] text-white py-12 border-b border-[#176B4D]">
          <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-4">
            <Link
              href="/initiatives"
              className="inline-flex items-center gap-1.5 text-xs text-[#E9D8B8] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all initiatives</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[#176B4D] text-[#E9D8B8]">
                {initiative.category}
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-white/20 text-white">
                Status: {initiative.status}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-4xl leading-tight">
              {initiative.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 pt-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#C96B45]" />
                {initiative.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#D99A2B]" />
                Launched: {initiative.startDate}
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Narrative */}
            <div className="lg:col-span-8 space-y-8">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-16/9">
                <img
                  src={initiative.coverImage}
                  alt={initiative.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-4">
                <h3 className="text-xl font-bold text-[#0B3F32] not-prose">
                  Initiative Overview & Context
                </h3>
                <p className="text-base text-slate-800 font-medium leading-relaxed">
                  {initiative.description}
                </p>
                {initiative.fullContent.trim().split("\n\n").map((para, idx) => (
                  <p key={idx} className="text-slate-600 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Key Outputs */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#176B4D]">
                  Documented Outputs & Milestones
                </h4>
                <ul className="space-y-3">
                  {initiative.keyOutputs.map((output, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#176B4D] shrink-0 mt-0.5" />
                      <span>{output}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar metadata */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-6 shadow-2xs">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Primary Jurisdiction
                  </h4>
                  <p className="text-sm font-semibold text-[#0B3F32]">
                    {initiative.location}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Partnering Collectives
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {initiative.partners.map((p, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <Handshake className="w-3.5 h-3.5 text-[#C96B45]" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href="/get-involved"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#C96B45] hover:bg-[#b05834] text-white text-xs font-bold transition-colors"
                  >
                    <span>Participate in this Program</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#E9D8B8]/40 border border-[#E9D8B8] space-y-2 text-xs text-slate-700">
                <span className="font-bold text-[#0B3F32] block">
                  CMS Verification Notice
                </span>
                <p>
                  All metrics, locations, and milestones for this initiative are validated by field coordinators and community representatives.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
