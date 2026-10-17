"use client";

import React, { useState } from "react";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MADHESH_DISTRICTS } from "@/data/madheshDistricts";
import { Users, Handshake, HeartHandshake, CheckCircle2, Send } from "lucide-react";

export default function GetInvolvedPage() {
  const [selectedPathway, setSelectedPathway] = useState<"participate" | "collaborate" | "contribute">("participate");
  const [fullName, setFullName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [district, setDistrict] = useState("Dhanusha");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F0] text-[#1B211E]">
      <UtilityBar />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#0B3F32] text-white py-16 sm:py-24 border-b border-[#176B4D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-[#D99A2B]">
              Community Engagement & Co-Creation
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
              Be part of a more connected Madhesh.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Whether you are a local resident, youth organizer, agricultural cooperative, municipal representative, or researcher—there are meaningful ways to take part.
            </p>
          </div>
        </section>

        {/* Pathway selection tabs */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Participate */}
              <button
                type="button"
                onClick={() => setSelectedPathway("participate")}
                className={`text-left p-6 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                  selectedPathway === "participate"
                    ? "bg-[#176B4D]/10 border-[#176B4D] shadow-sm"
                    : "bg-[#F8F6F0] border-slate-200 hover:border-[#E9D8B8]"
                }`}
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#176B4D] text-[#E9D8B8] flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B3F32]">Participate</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Join civic initiatives, town halls, agricultural circles, and community documentation drives in your local ward.
                  </p>
                </div>
                <span className="text-xs font-bold text-[#176B4D]">
                  {selectedPathway === "participate" ? "✓ Selected Pathway" : "Select Pathway"}
                </span>
              </button>

              {/* Collaborate */}
              <button
                type="button"
                onClick={() => setSelectedPathway("collaborate")}
                className={`text-left p-6 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                  selectedPathway === "collaborate"
                    ? "bg-[#C96B45]/10 border-[#C96B45] shadow-sm"
                    : "bg-[#F8F6F0] border-slate-200 hover:border-[#E9D8B8]"
                }`}
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#C96B45] text-white flex items-center justify-center">
                    <Handshake className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B3F32]">Collaborate</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Partner with us as a municipal committee, rural cooperative, academic department, or civil society collective.
                  </p>
                </div>
                <span className="text-xs font-bold text-[#C96B45]">
                  {selectedPathway === "collaborate" ? "✓ Selected Pathway" : "Select Pathway"}
                </span>
              </button>

              {/* Contribute */}
              <button
                type="button"
                onClick={() => setSelectedPathway("contribute")}
                className={`text-left p-6 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                  selectedPathway === "contribute"
                    ? "bg-[#D99A2B]/10 border-[#D99A2B] shadow-sm"
                    : "bg-[#F8F6F0] border-slate-200 hover:border-[#E9D8B8]"
                }`}
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#D99A2B] text-white flex items-center justify-center">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B3F32]">Contribute</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Share research, field datasets, vernacular translations, or volunteer time to expand public knowledge commons.
                  </p>
                </div>
                <span className="text-xs font-bold text-[#D99A2B]">
                  {selectedPathway === "contribute" ? "✓ Selected Pathway" : "Select Pathway"}
                </span>
              </button>
            </div>

            {/* Interactive Registration Form */}
            <div className="bg-[#F8F6F0] p-8 sm:p-12 rounded-3xl border border-[#E9D8B8]">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#176B4D] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B3F32]">
                    Thank you for stepping forward!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your interest in <strong>{selectedPathway.toUpperCase()}</strong> has been recorded. A coordinator from your district ({district}) will reach out to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setMessage("");
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-[#0B3F32] text-white text-xs font-bold hover:bg-[#176B4D] transition-colors"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-[#0B3F32]">
                      Register Your Interest
                    </h3>
                    <p className="text-xs text-slate-600">
                      Engaging under the pathway:{" "}
                      <strong className="text-[#C96B45] capitalize">{selectedPathway}</strong>
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        Your Full Name:
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Ramesh Chandra Jha"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#176B4D]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        Email Address or Mobile Number:
                      </label>
                      <input
                        type="text"
                        required
                        value={emailOrPhone}
                        onChange={(e) => setEmailOrPhone(e.target.value)}
                        placeholder="e.g. 9800000000 or email@domain.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#176B4D]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        District (Madhesh Province):
                      </label>
                      <select
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#176B4D]"
                      >
                        {MADHESH_DISTRICTS.map((d) => (
                          <option key={d.name} value={d.name}>
                            {d.name} (HQ: {d.headquarters})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        Preferred Language for Contact:
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#176B4D]">
                        <option>Maithili (मैथिली)</option>
                        <option>Nepali (नेपाली)</option>
                        <option>Bhojpuri (भोजपुरी)</option>
                        <option>English</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Tell us briefly about your background or interest:
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your village/ward, cooperative name, academic background, or specific initiative you would like to participate in..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#176B4D]"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] text-slate-500">
                      * Information is held securely under civic privacy protocols.
                    </span>
                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-xl bg-[#C96B45] hover:bg-[#b05834] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-sm"
                    >
                      <span>Submit Registration</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
