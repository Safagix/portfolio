"use client";

import type { CSSProperties } from "react";

const cubeNodes = [
  { label: "RAG", href: "#project-0", x: 0, y: 0, z: 0 },
  { label: "AI", href: "#project-0", x: 78, y: 0, z: 0 },
  { label: "MD", href: "#project-1", x: -78, y: 0, z: 0 },
  { label: "API", href: "#project-2", x: 0, y: -78, z: 0 },
  { label: "UX", href: "#project-2", x: 0, y: 78, z: 0 },
  { label: "N8N", href: "#projects", x: 78, y: -78, z: 58 },
  { label: "LAB", href: "#contact", x: -78, y: 78, z: -58 },
];

function cubeStyle(node: (typeof cubeNodes)[number]) {
  return {
    "--cube-x": `${node.x}px`,
    "--cube-y": `${node.y}px`,
    "--cube-z": `${node.z}px`,
  } as CSSProperties;
}

export function InteractiveCubeDock() {
  return (
    <div className="cube-dock-shell" aria-label="Interactive project cube">
      <div className="cube-dock-shadow" aria-hidden="true" />
      <div className="cube-dock" role="list">
        {cubeNodes.map((node) => (
          <a
            key={node.label}
            className="cube-node"
            href={node.href}
            style={cubeStyle(node)}
            role="listitem"
            aria-label={`Abrir ${node.label}`}
          >
            <span className="cube">
              <span className="cube-face cube-front">{node.label}</span>
              <span className="cube-face cube-back">{node.label}</span>
              <span className="cube-face cube-right" />
              <span className="cube-face cube-left" />
              <span className="cube-face cube-top" />
              <span className="cube-face cube-bottom" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
