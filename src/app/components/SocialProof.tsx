import React from "react";
import { Github, Star } from "lucide-react";

const techStack = [
  "TimescaleDB",
  "MQTT",
  "Next.js",
  "Docker",
  "RabbitMQ",
  "Kotlin",
  "Spring Boot",
];

export function SocialProof() {
  return (
    <section
      className="py-8 px-6"
      style={{
        background: "#060606",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* GitHub Stars */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href="https://github.com/Jauki/weedvector/"
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200"
              style={{
                background: "#0d0d0b",
                border: "1px solid rgba(255,255,255,0.07)",
                fontSize: "13px",
                color: "#9aaa94",
                fontFamily: "'Geist Mono', monospace",
              }}
            >
              <Github size={14} />
              <span>jauki/weedvector</span>
              <div
                className="flex items-center gap-1 pl-3 ml-1"
                style={{ borderLeft: "1px solid rgba(255,255,255,0.07)", color: "#4ade80" }}
              >
                <Star size={12} fill="#4ade80" />
                <span>3</span>
              </div>
            </a>
            <div
              className="px-3 py-1 rounded-full"
              style={{
                fontSize: "11px",
                color: "#4ade80",
                background: "rgba(74, 222, 128, 0.07)",
                border: "1px solid rgba(74, 222, 128, 0.2)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Trusted by Growers
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-8" style={{ background: "#0c0c0c" }} />

          {/* Tech strip */}
          <div className="flex items-center gap-2 flex-wrap justify-center md:justify-end">
            <span
              style={{
                fontSize: "11px",
                color: "#4a5a44",
                fontFamily: "Inter, sans-serif",
                letterSpacing: "0.05em",
                marginRight: 4,
              }}
            >
              BUILT ON:
            </span>
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md"
                style={{
                  fontSize: "11px",
                  color: "#6a7e5a",
                  background: "#0d0d0b",
                  border: "1px solid rgba(255,255,255,0.06)",
                  fontFamily: "'Geist Mono', monospace",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
