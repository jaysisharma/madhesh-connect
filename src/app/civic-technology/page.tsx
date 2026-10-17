import { UtilityBar } from "@/components/layout/UtilityBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DocumentIntelligenceDemo } from "@/components/civic-tech/DocumentIntelligenceDemo";
import {
  ShieldCheck,
  Database,
  Search,
  DollarSign,
  Lock,
} from "lucide-react";

export const metadata = {
  title: "Civic Technology — Madhesh Connect",
  description:
    "Responsible digital technology, document intelligence, address normalization, and ethical AI architecture designed for civic utility in Madhesh.",
};

export default function CivicTechnologyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F0] text-[#1B211E]">
      <UtilityBar />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#0B3F32] text-white py-16 sm:py-24 border-b border-[#176B4D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-[#D99A2B]">
              Civic Digital Infrastructure
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-4xl leading-tight">
              Technology that makes information more useful.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Madhesh Connect deploys responsible, open, and lightweight digital infrastructure to make public knowledge easier to collect, organize, discover, and verify.
            </p>
          </div>
        </section>

        {/* Philosophy Callout: Not a SaaS product */}
        <section id="overview" className="py-16 bg-white border-b border-[#E9D8B8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F8F6F0] border border-[#E9D8B8] space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#176B4D] text-[#E9D8B8] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-[#0B3F32]">
                  Civic Infrastructure, Not a Commercial SaaS Startup
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-4xl">
                Unlike venture-backed technology platforms driven by attention extraction and user monetization, Madhesh Connect approaches software as <strong>public civic infrastructure</strong>. Our tools solve concrete informational bottlenecks: resolving colloquial municipal addresses, deciphering handwritten community petitions, providing natural language retrieval over verified publications, and bridging linguistic divides.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-[#176B4D] block uppercase">
                    Zero Dark Patterns
                  </span>
                  <p className="text-xs text-slate-600">
                    No algorithmic addiction, ad tracking, or commercial profiling of citizen users.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-[#C96B45] block uppercase">
                    Human-in-the-Loop
                  </span>
                  <p className="text-xs text-slate-600">
                    AI assists with transcription and recommendations; human administrators make every final decision.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-[#0B3F32] block uppercase">
                    Vernacular First
                  </span>
                  <p className="text-xs text-slate-600">
                    Engineered from ground up to respect Maithili, Bhojpuri, and Nepali script variations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Simulator Showcase */}
        <section id="ocr" className="py-20 bg-[#F8F6F0] border-b border-[#E9D8B8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C96B45]">
                Demonstration & Workflows
              </span>
              <h2 className="text-3xl font-extrabold text-[#0B3F32] tracking-tight">
                Document & Address Intelligence in Practice
              </h2>
              <p className="text-sm text-slate-600">
                Test the underlying normalization engine and grievance classifier directly in your browser.
              </p>
            </div>

            <DocumentIntelligenceDemo />
          </div>
        </section>

        {/* Technical Architecture Sections */}
        <section id="address-intelligence" className="py-20 bg-white border-b border-[#E9D8B8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
            {/* Address Intelligence Deep Dive */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#176B4D]">
                  Location Normalization
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B3F32]">
                  Solving the Vernacular Address Friction
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  In Madhesh Province, municipal jurisdiction references are frequently written in colloquial or legacy formats—such as referring to a ward by an old village name (e.g. &ldquo;Dhalkebar-2&rdquo;) or abbreviated notation (&ldquo;JNKP-4&rdquo;).
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Madhesh Connect maps every known local alias across all 136 local bodies into standardized federal attributes:
                </p>
                <ul className="space-y-2 text-xs text-slate-700 font-mono bg-[#F8F6F0] p-4 rounded-xl border border-[#E9D8B8]">
                  <li>Input: &ldquo;Janakpur-4, Dhanusha&rdquo; or &ldquo;JNKP-4&rdquo;</li>
                  <li className="text-[#176B4D] font-bold">→ Province: Madhesh Province</li>
                  <li className="text-[#176B4D] font-bold">→ District: Dhanusha</li>
                  <li className="text-[#176B4D] font-bold">→ Local Level: Janakpurdham Sub-Metropolitan City</li>
                  <li className="text-[#176B4D] font-bold">→ Ward: 4</li>
                </ul>
              </div>

              <div className="bg-[#0B3F32] p-8 rounded-3xl text-white space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#176B4D] text-[#E9D8B8] flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-[#E9D8B8]">
                  8-District Administrative Ontology
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Covering 1 Metropolitan City (Birgunj), 3 Sub-Metropolitan Cities (Janakpurdham, Kalaiya, Jeetpursimara), 73 Municipalities, and 59 Rural Municipalities across Saptari, Siraha, Dhanusha, Mahottari, Sarlahi, Rautahat, Bara, and Parsa.
                </p>
                <div className="pt-2 text-xs text-slate-400">
                  Data format: GeoJSON + Open JSON-LD Civic Ontology
                </div>
              </div>
            </div>

            {/* Smart Search Architecture */}
            <div id="smart-search" className="grid lg:grid-cols-2 gap-12 items-center pt-8 border-t border-slate-200">
              <div className="bg-[#F8F6F0] p-8 rounded-3xl border border-[#E9D8B8] space-y-4 order-2 lg:order-1">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E9D8B8] text-[#C96B45] flex items-center justify-center">
                  <Search className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-[#0B3F32]">
                  Grounded Natural Language Retrieval
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Instead of hallucinating general knowledge from the open internet, our search index performs intent recognition strictly against verified Madhesh Connect publications, active initiatives, baseline studies, and public town hall schedules.
                </p>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs font-mono text-[#176B4D]">
                  Query: &ldquo;Show me youth-related initiatives in Dhanusha&rdquo;
                  <br />
                  Result: Matches Madhesh Civic Youth Fellowship (Dhanusha) + RTI Handbook
                </div>
              </div>

              <div className="space-y-4 order-1 lg:order-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C96B45]">
                  Natural Language Query
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B3F32]">
                  Information Discovery Without Jargon
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Traditional government websites force citizens to memorize exact administrative acronyms or hunt through labyrinthine nested menus.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Madhesh Connect enables citizens, community workers, and students to ask plain questions in everyday language and receive verified institutional records instantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 22: AI Budget & Usage Transparency */}
        <section id="ethics" className="py-20 bg-[#F8F6F0] border-b border-[#E9D8B8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mx-auto bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#D99A2B] flex items-center justify-center">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Transparency & Governance
                  </span>
                  <h3 className="text-xl font-bold text-[#0B3F32]">
                    AI Service & Initial API Credit Specification
                  </h3>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F6F0] border border-slate-200 text-xs font-mono text-slate-800 space-y-1">
                <div className="font-bold text-[#0B3F32]">
                  Quotation Line Item: AI Service & Initial API Credit — USD 75 / 2 Years
                </div>
                <div className="text-slate-600">
                  Allocation: Initial usage credit for OCR transcription and natural language search based on projected early-stage civic usage.
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Madhesh Connect prioritizes transparent budgeting. The USD 75 allocation represents an initial early-stage credit pool rather than unlimited usage. In high-traffic scenarios or large-scale historical document digitization drives, consumption is monitored transparently, with additional API capacity provisioned according to actual provider costs.
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
                <Lock className="w-4 h-4 text-[#176B4D]" />
                <span>Zero telemetry or citizen personally identifiable information is sent to third-party ad networks.</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
