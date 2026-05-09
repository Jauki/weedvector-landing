import React from "react";
import { motion } from "motion/react";
import { Github, Cloud, Terminal } from "lucide-react";

const GREEN = "#4ade80";
const TEXT_HEAD = "#f0f0ef";
const TEXT_BODY = "#8ba083";

const terminalLines = [
  { prefix: "$", content: "git clone https://github.com/jauki/weedvector", color: "#9aaa94" },
  { prefix: "$", content: "cd weedvector", color: "#9aaa94" },
  { prefix: "$", content: "docker compose up", color: "#c0ceb8" },
  { prefix: "✓", content: "TimescaleDB started", color: "#4ade80" },
  { prefix: "✓", content: "Eclipse Mosquitto (MQTT) ready", color: "#4ade80" },
  { prefix: "✓", content: "Spring Boot API running :8080", color: "#4ade80" },
  { prefix: "✓", content: "Next.js frontend running :3000", color: "#4ade80" },
  { prefix: "→", content: "Dashboard: http://localhost:3000", color: "#c0ceb8" },
];

export function OpenSourceSection() {
  return (
    <section
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: "#070707" }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(74,222,128,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div
              className="inline-block px-3 py-1 rounded-full w-fit"
              style={{
                fontSize: "11px",
                color: GREEN,
                background: "rgba(74,222,128,0.07)",
                border: "1px solid rgba(74,222,128,0.2)",
                fontFamily: "Inter, sans-serif",
                letterSpacing: "0.08em",
              }}
            >
              OPEN SOURCE, ALWAYS
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontFamily: "Inter, sans-serif",
                fontWeight: 800,
                color: TEXT_HEAD,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
              }}
            >
              Open source,<br />
              <span style={{ color: GREEN }}>always.</span>
            </h2>

            <p style={{ fontSize: "15px", fontFamily: "Inter, sans-serif", color: TEXT_BODY, lineHeight: 1.7, maxWidth: 440 }}>
              WeedVector's full source code is on GitHub. Clone it. Deploy it. Modify it.
              No hidden features. No license traps. No telemetry you didn't ask for.
            </p>
            <p style={{ fontSize: "15px", fontFamily: "Inter, sans-serif", color: TEXT_BODY, lineHeight: 1.7, maxWidth: 440 }}>
              If you'd rather not manage servers — we've got you.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href="#"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border transition-all duration-200"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#9aaa94",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  background: "#0c0c0c",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(74,222,128,0.35)";
                  (e.currentTarget as HTMLElement).style.color = TEXT_HEAD;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLElement).style.color = "#9aaa94";
                }}
              >
                <Github size={15} />
                View on GitHub
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-200"
                style={{
                  background: GREEN,
                  color: "#070707",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#22c55e")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = GREEN)}
              >
                <Cloud size={15} />
                Use Cloud Version
              </a>
            </div>
          </motion.div>

          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: "#060606", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* Terminal header */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ background: "#0a0a09", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ background: "#2a2a28" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#2a2a28" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#2a2a28" }} />
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <Terminal size={11} color="#4a5a44" />
                  <span style={{ fontSize: 11, color: "#4a5a44", fontFamily: "'Geist Mono', monospace" }}>
                    bash
                  </span>
                </div>
              </div>
              {/* Terminal body */}
              <div className="p-6 flex flex-col gap-2">
                {terminalLines.map((line, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3"
                    style={{ fontFamily: "'Geist Mono', monospace", fontSize: 13 }}
                  >
                    <span style={{ color: "#3a4830", flexShrink: 0, width: 14, textAlign: "right" }}>
                      {line.prefix}
                    </span>
                    <span style={{ color: line.color }}>{line.content}</span>
                  </div>
                ))}
                {/* Blinking cursor */}
                <div className="flex items-center gap-3" style={{ fontFamily: "'Geist Mono', monospace", fontSize: 13 }}>
                  <span style={{ color: "#3a4830", width: 14, textAlign: "right" }}>$</span>
                  <span
                    style={{ color: GREEN, display: "inline-block", width: 8, height: 16, background: "rgba(74,222,128,0.5)" }}
                    className="animate-pulse"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
