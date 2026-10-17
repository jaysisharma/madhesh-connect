"use client";

import React, { useState } from "react";
import {
  FileText,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Sliders,
  Send,
} from "lucide-react";
import { normalizeMadheshAddress, NormalizedAddress } from "@/data/madheshDistricts";

interface SampleDocument {
  id: string;
  name: string;
  type: string;
  rawAddress: string;
  extractedText: string;
  applicant: string;
}

const SAMPLE_DOCS: SampleDocument[] = [
  {
    id: "doc-1",
    name: "Elderly Allowance Recommendation Application",
    type: "Social Security Recommendation",
    rawAddress: "Janakpur-4, Dhanusha",
    extractedText:
      "Applicant Ram Chandra Mandal, resident of Janakpur-4, Dhanusha, requesting verification of continuous local residence for senior citizen social protection allowance disbursement.",
    applicant: "Ram Chandra Mandal",
  },
  {
    id: "doc-2",
    name: "Farmer Cooperative Irrigation Relief Notice",
    type: "Community Grievance / Request",
    rawAddress: "Lahan City w-12, Siraha",
    extractedText:
      "Submitted by Siraha Pragatisheel Krishak Samuha. Our feeder canal branch in Lahan-12 is silted following flash flooding from the Balan river basin.",
    applicant: "Suresh Sah (Cooperative Representative)",
  },
  {
    id: "doc-3",
    name: "Ward Citizenship Recommendation Form",
    type: "Vital Documentation Intake",
    rawAddress: "Birgunj-14, Parsa",
    extractedText:
      "Recommendation request for Sarita Kumari Patel, born in Ward 14, Birgunj Metropolitan City, Parsa district. Requires ward council verification.",
    applicant: "Sarita Kumari Patel",
  },
];

