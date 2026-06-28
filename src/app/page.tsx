"use client";

import { useMemo, useState } from "react";

type Lang = "es" | "en";

const copy = {
  es: {
    nav: ["Perfil", "Trabajo", "Clientes", "Contacto"],
    talk: "Hablemos",
    role: "INGENIERO DE PRODUCTO · IA APLICADA",
    headlineTop: "Construyo",
    headlineScript: "sistemas",
    headlineBottom: "que producen.",
    subhead:
      "Agentes, apps internas y automatizaciones para equipos que necesitan velocidad sin sacrificar calidad en producción.",
    explore: "Explorar trabajo",
    profile: "PERFIL",
    profileTitle: "Sistemas que se sienten.",
    profileBody:
      "Traduzco requisitos de negocio en sistemas que tu equipo puede operar sin depender de mí en cada incidente.",
    profileNote:
      "Construyo software de punta a punta: interfaces, datos, agentes que ejecutan trabajo real. No demos de chat.",
    services: "SERVICIOS",
    servicesTitle: "Lo que entrego, con plazos claros.",
    servicesBody: "Tres líneas de trabajo. Cada una termina en software desplegable, no en slides.",
    stack: "STACK",
    stackTitle: "Mi Arsenal Técnico",
    work: "PROYECTOS DESTACADOS",
    workTitle: "Casos que hablan en métricas.",
    clients: "CLIENTES",
    clientsTitle: "Qué dicen quienes trabajan conmigo.",
    process: "MÉTODO",
    processTitle: "De la idea al deploy.",
    contact: "CONTACTO",
    contactTitle: "Cuéntame tu proyecto.",
  },
  en: {
    nav: ["Profile", "Work", "Clients", "Contact"],
    talk: "Let's talk",
    role: "PRODUCT ENGINEER · APPLIED AI",
    headlineTop: "I build",
    headlineScript: "systems",
    headlineBottom: "that ship.",
    subhead:
      "Agents, internal tools, and automations for teams that need speed without trading off production quality.",
    explore: "Explore work",
    profile: "PROFILE",
    profileTitle: "Systems that feel right.",
    profileBody:
      "I turn business requirements into systems your team can operate without calling me for every incident.",
    profileNote:
      "I build software end to end: interfaces, data, and agents that do real work. Not chat demos.",
    services: "SERVICES",
    servicesTitle: "What I deliver, with clear timelines.",
    servicesBody: "Three engagement lines. Each ends in deployable software, not slide decks.",
    stack: "STACK",
    stackTitle: "Technical Arsenal",
    work: "FEATURED WORK",
    workTitle: "Cases that speak in metrics.",
    clients: "CLIENTS",
    clientsTitle: "What collaborators say.",
    process: "METHOD",
    processTitle: "From idea to deploy.",
    contact: "CONTACT",
    contactTitle: "Tell me about your project.",
  },
} satisfies Record<Lang, Record<string, string | string[]>>;

const capabilities = [
  "Arquitectura de agentes y RAG",
  "Next.js / Supabase en producción",
  "Automatización n8n y pipelines",
  "UX orientada a conversión",
];

const services = [
  {
    title: "Agentes de IA",
    time: "DESDE 2 SEMANAS",
    body: "Sistemas que ejecutan tareas: consultan APIs, procesan documentos y automatizan flujos con trazabilidad.",
    items: ["Arquitectura multi-agente", "RAG / tool use", "Monitoreo y límites"],
  },
  {
    title: "Apps y herramientas internas",
    time: "DESDE 1-2 SEMANAS",
    body: "Dashboards, paneles admin y productos internos en Next.js con auth, datos y UX pulida.",
    items: ["MVP funcional", "Integración Supabase", "Handoff documentado"],
  },
  {
    title: "Automatización n8n",
    time: "DESDE 1 SEMANA",
    body: "Pipelines que conectan CRM, email, hojas de cálculo y APIs sin trabajo manual repetitivo.",
    items: ["Flujos n8n", "Webhooks", "Alertas y logs"],
  },
];

const stack = ["TypeScript", "Python", "SQL", "Next.js", "React", "FastAPI", "LangChain", "Supabase", "n8n", "Docker", "Tailwind", "Framer Motion"];

