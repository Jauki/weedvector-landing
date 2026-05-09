import React from "react";
import { motion } from "motion/react";
import { Github } from "lucide-react";

const GREEN = "#4ade80";
const TEXT_HEAD = "#f0f0ef";
const TEXT_BODY = "#8ba083";
const CARD = "#0d0d0b";

const pillars = [
  {
    emoji: "🌱",
    title: "A Foundation for Everyone",
    body: "WeedVector is more than a dashboard. It's a knowledge foundation — for you, your crew, your friends. When self-hosted, it becomes a shared research base: document your grows, your strains, your genetics. Make the knowledge accessible to everyone who matters to you.",
  },
  {
    emoji: "🔬",
    title: "Research-Grade Documentation",
    body: "Track multiple grow cycles. Document every phase. Log what worked, what didn't, and why. The goal is a centralized, searchable record of how your plants perform across time — across environments, across genetics. Cannabis research, done properly.",
  },
  {
    emoji: "🛡️",
    title: "You Decide. Always.",
    body: "Open source means you own the code. Self-hosting means you own the data. We don't sell insights derived from your grows. We don't require an account to use the software. You can disconnect it from the internet entirely. Your cultivation knowledge is yours — share it on your terms.",
  },
];

export function MissionSection() {
  return (
    <section
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: "#060606" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(74,222,128,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div
            className="inline-block px-3 py-1 rounded-full mb-6"
            style={{
              fontSize: "11px",
              color: GREEN,
              background: "rgba(74,222,128,0.07)",
              border: "1px solid rgba(74,222,128,0.2)",
              fontFamily: "Inter, sans-serif",
              letterSpacing: "0.08em",
            }}
          >
            MISSION & PHILOSOPHY
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              color: TEXT_HEAD,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
            }}
          >
            Grow knowledge. Own it.{" "}
            <span style={{ color: GREEN }}>Share it.</span>
          </h2>
          <p
            className="mt-5 max-w-xl mx-auto"
            style={{
              fontSize: "16px",
              fontFamily: "Inter, sans-serif",
              color: TEXT_BODY,
              lineHeight: 1.65,
              fontStyle: "italic",
            }}
          >
            Your data. Your server. Your community.
          </p>
        </motion.div>

        {/* 3-column pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="rounded-2xl p-7 flex flex-col gap-4 relative overflow-hidden group"
              style={{
                background: CARD,
                border: "1px solid rgba(255,255,255,0.06)",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(74,222,128,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-400"
                style={{
                  background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(74,222,128,0.05) 0%, transparent 70%)",
                }}
              />
              <div className="text-2xl relative z-10">{pillar.emoji}</div>
              <h3
                className="relative z-10"
                style={{
                  fontSize: "16px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  color: TEXT_HEAD,
                  lineHeight: 1.3,
                }}
              >
                {pillar.title}
              </h3>
              <p
                className="relative z-10"
                style={{
                  fontSize: "14px",
                  fontFamily: "Inter, sans-serif",
                  color: TEXT_BODY,
                  lineHeight: 1.72,
                }}
              >
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contribution callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-5 rounded-2xl"
            style={{
              background: CARD,
              border: "1px solid rgba(74,222,128,0.12)",
            }}
          >
            <p style={{ fontSize: "14px", fontFamily: "Inter, sans-serif", color: TEXT_BODY }}>
              WeedVector is community-built. Contributions welcome.
            </p>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200"
              style={{
                background: "rgba(74,222,128,0.1)",
                border: "1px solid rgba(74,222,128,0.25)",
                color: GREEN,
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "13px",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(74,222,128,0.16)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(74,222,128,0.1)";
              }}
            >
              <Github size={14} />
              Contribute on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
