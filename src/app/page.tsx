import React from "react";
import { Header } from "@/components/layout/Header";
import { DesignHero } from "@/components/design/DesignHero";
import { DesignTheContext } from "@/components/design/DesignTheContext";
import { FeaturedInitiativesSection } from "@/components/home/FeaturedInitiativesSection";
import { DesignWhyWeExist } from "@/components/design/DesignWhyWeExist";
import { DesignHowWeWork } from "@/components/design/DesignHowWeWork";
import { DesignThePeople } from "@/components/design/DesignThePeople";
import { DesignPreFooter } from "@/components/design/DesignPreFooter";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#1B211E] overflow-x-hidden">
      {/* 1. Clean Navigation Header */}
      <Header />

      {/* 2. Complete Editorial Narrative Flow */}
      <main className="flex-1 flex flex-col">
        {/* Cinematic Ecosystem Wheel Hero */}
        <DesignHero />

        {/* Working Scroll Anchor */}
        <div id="overview" className="scroll-mt-12">
          {/* Terai Ground Context & 8 Districts */}
          <DesignTheContext />

          {/* Real Field Programs & Active Pilots */}
          <FeaturedInitiativesSection />

          {/* Institutional Foundations: Access, Participation, Connection */}
          <DesignWhyWeExist />

          {/* Human-Centered Methodology: Listen, Learn, Build, Connect */}
          <DesignHowWeWork />

          {/* Real Community Fellows, Hydrologists & Technologists */}
          <DesignThePeople />

          {/* Dusk Pre-Footer CTA */}
          <DesignPreFooter />
        </div>
      </main>

      {/* 3. Comprehensive Directory Footer */}
      <Footer />
    </div>
  );
}
