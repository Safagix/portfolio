"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const TOOL_POSITIONS = [
  { name: "TypeScript", mark: "TS", x: 60, y: -306 },
  { name: "Python", mark: "Py", x: -32, y: -252 },
  { name: "Next.js", mark: "N", x: -210, y: -188 },
  { name: "React", mark: "Re", x: 214, y: -210 },
  { name: "FastAPI", mark: "FA", x: 286, y: -122 },
  { name: "LangChain", mark: "LC", x: -348, y: -58 },
  { name: "Ollama", mark: "Ol", x: -278, y: 82 },
  { name: "GPT-4o", mark: "4o", x: -218, y: 286 },
  { name: "ChromaDB", mark: "Ch", x: 300, y: 104 },
  { name: "Obsidian", mark: "Ob", x: 152, y: 232 },
  { name: "Supabase", mark: "Sb", x: 306, y: 236 },
  { name: "Tailwind CSS", mark: "Tw", x: -20, y: 316 },
  { name: "Framer Motion", mark: "FM", x: 150, y: 322 },
  { name: "Three.js", mark: "3D", x: -120, y: 352 },
  { name: "n8n", mark: "n8n", x: -328, y: 214 },
  { name: "Docker", mark: "Dk", x: -352, y: 104 },
  { name: "GitHub Actions", mark: "GH", x: -120, y: -312 },
  { name: "JSON", mark: "{}", x: 314, y: 8 },
];

function normalize(value: string) {
  return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function toolStyle(x: number, y: number, index: number) {
  return {
    "--tool-x": `${x}px`,
    "--tool-y": `${y}px`,
    "--tool-delay": `${index * -0.18}s`,
  } as CSSProperties;
}

interface ProjectScene {
  title: string;
  problem: string;
  prompt: string;
  result: string;
  stack: string[];
  role: string;
  metrics: { label: string; value: string }[];
}

function ProjectPanel({ project, index, active }: { project: ProjectScene; index: number; active: boolean }) {
  return (
    <motion.article
      id={`project-${index}`}
      initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, margin: "-18% 0px -18% 0px" }}
      transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
      className={cn("project-story-card", active && "project-story-card-active")}
    >
      <div className="project-story-index">0{index + 1}</div>
      <div className="project-story-content">
        <span className="project-story-kicker">{project.role}</span>
        <h3>{project.title}</h3>
        <p className="project-story-problem">{project.problem}</p>

        <div className="project-story-console">
          <span>prompt</span>
          <p>{project.prompt}</p>
        </div>

        <p className="project-story-result">{project.result}</p>

        <div className="project-story-stack">
          {project.stack.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>

        <div className="project-story-metrics">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function StackSection() {
  const { t } = useI18n();
  const [activeProject, setActiveProject] = useState(0);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);

  const projects = useMemo<ProjectScene[]>(
    () => [
      {
        title: t("project0.title"),
        problem: t("project0.problem"),
        prompt: t("project0.prompt"),
        result: t("project0.result"),
        stack: t("project0.stack").split(",").filter(Boolean),
        role: t("project0.role"),
        metrics: [
          { label: t("project0.m1label"), value: t("project0.m1val") },
          { label: t("project0.m2label"), value: t("project0.m2val") },
          { label: t("project0.m3label"), value: t("project0.m3val") },
        ],
      },
      {
        title: t("project1.title"),
        problem: t("project1.problem"),
        prompt: t("project1.prompt"),
        result: t("project1.result"),
        stack: t("project1.stack").split(",").filter(Boolean),
        role: t("project1.role"),
        metrics: [
          { label: t("project1.m1label"), value: t("project1.m1val") },
          { label: t("project1.m2label"), value: t("project1.m2val") },
          { label: t("project1.m3label"), value: t("project1.m3val") },
        ],
      },
      {
        title: t("project2.title"),
        problem: t("project2.problem"),
        prompt: t("project2.prompt"),
        result: t("project2.result"),
        stack: t("project2.stack").split(",").filter(Boolean),
        role: t("project2.role"),
        metrics: [
          { label: t("project2.m1label"), value: t("project2.m1val") },
          { label: t("project2.m2label"), value: t("project2.m2val") },
          { label: t("project2.m3label"), value: t("project2.m3val") },
        ],
      },
    ],
    [t],
  );

  const activeTools = useMemo(
    () => new Set(projects[activeProject]?.stack.map(normalize) ?? []),
    [activeProject, projects],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.projectIndex);
        if (!Number.isNaN(index)) setActiveProject(index);
      },
      { threshold: [0.35, 0.5, 0.68], rootMargin: "-18% 0px -18% 0px" },
    );

    panelRefs.current.forEach((panel) => {
      if (panel) observer.observe(panel);
    });

    return () => observer.disconnect();
  }, [projects.length]);

  return (
    <section id="projects" className="arsenal-projects-section">
      <span id="stack" className="scroll-mt-24" />
      <div className="arsenal-section-header">
        <span>{t("stack.eyebrow")}</span>
        <h2>{t("stack.headline")}</h2>
      </div>

      <div className="arsenal-projects-grid">
        <aside className="arsenal-sticky" aria-label="Mi arsenal tecnico">
          <div className="arsenal-wall-mark" aria-hidden="true" />
          <div className="arsenal-orbit-stage">
            <div className="arsenal-core">
              <span>Arsenal</span>
              <strong>{projects[activeProject]?.title.split("\u2014")[0].trim() ?? "Digital Lab"}</strong>
            </div>
            <div className="arsenal-ring arsenal-ring-one" aria-hidden="true" />
            <div className="arsenal-ring arsenal-ring-two" aria-hidden="true" />
            <div className="arsenal-ring arsenal-ring-three" aria-hidden="true" />

            {TOOL_POSITIONS.map((tool, index) => {
              const active = activeTools.has(normalize(tool.name));
              return (
                <a
                  key={tool.name}
                  className={cn("arsenal-tool", active && "arsenal-tool-active")}
                  href={`#project-${activeProject}`}
                  style={toolStyle(tool.x, tool.y, index)}
                  aria-label={tool.name}
                >
                  <span className="arsenal-tool-mark">{tool.mark}</span>
                  <span>{tool.name}</span>
                </a>
              );
            })}
          </div>
        </aside>

        <div className="project-scroll-column">
          <div className="project-scroll-intro">
            <p>{t("projects.eyebrow")}</p>
            <h3>{t("projects.headline")}</h3>
          </div>

          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(node) => {
                panelRefs.current[index] = node;
              }}
              data-project-index={index}
            >
              <ProjectPanel project={project} index={index} active={activeProject === index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
