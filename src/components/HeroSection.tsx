"use client";

import { motion } from "framer-motion";
import { InteractiveCubeDock } from "@/components/InteractiveCubeDock";
import { useI18n } from "@/lib/i18n";

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="hero-lab relative min-h-[100dvh] overflow-hidden bg-[#050505]">
      <div className="hero-edge-grid" aria-hidden="true" />

      <div className="relative z-10 grid min-h-[100dvh] w-full grid-cols-1 px-5 pb-16 pt-28 lg:grid-cols-[minmax(300px,0.9fr)_minmax(520px,1.55fr)_minmax(300px,0.85fr)] lg:px-10 lg:pb-10 lg:pt-24">
        <motion.aside
          initial={{ opacity: 0, x: -42, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="hero-cube-wall"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-white">safagix</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">Portfolio</p>
            </div>
            <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[10px] font-bold text-emerald-300">
              online
            </span>
          </div>

          <div className="hero-cube-anchor">
            <InteractiveCubeDock />
          </div>

          <div className="mt-auto grid grid-cols-2 gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-500">
            <a className="hero-micro-link" href="https://github.com/Safagix" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="hero-micro-link" href="#contact">
              Contacto
            </a>
          </div>
        </motion.aside>

        <motion.div
          initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          className="hero-copy-panel"
        >
          <div className="flex items-center justify-between gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.32em] text-slate-500">perfil</span>
            <span className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-600">product systems</span>
          </div>

          <div className="mt-20 max-w-[760px] lg:mt-28">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-300">{t("hero.role")}</p>
            <h1 className="mt-6 max-w-[11ch] text-[clamp(3.4rem,8vw,9.5rem)] font-black leading-[0.78] tracking-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
              {t("hero.name")}
            </h1>
            <p className="mt-7 max-w-[44ch] text-base leading-7 text-slate-400 md:text-lg">
              {t("hero.edge")}
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <a className="hero-primary-action" href="#projects">
              {t("hero.cta")}
              <span aria-hidden="true">-&gt;</span>
            </a>
            <a className="hero-secondary-action" href="#stack">
              Arsenal tecnico
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 32, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.19, 1, 0.22, 1] }}
          className="hero-proof-panel"
        >
          <span className="hero-status-dot" aria-hidden="true" />
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white">Creamos algo que</p>
            <p className="mt-2 text-4xl font-black uppercase leading-[0.92] text-white" style={{ fontFamily: "var(--font-display)" }}>
              funcione.
            </p>
          </div>
          <p className="max-w-[28ch] text-sm leading-6 text-slate-400">
            Trabajo con sistemas pequenos que necesitan entregar rapido con estandares de produccion.
          </p>
          <a className="hero-contact-action" href="#contact">
            Hablemos
          </a>
        </motion.aside>
      </div>
    </section>
  );
}
