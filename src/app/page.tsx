import React from "react";
import { Header } from "@/components/layout/Header";
import { DesignHero } from "@/components/design/DesignHero";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#1B211E] overflow-x-hidden">
      {/* 1. Header with Top Announcement Bar & Main Navigation */}
      <Header />

      {/* 2. First Page View matching mockup */}
      <main className="flex-1 flex flex-col">
        <DesignHero />
      </main>
    </div>
  );
}
