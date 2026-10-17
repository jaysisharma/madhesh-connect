"use client";

import React, { useState } from "react";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
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
              Field Offices & Civic Inquiries
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
              Contact Madhesh Connect
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              We welcome inquiries from citizens, municipal committees, community organizers, academic researchers, and press correspondents.
            </p>
          </div>
        </section>

        {/* Contact info and Inquiry Form */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Left Column: Office hubs */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C96B45]">
                    Field Offices
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3F32]">
                    Civic Coordination Hubs
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Our field teams operate out of two regional coordination desks to support east and west Terai corridors.
                  </p>
                </div>

                {/* Hub 1: Janakpur */}
                <div className="p-6 rounded-2xl bg-[#F8F6F0] border border-[#E9D8B8] space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-base text-[#0B3F32]">
                      Central & Eastern Terai Hub
                    </h3>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#176B4D]/10 text-[#176B4D]">
                      Janakpurdham
                    </span>
                  </div>
                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#C96B45] shrink-0 mt-0.5" />
                      <span>Ramanand Chowk, Ward 8, Janakpurdham Sub-Metropolitan City, Dhanusha, Nepal</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[#176B4D] shrink-0" />
                      <span>janakpur@madheshconnect.org</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#176B4D] shrink-0" />
                      <span>+977 (41) 590000 / +977 9801000000</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>Sunday – Friday: 9:30 AM – 5:00 PM NPT</span>
                    </div>
                  </div>
                </div>

                {/* Hub 2: Birgunj */}
                <div className="p-6 rounded-2xl bg-[#F8F6F0] border border-[#E9D8B8] space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-base text-[#0B3F32]">
                      Western Terai Coordination Hub
                    </h3>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#176B4D]/10 text-[#176B4D]">
                      Birgunj
                    </span>
                  </div>
                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#C96B45] shrink-0 mt-0.5" />
                      <span>Maisthan Road, Ward 10, Birgunj Metropolitan City, Parsa, Nepal</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[#176B4D] shrink-0" />
                      <span>birgunj@madheshconnect.org</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#176B4D] shrink-0" />
                      <span>+977 (51) 520000 / +977 9802000000</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Inquiry Form */}
              <div className="lg:col-span-7 bg-[#F8F6F0] p-8 sm:p-10 rounded-3xl border border-[#E9D8B8]">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#176B4D] mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0B3F32]">
                      Message Received
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you for contacting Madhesh Connect. Our administrative desk will review your inquiry and respond within two business days.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-xl bg-[#0B3F32] text-white text-xs font-bold hover:bg-[#176B4D] transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold text-[#0B3F32]">
                        Send a Civic Inquiry
                      </h3>
                      <p className="text-xs text-slate-600">
                        Please provide your contact details and specify the subject of your message.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                          Full Name:
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#176B4D]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                          Email Address:
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="email@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#176B4D]"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                          Inquiry Type:
                        </label>
                        <select className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#176B4D]">
                          <option>General Information</option>
                          <option>Municipal Partnership / Ward Program</option>
                          <option>Research Collaboration & Data Request</option>
                          <option>Youth Fellowship Program</option>
                          <option>Press / Media Inquiries</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                          District:
                        </label>
                        <select className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#176B4D]">
                          <option>Dhanusha</option>
                          <option>Parsa</option>
                          <option>Bara</option>
                          <option>Mahottari</option>
                          <option>Sarlahi</option>
                          <option>Rautahat</option>
                          <option>Siraha</option>
                          <option>Saptari</option>
                          <option>Outside Madhesh / National</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        Your Message:
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Please write your inquiry or message here..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#176B4D]"
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="px-8 py-3.5 rounded-xl bg-[#176B4D] hover:bg-[#0B3F32] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-sm"
                      >
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
