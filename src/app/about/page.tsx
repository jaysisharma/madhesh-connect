import React from "react";
import Link from "next/link";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "About Us — Madhesh Connect",
  description:
    "Learn about Madhesh Connect's vision, mission, approach, principles, and people-first civic commitment across Madhesh, Nepal.",
};

export default function AboutPage() {
  const principles = [
    {
      title: "People First, Technology Second",
      desc: "Digital tools must serve actual community priorities rather than imposing automated solutions onto complex social realities.",
    },
    {
      title: "Radical Civic Transparency",
      desc: "All baseline data, research publications, and municipal asset inventories are made publicly accessible under open commons principles.",
    },
    {
      title: "Vernacular Dignity",
      desc: "Madhesh's linguistic plurality—Maithili, Bhojpuri, Bajjika, Urdu, and Nepali—is respected across all documentation and digital interfaces.",
    },
    {
      title: "Privacy & Data Sovereignty",
      desc: "Citizen identities and grievance submissions are safeguarded with strict human-in-the-loop oversight and zero third-party commercial exploitation.",
    },
    {
      title: "Non-Partisan Public Service",
      desc: "We collaborate across ward councils and political boundaries in the sole interest of public welfare, equity, and institutional capability.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F0] text-[#1B211E]">
      <UtilityBar />
      <Header />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="bg-[#0B3F32] text-white py-16 sm:py-24 border-b border-[#176B4D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-[#D99A2B]">
              Institutional Identity & Purpose
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
              A civic platform rooted in the people and soil of Madhesh.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Madhesh Connect is an independent civic and community digital foundation dedicated to bridging people, communities, public knowledge, and useful technology.
            </p>
          </div>
        </section>

        {/* Who We Are & Vision */}
        <section id="who-we-are" className="py-20 bg-white border-b border-[#E9D8B8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C96B45]">
                  Who We Are
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3F32] tracking-tight">
                  Building civic bridges across eight districts.
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Madhesh Connect was established with a singular conviction: that genuine public progress begins when residents have the informational agency and communal platforms to participate meaningfully in local governance and development.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Stretching from the wetlands of Saptari to the commercial arteries of Parsa, Madhesh represents one of Nepal&apos;s most culturally dense, economically vital, yet historically underserved provinces. We work directly with youth organizers, rural farmers, women-led cooperatives, and municipal offices to build lasting public capability.
                </p>

                <div className="p-6 rounded-2xl bg-[#F8F6F0] border border-[#E9D8B8] space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#176B4D] block">
                    Our Core Sequence
                  </span>
                  <div className="font-mono text-sm font-bold text-[#0B3F32] flex flex-wrap items-center gap-2">
                    <span>People</span>
                    <span>→</span>
                    <span>Community</span>
                    <span>→</span>
                    <span>Participation</span>
                    <span>→</span>
                    <span>Technology</span>
                    <span>→</span>
                    <span>Impact</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-4/3">
                  <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop"
                    alt="Youth and community members participating in local civic workshop"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section id="vision-mission" className="py-20 bg-[#F8F6F0] border-b border-[#E9D8B8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#176B4D]/10 text-[#176B4D] flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="text-2xl font-bold text-[#0B3F32]">Our Vision</h3>
                <p className="text-base text-slate-700 leading-relaxed font-serif italic">
                  &ldquo;A more connected Madhesh where people have greater access to information, opportunities, and meaningful participation.&rdquo;
                </p>
                <p className="text-xs text-slate-600 leading-relaxed pt-2">
                  A society where every resident—irrespective of geography, language, or social standing—is equipped with the transparent knowledge and civic voice to shape their community&apos;s destiny.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#C96B45]/10 text-[#C96B45] flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="text-2xl font-bold text-[#0B3F32]">Our Mission</h3>
                <p className="text-base text-slate-700 leading-relaxed font-serif italic">
                  &ldquo;To organize, translate, and mobilize public knowledge through responsible civic tech, community partnerships, and grassroots fellowships.&rdquo;
                </p>
                <p className="text-xs text-slate-600 leading-relaxed pt-2">
                  We demystify public processes, standardize municipal administrative paperwork, nurture youth leaders, and provide independent field research for informed policymaking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section id="principles" className="py-20 bg-white border-b border-[#E9D8B8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-2xl space-y-2 mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C96B45]">
                Ethical Commitments
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3F32] tracking-tight">
                Guiding Principles
              </h2>
              <p className="text-sm text-slate-600">
                Non-negotiable ethical standards governing our field work, digital infrastructure, and community collaborations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((pr, idx) => (
                <div
                  key={pr.title}
                  className="p-6 rounded-2xl bg-[#F8F6F0] border border-[#E9D8B8]/60 space-y-3"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#176B4D]">
                    <CheckCircle className="w-4 h-4 text-[#C96B45]" />
                    <span>Principle 0{idx + 1}</span>
                  </div>
                  <h4 className="text-base font-bold text-[#0B3F32]">{pr.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{pr.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-[#0B3F32] text-white text-center">
          <div className="max-w-3xl mx-auto px-4 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Join us in strengthening Madhesh&apos;s civic commons.
            </h3>
            <p className="text-sm text-slate-300">
              Discover our active initiatives or collaborate with our civic field teams.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Link
                href="/initiatives"
                className="px-6 py-3 rounded-xl bg-[#E9D8B8] text-[#0B3F32] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
              >
                View Initiatives
              </Link>
              <Link
                href="/get-involved"
                className="px-6 py-3 rounded-xl bg-[#C96B45] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#b05834] transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