export function DocumentIntelligenceDemo() {
  const [selectedDoc, setSelectedDoc] = useState<SampleDocument>(SAMPLE_DOCS[0]);
  const [addressInput, setAddressInput] = useState<string>(SAMPLE_DOCS[0].rawAddress);
  const [normalizedResult, setNormalizedResult] = useState<NormalizedAddress>(
    normalizeMadheshAddress(SAMPLE_DOCS[0].rawAddress)
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const [adminVerified, setAdminVerified] = useState(false);
  const [activeTab, setActiveTab] = useState<"ocr" | "address" | "grievance">("ocr");

  // Grievance classification state
  const [grievanceText, setGrievanceText] = useState(
    "Our village road in Dhanusadham has been severely damaged after torrential monsoon rain, cutting off tractor access and affecting canal irrigation."
  );
  const [classifiedGrievance, setClassifiedGrievance] = useState<{
    category: string;
    subCategory: string;
    location: string;
    priority: "Low" | "Medium" | "High";
  } | null>({
    category: "Infrastructure",
    subCategory: "Road & Irrigation Access",
    location: "Dhanusadham, Dhanusha",
    priority: "Medium",
  });

  const handleSelectDoc = (doc: SampleDocument) => {
    setSelectedDoc(doc);
    setAddressInput(doc.rawAddress);
    setIsProcessing(true);
    setAdminVerified(false);

    setTimeout(() => {
      setNormalizedResult(normalizeMadheshAddress(doc.rawAddress));
      setIsProcessing(false);
    }, 400);
  };

  const handleAddressNormalize = (text: string) => {
    setAddressInput(text);
    setIsProcessing(true);
    setAdminVerified(false);
    setTimeout(() => {
      setNormalizedResult(normalizeMadheshAddress(text));
      setIsProcessing(false);
    }, 250);
  };

  const handleClassifyGrievance = () => {
    setIsProcessing(true);
    setTimeout(() => {
      let cat = "Civic Services";
      let sub = "Public Administration";
      let loc = "Janakpurdham, Dhanusha";
      let pri: "Low" | "Medium" | "High" = "Medium";

      const lower = grievanceText.toLowerCase();
      if (lower.includes("road") || lower.includes("canal") || lower.includes("irrigation") || lower.includes("bridge")) {
        cat = "Infrastructure";
        sub = "Road & Irrigation";
        pri = "High";
      } else if (lower.includes("health") || lower.includes("clinic") || lower.includes("medicine")) {
        cat = "Public Health";
        sub = "Local Health Post";
        pri = "High";
      } else if (lower.includes("school") || lower.includes("teacher") || lower.includes("student")) {
        cat = "Education";
        sub = "Ward Primary School";
        pri = "Medium";
      }

      if (lower.includes("siraha")) loc = "Siraha District";
      if (lower.includes("parsa") || lower.includes("birgunj")) loc = "Parsa District";
      if (lower.includes("dhanusha") || lower.includes("janakpur")) loc = "Dhanusha District";

      setClassifiedGrievance({
        category: cat,
        subCategory: sub,
        location: loc,
        priority: pri,
      });
      setIsProcessing(false);
    }, 400);
  };

  return (
    <div className="bg-white border border-[#E9D8B8] overflow-hidden">
      {/* Top Banner explaining the civic technology philosophy */}
      <div className="bg-[#0B3F32] p-6 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#176B4D]">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#D99A2B] font-bold">
            Administrative Workflow Specification
          </span>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
            Municipal Records & Address Standardization
          </h3>
          <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
            Illustrating how Madhesh Connect standardizes vernacular intake, extracts jurisdiction records, and organizes community submissions with mandatory municipal officer verification.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex bg-[#072920] p-1 text-xs font-semibold shrink-0 border border-[#176B4D]">
          <button
            type="button"
            onClick={() => setActiveTab("ocr")}
            className={`px-3 py-1.5 transition-colors ${
              activeTab === "ocr"
                ? "bg-[#E9D8B8] text-[#0B3F32] font-bold"
                : "text-slate-300 hover:text-white"
            }`}
          >
            01 Record Extraction
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("address")}
            className={`px-3 py-1.5 transition-colors ${
              activeTab === "address"
                ? "bg-[#E9D8B8] text-[#0B3F32] font-bold"
                : "text-slate-300 hover:text-white"
            }`}
          >
            02 Address Normalizer
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("grievance")}
            className={`px-3 py-1.5 transition-colors ${
              activeTab === "grievance"
                ? "bg-[#E9D8B8] text-[#0B3F32] font-bold"
                : "text-slate-300 hover:text-white"
            }`}
          >
            03 Submission Classifier
          </button>
        </div>
      </div>

      {/* Main interactive area */}
      <div className="p-6 sm:p-8 bg-[#F8F6F0]">
        {activeTab === "ocr" && (
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left: Document selection & preview */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
                  Select Municipal Record Type
                </span>
                <span className="text-[11px] font-mono text-[#176B4D] font-semibold">
                  Intake Workflow
                </span>
              </div>

              <div className="space-y-2.5">
                {SAMPLE_DOCS.map((doc) => (
                  <button
                    key={doc.id}
                    type="button"
                    onClick={() => handleSelectDoc(doc)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs ${
                      selectedDoc.id === doc.id
                        ? "bg-[#176B4D]/10 border-[#176B4D] shadow-xs text-[#0B3F32]"
                        : "bg-white border-slate-200 hover:border-[#E9D8B8] text-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-[#0B3F32]">{doc.name}</span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {doc.type}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 line-clamp-1">{doc.extractedText}</p>
                    <div className="mt-2 text-[10px] text-slate-400 font-mono">
                      Raw Address: &ldquo;{doc.rawAddress}&rdquo;
                    </div>
                  </button>
                ))}
              </div>

              {/* Document Text Box */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-slate-800">
                  <FileText className="w-4 h-4 text-[#C96B45]" />
                  <span>Transcribed Document Excerpt</span>
                </div>
                <p className="italic text-slate-600 bg-slate-50 p-2.5 rounded border border-slate-100 leading-relaxed font-serif">
                  &ldquo;{selectedDoc.extractedText}&rdquo;
                </p>
              </div>
            </div>

            {/* Right: Extracted & Normalized Entities + Admin Review */}
            <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h4 className="font-bold text-base text-[#0B3F32]">
                    Structured Civic Data Record
                  </h4>
                  <p className="text-xs text-slate-500">
                    Extracted entities normalized against Madhesh local jurisdiction standard
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {isProcessing ? (
                    <span className="inline-flex items-center gap-1 text-xs text-[#C96B45]">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      Normalizing...
                    </span>
                  ) : adminVerified ? (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Admin Verified & Saved
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800">
                      <AlertCircle className="w-3.5 h-3.5" />
                      Awaiting Admin Approval
                    </span>
                  )}
                </div>
              </div>

              {/* Extraction Grid */}
              <div className="grid sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3 rounded-xl bg-[#F8F6F0] border border-slate-200/80">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                    Applicant Name
                  </span>
                  <span className="font-semibold text-sm text-[#1B211E]">
                    {selectedDoc.applicant}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#F8F6F0] border border-slate-200/80">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                    Document Classification
                  </span>
                  <span className="font-semibold text-sm text-[#1B211E]">
                    {selectedDoc.type}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#F8F6F0] border border-slate-200/80">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                    Province
                  </span>
                  <span className="font-semibold text-sm text-[#176B4D]">
                    {normalizedResult.province}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#F8F6F0] border border-slate-200/80">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                    District
                  </span>
                  <span className="font-semibold text-sm text-[#176B4D]">
                    {normalizedResult.district}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#F8F6F0] border border-slate-200/80">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                    Local Level (Municipality / Sub-Metropolitan)
                  </span>
                  <span className="font-semibold text-sm text-[#0B3F32]">
                    {normalizedResult.localLevel}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#F8F6F0] border border-slate-200/80">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                    Ward Number
                  </span>
                  <span className="font-semibold text-sm text-[#C96B45]">
                    Ward {normalizedResult.ward}
                  </span>
                </div>
              </div>

              {/* Confidence metric & Ethics safeguard */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-[#176B4D]" />
                  <span>Classification Confidence:</span>
                  <strong className="text-slate-800">
                    {(normalizedResult.confidence * 100).toFixed(0)}%
                  </strong>
                </span>
                <span className="text-[11px] text-slate-500">
                  Raw Match: &ldquo;{normalizedResult.rawInput}&rdquo;
                </span>
              </div>

              {/* Admin Human Review Controls */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
                <p className="text-[11px] text-slate-500">
                  * Municipal administrative records are never published without municipal officer validation.
                </p>
                <button
                  type="button"
                  onClick={() => setAdminVerified(!adminVerified)}
                  className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm ${
                    adminVerified
                      ? "bg-slate-200 text-slate-700 hover:bg-slate-300"
                      : "bg-[#176B4D] hover:bg-[#0B3F32] text-white"
                  }`}
                >
                  {adminVerified ? "Reset Approval" : "Approve & Save Record"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Address Normalizer Standalone Tab */}
        {activeTab === "address" && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
              <h4 className="font-bold text-lg text-[#0B3F32]">
                Madhesh Address Intelligence Engine
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Test how vernacular, abbreviated, or informal address inputs across the 8 districts are normalized into official federal local government entities.
              </p>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Type or Paste Address Variant:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={addressInput}
                    onChange={(e) => handleAddressNormalize(e.target.value)}
                    placeholder="e.g. Janakpur-4, Dhanusha or JNKP-4 or Birgunj-12"
                    className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#176B4D]"
                  />
                  <button
                    type="button"
                    onClick={() => handleAddressNormalize(addressInput)}
                    className="px-5 py-2.5 rounded-xl bg-[#176B4D] text-white text-xs font-bold hover:bg-[#0B3F32] transition-colors"
                  >
                    Normalize
                  </button>
                </div>
              </div>

              {/* Sample quick pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                <span className="text-slate-400 font-medium">Try variations:</span>
                {["Janakpur-4, Dhanusha", "JNKP-4", "Birgunj-12, Parsa", "Simara-3, Bara", "Lahan-24, Siraha"].map(
                  (sample) => (
                    <button
                      key={sample}
                      type="button"
                      onClick={() => handleAddressNormalize(sample)}
                      className="px-2.5 py-1 rounded-lg bg-[#E9D8B8]/40 hover:bg-[#E9D8B8] text-[#0B3F32] font-medium transition-colors"
                    >
                      {sample}
                    </button>
                  )
                )}
              </div>

              {/* Output comparison box */}
              <div className="mt-4 p-5 rounded-xl bg-[#0B3F32] text-white space-y-3 font-mono text-xs">
                <div className="text-[#D99A2B] font-sans font-bold text-sm">
                  ✓ Normalized Administrative Jurisdiction Output
                </div>
                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <span className="text-slate-400 text-[11px] block">Province:</span>
                    <span className="text-emerald-300 font-semibold">{normalizedResult.province}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block">District:</span>
                    <span className="text-emerald-300 font-semibold">{normalizedResult.district}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block">Local Level (Local Government):</span>
                    <span className="text-white font-semibold">{normalizedResult.localLevel}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block">Ward:</span>
                    <span className="text-[#E9D8B8] font-bold text-sm">Ward {normalizedResult.ward}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Community Form Classification Tab */}
        {activeTab === "grievance" && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
              <h4 className="font-bold text-lg text-[#0B3F32]">
                Community Submission & Grievance Classifier
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Demonstrating Section 21: When citizens submit local infrastructure or public service concerns, AI suggests classification categories and priority for municipal officers to review.
              </p>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Community Submission Input:
                </label>
                <textarea
                  rows={3}
                  value={grievanceText}
                  onChange={(e) => setGrievanceText(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#176B4D]"
                  placeholder="Type an issue or request..."
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleClassifyGrievance}
                  className="px-5 py-2.5 rounded-xl bg-[#176B4D] text-white text-xs font-bold hover:bg-[#0B3F32] transition-colors flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Analyze Submission</span>
                </button>
              </div>

              {classifiedGrievance && (
                <div className="mt-4 p-5 rounded-xl bg-[#F8F6F0] border border-slate-200 space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-[#0B3F32]">
                      AI Classification Recommendation
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded font-bold uppercase text-[10px] ${
                        classifiedGrievance.priority === "High"
                          ? "bg-red-100 text-red-700"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      Priority: {classifiedGrievance.priority}
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-3">
                    <div className="bg-white p-3 rounded-lg border border-slate-200">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">
                        Category
                      </span>
                      <span className="font-bold text-slate-800">
                        {classifiedGrievance.category}
                      </span>
                    </div>

                    <div className="bg-white p-3 rounded-lg border border-slate-200">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">
                        Sub-Category
                      </span>
                      <span className="font-semibold text-slate-700">
                        {classifiedGrievance.subCategory}
                      </span>
                    </div>

                    <div className="bg-white p-3 rounded-lg border border-slate-200">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">
                        Identified Location
                      </span>
                      <span className="font-semibold text-[#176B4D]">
                        {classifiedGrievance.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 italic pt-1">
                    * The administrative desk reviews and validates classifications before routing to municipal engineering or social units.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