const projects = [
  {
    title: "Eira Brain",
    result: "-93% tiempo de búsqueda",
    body: "Asistente RAG local para documentación dispersa en Obsidian, con respuestas citadas y cero dependencia cloud.",
    stack: ["Python", "FastAPI", "Ollama", "ChromaDB"],
  },
  {
    title: "Local RAG MD",
    result: "<30s por repo",
    body: "Pipeline GitHub a Markdown limpio, índice semántico y búsqueda local integrada al flujo de lectura.",
    stack: ["Python", "LangChain", "ChromaDB"],
  },
  {
    title: "UI/UX Catalog",
    result: "18 componentes",
    body: "Clasificación LLM, catálogo JSON y notas Obsidian para arrancar productos con criterio visual compartido.",
    stack: ["Python", "FastAPI", "Ollama"],
  },
];

const process = [
  ["Descubrir", "Problema, usuarios y restricciones alineados antes de código."],
  ["Definir", "Alcance acotado, métricas de éxito y arquitectura mínima."],
  ["Construir", "Iteraciones cortas con demos revisables cada semana."],
  ["Entregar", "Deploy, handoff y documentación operativa."],
];

export default function Home() {
  const [lang, setLang] = useState<Lang>("es");
  const t = copy[lang];
  const nav = t.nav as string[];

  const marquee = useMemo(
    () => ["CENTRADOS EN EL USUARIO", "ADAPTATIVOS", "FLUIDOS", "ROBUSTOS", "OPTIMIZADOS PARA SEO", "INMERSIVOS", "SEGUROS"],
    []
  );

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="safagix home">
          <span>SFG</span>
          <span className="brand-divider" />
          <span>
            <strong>INGENIERO DE PRODUCTO</strong>
            <small>Disponible</small>
          </span>
        </a>
        <nav className="nav-pill" aria-label="Principal">
          {nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
          <button className="lang" onClick={() => setLang(lang === "es" ? "en" : "es")}>
            {lang.toUpperCase()}
          </button>
          <a className="talk" href="#contacto">
            {t.talk}
          </a>
        </nav>
      </header>

      <section id="top" className="hero">
        <p className="eyebrow">{t.role}</p>
        <h1>
          <span className="pixel">{t.headlineTop}</span>
          <span className="script">{t.headlineScript}</span>
          <span className="pixel">{t.headlineBottom}</span>
        </h1>
        <p className="hero-copy">{t.subhead}</p>
        <div className="hero-actions">
          <a href="#trabajo">{t.explore}</a>
          <a href="#contacto">{t.talk}</a>
        </div>
        <div className="corner left">
          <span>DIGITAL LAB</span>
          <small>ASUNCION · PARAGUAY</small>
        </div>
        <div className="corner right">
          <span>ING. DE PRODUCTO</span>
          <small>& ARQ. DE IA</small>
        </div>
      </section>

      <section id="perfil" className="split-section">
        <div>
          <p className="section-kicker">{t.profile}</p>
          <h2>{t.profileTitle}</h2>
        </div>
        <div className="copy-block">
          <p>{t.profileBody}</p>
          <p>{t.profileNote}</p>
          <div className="capabilities">
            {capabilities.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-band">
        <p className="section-kicker">{t.services}</p>
        <h2>{t.servicesTitle}</h2>
        <p className="section-copy">{t.servicesBody}</p>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.title}>
              <span>{service.time}</span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="stack-section">
        <p className="section-kicker">{t.stack}</p>
        <h2>{t.stackTitle}</h2>
        <div className="stack-grid">
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="marquee" aria-hidden="true">
          {[...marquee, ...marquee].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <section id="trabajo" className="work-section">
        <p className="section-kicker">{t.work}</p>
        <h2>{t.workTitle}</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <article key={project.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{project.title}</h3>
                <p>{project.body}</p>
                <div className="chips">
                  {project.stack.map((item) => (
                    <small key={item}>{item}</small>
                  ))}
                </div>
              </div>
              <strong>{project.result}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section">
        <p className="section-kicker">{t.process}</p>
        <h2>{t.processTitle}</h2>
        <div className="process-grid">
          {process.map(([title, body], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="clientes" className="clients-section">
        <p className="section-kicker">{t.clients}</p>
        <h2>{t.clientsTitle}</h2>
        <div className="quote-grid">
          <blockquote>
            "Entregó un MVP funcional en una semana. La arquitectura era clara y el handoff nos permitió iterar solos."
          </blockquote>
          <blockquote>
            "El agente RAG redujo drásticamente el tiempo de búsqueda interna. Cero sorpresas en producción."
          </blockquote>
        </div>
      </section>

      <section id="contacto" className="contact-section">
        <p className="section-kicker">{t.contact}</p>
        <h2>{t.contactTitle}</h2>
        <a href="mailto:hello@safagix.dev">hello@safagix.dev</a>
      </section>
    </main>
  );
}
