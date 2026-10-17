import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function DesignThePeople() {
  const teamMembers = [
    {
      name: "Team Member",
      role: "Role",
      bio: "Short bio or description will be added here.",
      image: "/images/team-1.jpg",
    },
    {
      name: "Team Member",
      role: "Role",
      bio: "Short bio or description will be added here.",
      image: "/images/team-2.jpg",
    },
    {
      name: "Team Member",
      role: "Role",
      bio: "Short bio or description will be added here.",
      image: "/images/team-3.jpg",
    },
    {
      name: "Team Member",
      role: "Role",
      bio: "Short bio or description will be added here.",
      image: "/images/team-4.jpg",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-b border-[#E9D8B8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-8 xl:gap-10 items-start">
          {/* Left Column: The People Narrative */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-700">
              <span className="w-6 h-0.5 bg-[#C96B45]"></span>
              <span>THE PEOPLE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B211E] tracking-tight leading-tight">
              People make<br />the connection.
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Our work is supported by a passionate group of people who bring diverse experiences, skills and perspectives.
            </p>

            <div className="pt-2">
              <Link
                href="/about#team"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B211E] hover:text-[#C96B45] transition-colors cursor-pointer"
              >
                <span>Meet the team</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C96B45]" />
              </Link>
            </div>
          </div>

          {/* Center Column: 4 Team Member Cards */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {teamMembers.map((member, i) => (
              <div key={i} className="space-y-2.5">
                <div className="aspect-square overflow-hidden bg-slate-100 shadow-2xs">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-[#1B211E]">
                    {member.name}
                  </h4>
                  <span className="text-[11px] font-medium text-slate-500 block">
                    {member.role}
                  </span>
                  <p className="text-[10px] text-slate-400 leading-normal">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Collaboration Narrative (Clean White) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-700">
              <span className="w-6 h-0.5 bg-[#C96B45]"></span>
              <span>COLLABORATION</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B211E] leading-tight">
              Change is rarely<br />built alone.
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Madhesh Connect can work alongside communities, organizations, researchers, institutions, technologists and individuals to develop meaningful initiatives.
            </p>

            <div className="pt-2">
              <Link
                href="/get-involved?type=collaborate"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#C96B45] hover:bg-[#b05834] transition-colors shadow-xs"
              >
                <span>Work With Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
