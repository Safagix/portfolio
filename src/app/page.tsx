"use client";

import { I18nProvider } from "@/lib/i18n";
import { LangToggle } from "@/components/LangToggle";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { StackSection } from "@/components/StackSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ProofSection } from "@/components/ProofSection";
import { NotesSection } from "@/components/NotesSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <I18nProvider>
      <LangToggle />
      <main>
        <HeroSection />
        <AboutSection />
        <StackSection />
        <ProcessSection />
        <ProofSection />
        <NotesSection />
        <ContactSection />
      </main>
      <footer className="relative z-10 border-t border-white/[0.04] py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:flex-row md:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-emerald-500/60"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Asuncion, Paraguay</span>
          </div>
          <p className="text-xs text-slate-600">Hecho en el Digital Lab &middot; 2026</p>
        </div>
      </footer>
    </I18nProvider>
  );
}
